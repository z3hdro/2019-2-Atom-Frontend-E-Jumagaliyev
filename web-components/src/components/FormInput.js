const template = document.createElement('template')
template.innerHTML = `
    <style>
        input {
            border: 0;
            border-top: 5px solid silver;
            outline: none;
            width: 100%;
            height: 130px;
            font-size: 60px;
            padding: 25px 50px;
            margin: 0;
            position: fixed;
            bottom: 0;
        }

        :host {
            display: inline-block;
        }

    </style>
    <input type="text">
`;

class FormInput extends HTMLElement {
    constructor () {
        super()
        // eslint-disable-next-line no-underscore-dangle
        this._shadowRoot = this.attachShadow({ mode: 'open' })
        // eslint-disable-next-line no-underscore-dangle
        this._shadowRoot.appendChild(template.content.cloneNode(true))

        this.$input = this.shadowRoot.querySelector('input')
    }

    static get observedAttributes() {
        return ['name', 'value', 'placeholder', 'disabled']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.$input.setAttribute(name, newValue)
    }

    set value(newValue){
        this.$input.value = newValue
    }

    get value() {
        return this.$input.value
    }
}

customElements.define('form-input', FormInput)
