/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-const */
const template = document.createElement('template')
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
`

class MessageForm extends HTMLElement {
    constructor () {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'open' })
        this._shadowRoot.appendChild(template.content.cloneNode(true))
        this.$form = this._shadowRoot.querySelector('form')
        this.$input = this._shadowRoot.querySelector('form-input')
        this.$message = this._shadowRoot.querySelector('.result')

        this.$form.addEventListener('submit', this._onSubmit.bind(this))
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this))
        
        // eslint-disable-next-line no-plusplus
        for (let element = 0; element < localStorage.length - 1; element++){
            let $content = document.createElement('message-box')
            let str = localStorage.getItem(`id-${  element}`)
            let arr = str.split('@#$%/')
            $content.textV = arr[0]
            $content.timeV = arr[1]
            $content.authorV = arr[2]
            this.$message.appendChild($content)
            this.$message.scrollTop = this.$message.scrollHeight
        }
    }

    _onSubmit (event) {
        event.preventDefault()
        this.$input.value = this.$input.value.replace(/\s+/g, " ").replace(/^\s|\s$/g, "")
        if (this.$input.value.length > 0){
            let time = new Date()
            let author = 'you'
            let $newmessage = document.createElement('message-box')
            localStorage.setItem(`id-${  (localStorage.length - 1)}`, (`${this.$input.value  }@#$%/${  time.toTimeString().slice(0,5)  }@#$%/${  author}`))
            $newmessage.textV = this.$input.value 
            $newmessage.authorV = author
            $newmessage.timeV = time.toTimeString().slice(0,5)
            this.$message.appendChild($newmessage)
            this.$input.value = ''
        }
    }

    _onKeyPress (event) {
        if (event.keyCode == 13) {
            this.$form.dispatchEvent(new Event('submit'))
        }
    }
}

customElements.define('message-form', MessageForm)
