export class Navbar extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'closed' });
    }

    connectedCallback() {
        // html
        this.shadow.innerHTML =
            `
            <nav id="main-nav" class="sidebar">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/lorem">Lorem</a>
                <a href="/design">Design</a>
                <a href="/experience">Experience</a>
            </nav>
            `
        ;

        // js
        this.links = this.shadow.querySelectorAll('a');
        this.links.forEach(link => {
            link.addEventListener('click', this.handleLinkClick.bind(this));
        });
    }

    static observedAttributes = [];
    attributeChangedCallback() {

    }

    handleLinkClick(event) {
        event.preventDefault();
        window.route(event);
    }
}

customElements.define('app-navbar', Navbar);