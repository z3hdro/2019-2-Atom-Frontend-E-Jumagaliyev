import { throwStatement } from '@babel/types';

/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
const template = document.createElement('template');
template.innerHTML = `
    <style>
        .chat-header{
            width: 100%;
            height: 5vh;
            background: lightpink;
            padding: 2vh;
            display:flex;
            justify-content: space-between;
            align-items: flex-end;
            font-size: 3vh;
            font-family: Segoe UI;
            position: fixed;
        }

        .menu-btn {
            flex-grow: 0;
            width: 5vh;
            height: 5vh;
            margin-left: 1vh;
            background-color: #fff;
            border-radius: 50%
        }
        .menu-btn img{
            width:100%;
        }

        .header-messenger {
            flex: 1;
        }

        .header-messenger p{
            margin: 1vh;
            padding-left: 2vh;
        }

        .finder-btn {
            flex: 1;
            width: 4vh;
            height: 4vh;
            margin-right: 5vh;
            display: flex;
            justify-content: flex-end;
        }

        .finder-btn img.findPic {
            width: 4vh;
        }

        .finder-btn img.closePic {
            margin-left: 1vh;
            width: 4vh;
        }

        .text-holder {
            width: 60%;
            height: 3vh;
            border-radius: 2vh;
            padding: 0vh 1vh 0vh 1vh;
            font-size: 2.5vh;
        }



    </style>
    <div class='chat-header'>
        <div class='menu-btn'>
            <img src='http://s1.iconbird.com/ico/2013/3/636/w80h80139396727847.png'>
        </div>
        <div class='header-messenger'>
            <p>Messenger</p>
        </div>
        <div class='finder-btn'>
            <form>
                <img class='findPic' src='http://s1.iconbird.com/ico/2013/1/569/w24h24138981479606magnify.png'>
            </form>
        </div>
    </div>
`;

class ChatHeader extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$menuBtn = this.shadowRoot.querySelector('.menu-btn');
    this.$finderContainer = this.shadowRoot.querySelector('.finder-btn');
    this.$findBtnImage = this.shadowRoot.querySelector('.finder-btn img');

    this.$findBtnImage.addEventListener('click', this._onClickFinder.bind(this));
    // this.$menuBtn.addEventListener('click', this._onClickMenu(this));
  }

  _onClickFinder() {
    this.$findBtnImage = this.shadowRoot.querySelector('.finder-btn img');
    this.$findBtnImage.remove();
    const textHolder = document.createElement('input');
    textHolder.type = 'text';
    textHolder.className = 'text-holder';
    textHolder.placeholder = 'Поиск';
    this.$finderContainer.appendChild(textHolder);
    const closeBtn = document.createElement('img');
    closeBtn.className = 'closePic';
    closeBtn.src = 'http://s1.iconbird.com/ico/0612/GooglePlusInterfaceIcons/w128h1281338911586cross.png';
    closeBtn.addEventListener('click', () => {
      textHolder.remove();
      closeBtn.remove();
      const findBtn = document.createElement('img');
      findBtn.className = 'findPic';
      findBtn.addEventListener('click', this._onClickFinder.bind(this));
      findBtn.src = 'http://s1.iconbird.com/ico/2013/1/569/w24h24138981479606magnify.png';
      this.$finderContainer.appendChild(findBtn);
    });
    this.$finderContainer.appendChild(closeBtn);
  }
}

customElements.define('chat-list-header', ChatHeader);
