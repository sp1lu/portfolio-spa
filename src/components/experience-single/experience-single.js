export class ExperienceCard extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'closed' });
    }

    render() {
    }

    connectedCallback() {
        // html
        const job = JSON.parse(this.getAttribute('job'));
        this.card = document.createElement('card');

        this.company = document.createElement('p');
        this.company.innerText = job.company;
        this.card.append(this.company);

        this.shadow.append(this.card);
    }

    static observedAttributes = [];
    attributeChangedCallback() {

    }
}

customElements.define('app-experience-card', ExperienceCard);