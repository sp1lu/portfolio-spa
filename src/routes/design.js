import { fetchJson } from '/src/utils/fetchJson.js';
const workUrl = './json/works.json';
const works = await fetchJson(workUrl);

export const designRouter = (div) => {
    works.forEach(work => {
        const card = document.createElement('app-work-card');
        card.setAttribute('work', JSON.stringify(work));
        div.append(card);
    });
}