export class Pill extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // html
        this.shadowRoot.innerHTML = `<span></span>`;

        this.span = this.shadowRoot.querySelector('span');
        if (this.hasAttribute('text')) {
            this.span.innerText = this.getAttribute('text');   
        }

        // css
        const style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', '/src/components/pill/pill.css');
        this.shadowRoot.append(style);
    }
}

customElements.define('app-pill', Pill);