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

        this.shadow.innerHTML =
            `
            <article>
                <p>${job.date}</p>
                <h3>${job.role}</h3>
                <a href="${job.companyUrl}" target="_blank"><span>${job.company}</span></a>
                <p>${job.desc}</p>
            </article>
            `
        ;

        this.card = this.shadow.querySelector('article');
        job.technologies.forEach(technology => {
            const pill = document.createElement('span');
            pill.innerText = technology;
            this.card.append(pill);
        });
    }

    static observedAttributes = [];
    attributeChangedCallback() {

    }
}

customElements.define('app-experience-card', ExperienceCard);