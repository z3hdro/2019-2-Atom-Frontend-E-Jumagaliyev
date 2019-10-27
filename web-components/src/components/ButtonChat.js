/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
const template = document.createElement('template');
template.innerHTML = `
    <style>
        .btn-chat{
            width: 110px;
            height: 110px;
            border-radius: 50%;
            background: #cca92c;
            cursor: pointer;
            box-shadow: 0 0 0 rgba(204,169,44, 0.4);
            animation: pulse 2s infinite;
            position: fixed;
            bottom: 4vh;
            right: 4vh;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: background 1s;
        }
        .btn-chat:hover {
            background: #FFAB15; 
            opacity: 0.75;
            animation: none;
          }
          
          @-webkit-keyframes pulse {
            0% {
              -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
            }
            70% {
                -webkit-box-shadow: 0 0 0 35px rgba(204,169,44, 0);
            }
            100% {
                -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
            }
          }
          @keyframes pulse {
            0% {
              -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
              box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
            }
            70% {
                -moz-box-shadow: 0 0 0 35px rgba(204,169,44, 0);
                box-shadow: 0 0 0 35px rgba(204,169,44, 0);
            }
            100% {
                -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
                box-shadow: 0 0 0 0 rgba(204,169,44, 0);
            }
          }

          .btn-chat img{
            width:60%;
            
          }
    
    </style>
    <div class='btn-chat'>
          <img alt='Создать чат' src='http://s1.iconbird.com/ico/0512/GlyphIcons/file1337170571.png'>
    </div>
`;

class BtnChat extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$btn = this.shadowRoot.querySelector('.btn-chat');
  }
}

customElements.define('btn-chat', BtnChat);
