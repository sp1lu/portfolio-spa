// Import modules
import { designRouter } from './design';
import { codingRouter } from './coding';
import { experienceRouter } from './experience';

// Router
export const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: './src/pages/404.html',
    '/': './src/pages/design.html',
    '/design': './src/pages/design.html',
    '/unigeneration': './src/pages/unigeneration.html',
    '/coding': './src/pages/coding.html',
    '/experience': './src/pages/experience.html',
    '/about': './src/pages/about.html'
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;

    switch (path) {
        case '/':
        case '/design':
            const dl = document.querySelector('#design-list');
            designRouter(dl);
            break;

        case '/coding':
            const cl = document.querySelector('#coding-list');
            codingRouter(cl);
            break;

        case '/experience':
            const el = document.querySelector('#experience-list');
            experienceRouter(el);
            break;

        default:
            break;
    }
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
