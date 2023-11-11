export class ExperienceCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    render() {
    }

    connectedCallback() {
        // html
        const job = JSON.parse(this.getAttribute('job'));

        this.shadowRoot.innerHTML =
            `
            <article>
                <p class="experience-date">${job.date}</p>
                <div class="experience-role-company">
                    <h3>${job.role}</h3>
                    <span class="divider">•</span>
                    <a href="${job.companyUrl}" target="_blank">${job.company}
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                            </svg>
                        </span>
                    </a>
                </div>
                <p>${job.desc}</p>
                <div class="experience-skills"></div>
            </article>
            `
        ;

        this.skills = this.shadowRoot.querySelector('.experience-skills');
        job.technologies.forEach(technology => {
            const pill = document.createElement('span');
            pill.classList.add('skill');
            pill.innerText = technology;
            this.skills.append(pill);
        });

        // css
        const style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', '/src/components/experience/experience.css');
        this.shadowRoot.append(style);
    }

    static observedAttributes = [];
    attributeChangedCallback() {

    }
}

customElements.define('app-experience-card', ExperienceCard);