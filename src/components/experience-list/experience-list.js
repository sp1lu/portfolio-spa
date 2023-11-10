import { fetchJson } from '/src/utils/fetchJson.js';
const jobsUrl = '/json/jobs.json';
const jobs = await fetchJson(jobsUrl);

export class ExperienceList extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'closed' });
    }

    render() {

    }

    connectedCallback() {
        // html
        jobs.reverse();
        jobs.forEach(job => {
            this.card = document.createElement('app-experience-card');
            this.card.setAttribute('job', JSON.stringify(job));
            this.shadow.append(this.card);
        });
    }

    static observedAttributes = [];
    attributeChangedCallback() {

    }
}

customElements.define('app-experience-list', ExperienceList);