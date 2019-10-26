/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
const template = document.createElement('template');
template.innerHTML = `
    <style>
        .messages{
            width: 100%;
            background: #ebdddd;
            padding-top: 9vh;
            display: flex;
            flex-direction: column-reverse;
        }

        .create-chat {
          border-radius: 5vh;
          position: fixed;
          height: 4vh;
          width:80%;
          bottom: 15%;
          left: 2.5vh;
          font-size: 3vh;
          font-family: Segoe UI;
          padding: 2vh 0 2vh 4vh;
          opacity: 0.6;
          animation: creating 1s;
          animation-direction: normal;
        }

        @-webkit-keyframes creating {
          from {
            bottom: 0;
            width: 0;
          }
          to {
            bottom: 15%;
            width: 80%;
          }
        }

        @keyframes creating {
          from {
            bottom: 0;
            width: 0;
          }
          to {
            bottom: 15%;
            width: 80%;
          }
        }

        .create-chat:focus {
          opacity:0.95;
        }

        .user-box {
          width: 100%;
          height: 10vh;
          background: #ebdddd;
          border-bottom: 0.5vh solid lightpink;
          font-size: 3vh;
          font-family: Segoe UI;
          display: flex;
          justify-content: space-around;
          align-items: center;
          animation: slidetoright 1.5s;
          transition: background 1s;
          
        }

        @-webkit-keyframes slidetoright{
          from {
            width: 0;
            height: 5vh;
          }
          to {
            width: 100%;
            height: 10vh;
          }
        }

        @keyframes slidetoright {
          from {
            width: 0;
            height: 5vh;
          }
          to {
            width: 100%;
            height: 10vh;
          }
        }

        .user-box:hover {
          background: #C2A3BB;
        }

        .avatar {
          width: 6vh;
          height: 6vh;
          display: block;
          flex: 0;
          border-radius: 50%;
          background: #fff;
          margin-left: 2vh;
        }

        .avatar img{
          width: 6vh;
        }

        .chatContainer {
          margin: 0;
          flex: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        }

        .indicatorCont {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: flex-end;
          padding-right: 2vh;
        }
        
        .chat-header {
          margin: 0;
          font-weight: bold;
          font-size: 3vh;
          padding: 1vh 0 2vh 4vh;
        }
        
        .msg {
          font-size: 2.5vh;
          padding-left: 4vh;
          margin: 0;
          max-width: 6vh;
          word-wrap: normal;
          white-space: nowrap;
        }
        
        .time {
          display: block;
          margin: 0;
        }

        .indicator {
          padding-top: 1vh;
          margin: 0;
          width: 4vh;
        }

    </style>
      <chat-list-header></chat-list-header>
      <div class='messages'>
        <form></form>
      </div>
      <btn-chat class='chat-btn'></btn-chat>
`;

