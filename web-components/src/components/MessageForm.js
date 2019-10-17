/* eslint-disable eqeqeq */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
const template = document.createElement('template');
template.innerHTML = `
    <style>
        form-input {
            width: auto;
        }

        .chat-header{
            background: lightpink;
            height: 130px;
            width: 100%;
            position: fixed;
            top: 0;
        }    

        .result {
            background: #ebdddd;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            padding: 50px;
            overflow: hidden;
            margin-top: 100px;
            margin-bottom: 30px;
            
        }

        

        input[type=submit] {
            visibility: collapse;

        }
    </style>
    <form>
        <div class='chat-header'>
        <h1 style='text-align:center'>Header and etc</h1>
        </div>
        <div class="result"></div>
        <form-input name="message-text" placeholder="Сообщение"></form-input>
    </form>
`;

class MessageForm extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$form = this._shadowRoot.querySelector('form');
    this.$input = this._shadowRoot.querySelector('form-input');
    this.$message = this._shadowRoot.querySelector('.result');

    this.$form.addEventListener('submit', this._onSubmit.bind(this));
    this.$form.addEventListener('keypress', this._onKeyPress.bind(this));

    if (localStorage.getItem('messages') !== null) {
      const messages = JSON.parse(localStorage.getItem('messages'));
      // eslint-disable-next-line no-plusplus
      for (let element = 0; element < messages.length; element++) {
        const $content = document.createElement('message-box');
        $content.authorV = messages[element];
        element += 1;
        $content.textV = messages[element];
        element += 1;
        $content.timeV = messages[element];
        this.$message.appendChild($content);
        this.$message.scrollTop = this.$message.scrollHeight;
      }
    }
  }

  _onSubmit(event) {
    event.preventDefault();
    this.$input.value = this.$input.value.replace(/\s+/g, ' ').replace(/^\s|\s$/g, '');
    if (this.$input.value.length > 0) {
      const time = new Date();
      const author = 'you';
      const $newmessage = document.createElement('message-box');
      if (localStorage.getItem('messages') === null) {
        localStorage.setItem('messages', JSON.stringify([author, this.$input.value, time.toTimeString().slice(0, 5)]));
      } else {
        const next = JSON.parse(localStorage.getItem('messages'));
        next.push(author);
        next.push(this.$input.value);
        next.push(time.toTimeString().slice(0, 5));
        localStorage.setItem('messages', JSON.stringify(next));
      }

      $newmessage.textV = this.$input.value;
      $newmessage.authorV = author;
      $newmessage.timeV = time.toTimeString().slice(0, 5);
      this.$message.appendChild($newmessage);
      this.$input.value = '';
      window.scrollTo(0, document.body.scrollHeight);
    }
  }

  _onKeyPress(event) {
    if (event.keyCode == 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }
}

customElements.define('message-form', MessageForm);
