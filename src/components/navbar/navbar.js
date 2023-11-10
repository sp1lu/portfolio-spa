export class Navbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // html
       this.shadowRoot.innerHTML =
            `
            <nav>
                <ul>
                    <li><a href="/design">Design</a></li>
                    <li><a href="/coding">Coding</a></li>
                    <li><a href="/experience">Experience</a></li>
                    <li><a href="/about">About</a></li>
                <ul>
            </nav>
            `
        ;

        // js
        this.links = this.shadowRoot.querySelectorAll('a');
        this.links.forEach(link => {
            link.addEventListener('click', this.handleLinkClick.bind(this));
        });

        // css
        const style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', '/src/components/navbar/navbar.css');
        this.shadowRoot.append(style);
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