class ChatList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$form = this.shadowRoot.querySelector('form');
    this.$container = this.shadowRoot.querySelector('.messages');
    this.$header = this.shadowRoot.querySelector('chat-list-header');
    this.$btn = this.shadowRoot.querySelector('.chat-btn');
    this.$btn.addEventListener('click', this._OpenWindow.bind(this));
  }

  connectedCallback() {
    if (localStorage.getItem('usernames') !== null) {
      JSON.parse(localStorage.getItem('usernames')).forEach((element) => {
        const username = element;
        const box = document.createElement('div');
        const avatar = document.createElement('div');
        const avatarImg = document.createElement('img');
        const chatContainer = document.createElement('div');
        const name = document.createElement('p');
        const msg = document.createElement('p');
        const indicatorCont = document.createElement('div');
        const time = document.createElement('span');
        const indicator = document.createElement('img');
        box.className = 'user-box';
        avatar.className = 'avatar';
        name.className = 'chat-header';
        msg.className = 'msg';
        chatContainer.className = 'chatContainer';
        indicatorCont.className = 'indicatorCont';
        time.className = 'time';
        indicator.className = 'indicator';
        avatarImg.src = 'http://s1.iconbird.com/ico/2013/3/636/w80h80139396728710.png';
        name.innerHTML = username;
        avatar.appendChild(avatarImg);
        box.appendChild(avatar);
        chatContainer.appendChild(name);
        if (localStorage.getItem(username) !== null) {
          const message = JSON.parse(localStorage.getItem(username));
          const msglen = message[message.length - 2];
          if (msglen.length > 20) {
            msg.innerHTML = (`${msglen.slice(0, 18)}..`);
          } else {
            msg.innerHTML = msglen;
          }
          time.innerHTML = message[message.length - 1];
          indicator.src = 'http://s1.iconbird.com/ico/0912/fugue/w24h241349011565tick.png';
          chatContainer.appendChild(msg);
          indicatorCont.appendChild(time);
          indicatorCont.appendChild(indicator);
        }
        box.appendChild(chatContainer);
        box.appendChild(indicatorCont);
        box.addEventListener('click', this.MoveTo.bind(this, element));
        this.$container.appendChild(box);
      });
    }
  }

  _OpenWindow() {
    this.$txt = this.shadowRoot.querySelector('.create-chat');
    if (this.$txt === null) {
      const openBtn = document.createElement('input');
      openBtn.className = 'create-chat';
      openBtn.placeholder = 'Создать чат';
      openBtn.type = 'text';
      this.$form.appendChild(openBtn);
      this.$form.addEventListener('submit', this._onSubmit.bind(this));
      this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
    } else {
      this.$txt.style.animationDirection = 'reverse';
      this.$txt.remove();
    }
  }

  _onSubmit(event) {
    event.preventDefault();
    const createChat = this.shadowRoot.querySelector('.create-chat');
    if (createChat.value.trim().length > 0) {
      const username = createChat.value;
      if (localStorage.getItem('usernames') === null) {
        localStorage.setItem('usernames', JSON.stringify([username]));
      } else {
        const next = JSON.parse(localStorage.getItem('usernames'));
        next.push(username);
        localStorage.setItem('usernames', JSON.stringify(next));
      }
      const box = document.createElement('div');
      const avatar = document.createElement('div');
      const avatarImg = document.createElement('img');
      const chatContainer = document.createElement('div');
      const name = document.createElement('p');
      const msg = document.createElement('p');
      const indicatorCont = document.createElement('div');
      const time = document.createElement('span');
      const indicator = document.createElement('img');
      box.className = 'user-box';
      avatar.className = 'avatar';
      name.className = 'chat-header';
      msg.className = 'msg';
      chatContainer.className = 'chatContainer';
      indicatorCont.className = 'indicatorCont';
      time.className = 'time';
      indicator.className = 'indicator';
      avatarImg.src = 'http://s1.iconbird.com/ico/2013/3/636/w80h80139396728710.png';
      name.innerHTML = username;
      avatar.appendChild(avatarImg);
      box.appendChild(avatar);
      chatContainer.appendChild(name);
      if (localStorage.getItem(username) !== null) {
        const message = JSON.parse(localStorage.getItem(username));
        const msglen = message[message.length - 2];
        if (msglen.length > 20) {
          msg.innerHTML = (`${msglen.slice(0, 18)}..`);
        } else {
          msg.innerHTML = msglen;
        }
        time.innerHTML = message[message.length - 1];
        indicator.src = 'http://s1.iconbird.com/ico/0912/fugue/w24h241349011565tick.png';
        chatContainer.appendChild(msg);
        indicatorCont.appendChild(time);
        indicatorCont.appendChild(indicator);
      }
      box.appendChild(chatContainer);
      box.appendChild(indicatorCont);
      box.addEventListener('click', this.MoveTo.bind(this, username));
      this.$container.appendChild(box);
      createChat.value = '';
    }
  }

  _onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }

  /**
   * @param {any} value
   */
  set enter(value) {
    this.MoveTo = value;
  }
}

customElements.define('chat-list', ChatList);
