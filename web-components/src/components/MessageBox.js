/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
const template = document.createElement('template');
template.innerHTML = `
        <style>
            .chat-box {
                background: lightblue;
                border-radius: 25px;
                width: auto;
                padding: 15px;
                margin-bottom: 50px;
                max-width: 700px;
            }

            span {
                display: inline-block;
                font-size: 30px;
                font-style: italic;
            }

            .chat-text {
                font-size: 50px;
                font-family: Segoe UI;
                overflow-wrap: break-word;
                white-space: pre-wrap;
                line-height: 45px;
                
            }
        </style>
        <div class = 'chat-box'>
            <span class='chat-author'></span>
            <p class='chat-text'></p>
            <span class='chat-time'></span>
        </div>
`;

class Chatbox extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$author = this._shadowRoot.querySelector('.chat-author');
    this.$text = this._shadowRoot.querySelector('.chat-text');
    this.$time = this._shadowRoot.querySelector('.chat-time');
  }

  static get observedAttributes() {
    return ['author', 'text', 'time'];
  }

  attributeChangedCallback(attrName, newValue) {
    if (attrName === 'author') {
      this.$author.setAttribute(attrName, newValue);
    } else if (attrName === 'text') {
      this.$text.setAttribute(attrName, newValue);
    } else {
      this.$time.setAttribute(attrName, newValue);
    }
  }

  set authorV(newValue) {
    this.$author.innerHTML = newValue;
  }

  set textV(newValue) {
    this.$text.innerHTML = newValue;
  }

  set timeV(newValue) {
    this.$time.innerHTML = newValue;
  }

  get authorV() {
    return this.$author.value;
  }

  get textV() {
    return this.$text.value;
  }

  get timeV() {
    return this.$time.value;
  }
}

customElements.define('message-box', Chatbox);
