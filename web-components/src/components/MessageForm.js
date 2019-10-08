const template = document.createElement('template');
template.innerHTML = `
    <style>
        form-input {
            width: auto;
        }

        .chat-header{
            background: lightpink;
            height: 250px;
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
            margin-top: 220px;
            margin-bottom: 80px;
        }

        .chat-box {
            background: lightblue;
            border-radius: 15px;
            width: auto;
            padding: 15px;
            margin-bottom: 50px;
            max-width: 700px;
        }
        
        span {
            text-align: right;
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
    constructor () {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$form = this._shadowRoot.querySelector('form');
        this.$input = this._shadowRoot.querySelector('form-input');
        this.$message = this._shadowRoot.querySelector('.result');

        this.$form.addEventListener('submit', this._onSubmit.bind(this));
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
        
        for (let element = 0; element < localStorage.length - 1; element++){
            let $cont_from_storage = document.createElement('div');
            let $newElement = document.createElement('p');
            let $author_from_storage = document.createElement('span');
            let $time_message = document.createElement('span');
            $cont_from_storage.className = 'chat-box';
            $newElement.className = 'chat-text';
            $author_from_storage.className = 'chat-author';
            $time_message.className = 'chat-time';
            let $str = localStorage.getItem('id-' + element);
            let $arr = $str.split(';');
            $newElement.innerHTML = $arr[0];
            $time_message.innerHTML = $arr[1];
            $author_from_storage.innerHTML = $arr[2];
            $cont_from_storage.appendChild($author_from_storage);
            $cont_from_storage.appendChild($newElement);
            $cont_from_storage.appendChild($time_message);
            this.$message.appendChild($cont_from_storage);
        }
    }

    _onSubmit (event) {
        event.preventDefault();
        if (this.$input.value.length > 0){
            let $time = new Date();
            let $author = 'you';
            localStorage.setItem('id-' + (localStorage.length - 1).toString(), (this.$input.value + ';' + $time.toTimeString().slice(0,5) + ';' + $author));
            let $newcontainer = document.createElement('div');
            let $newmessage = document.createElement('p');
            let $author_name = document.createElement('span');
            let $time_show = document.createElement('span');
            $newcontainer.className = 'chat-box';
            $newmessage.className = 'chat-text';
            $author_name.className = 'chat-author';
            $time_show.className = 'chat-time';
            $newmessage.innerHTML = this.$input.value;
            $author_name.innerHTML = $author;
            $time_show.innerHTML = $time.toTimeString().slice(0,5);
            $newcontainer.appendChild($author_name);
            $newcontainer.appendChild($newmessage);
            $newcontainer.appendChild($time_show);
            this.$message.appendChild($newcontainer);
            this.$input.value = '';
        }
    }

    _onKeyPress (event) {
        if (event.keyCode == 13) {
            this.$form.dispatchEvent(new Event('submit'));
        }
    }
}

customElements.define('message-form', MessageForm);
