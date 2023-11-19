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
        style.setAttribute('href', '/css/navbar.css');
        this.shadowRoot.append(style);
    }

    static observedAttributes = ['current-page'];
    attributeChangedCallback(name, oldValue, newValue) {
        if (name == 'current-page') {    
            this.styleCurrentLink(this.links);
        }
    }

    handleLinkClick(event) {
        event.preventDefault();
        window.route(event);
    }

    styleCurrentLink(links) {
        links.forEach(link => {
            if (this.getAttribute('current-page') == link.getAttribute('href')) {
                links.forEach(link => link.classList.remove('current'));
                link.classList.add('current');
            }
        });
    }
}

customElements.define('app-navbar', Navbar);