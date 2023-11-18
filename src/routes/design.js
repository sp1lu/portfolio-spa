import { fetchJson } from '/src/utils/fetchJson.js';
const workUrl = '/json/works.json';

export const designRouter = async (div) => {
    let works = await fetchJson(workUrl);
    works = works.filter(obj => obj.category === 'design');

    works.forEach(work => {
        const card = document.createElement('app-work-card');
        card.setAttribute('work', JSON.stringify(work));
        div.append(card);
    });
}