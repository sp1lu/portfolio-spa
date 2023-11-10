export class ExperienceCard extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'closed' });
    }

    render() {
    }

    connectedCallback() {
        // html
        this.shadow.innerHTML =
            `
            <article>
                <p>${JSON.parse(this.getAttribute('job')).date}</p>
                <h3>${JSON.parse(this.getAttribute('job')).role}</h3>
                <a href="${JSON.parse(this.getAttribute('job')).companyUrl}" target="_blank"><span>${JSON.parse(this.getAttribute('job')).company}</span></a>
                <p>${JSON.parse(this.getAttribute('job')).desc}</p>
            </article>
            `
        ;
    }

    static observedAttributes = [];
    attributeChangedCallback() {

    }
}

customElements.define('app-experience-card', ExperienceCard);