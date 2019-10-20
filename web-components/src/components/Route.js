const template = document.createElement('template');
template.innerHTML = `
    <div class='route'></div>
`;

class Route extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$route = this.shadowRoot.querySelector('.route');
  }

  connectedCallback() {
    const $chatlist = document.createElement('chat-list');
    $chatlist.enter = (name) => {
      $chatlist.remove();
      const $chat = document.createElement('message-form');
      $chat.setAttribute('name', name);
      $chat.quit = () => {
        $chat.remove();
        this.connectedCallback();
      };
      this.$route.appendChild($chat);
    };
    this.$route.appendChild($chatlist);
  }
}

customElements.define('chat-route', Route);
