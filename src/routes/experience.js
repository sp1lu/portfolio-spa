import { fetchJson } from '/src/utils/fetchJson.js';
const jobsUrl = '/json/jobs.json';

export const experienceRouter = async (div) => {
    const jobs = await fetchJson(jobsUrl);
    jobs.reverse();
    jobs.forEach(job => {
        const card = document.createElement('app-experience-card');
        card.setAttribute('job', JSON.stringify(job));
        div.append(card);
    });
}