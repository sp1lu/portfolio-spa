// Import modules
import { designRouter } from '/src/routes/design';
import { codingRouter } from '/src/routes/coding';
import { experienceRouter } from '/src/routes/experience';

// Router
export const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: '/src/pages/404.html',
    '/': '/src/pages/design.html',
    '/design': '/src/pages/design.html',
    '/unigeneration': '/src/pages/unigeneration.html',
    '/valore-energia': '/src/pages/valore-energia.html',
    '/illustrazioni': '/src/pages/illustrations.html',
    '/udog': '/src/pages/udog.html',
    '/youni': '/src/pages/youni.html',
    '/pegli-circus': '/src/pages/pegli-circus.html',
    '/logofolio': '/src/pages/logofolio.html',
    '/rivarolo-1': '/src/pages/rivarolo-1.html',
    '/hitman-3': '/src/pages/hitman-3.html',
    '/kobe-bryant': '/src/pages/kobe-bryant.html',
    '/videogame-spoilers': '/src/pages/videogame-spoilers.html',
    '/botteghe-storiche-genova': '/src/pages/botteghe-storiche-genova.html',
    '/assassins-creed-odyssey-poster': '/src/pages/assassins-creed-odyssey.html',
    '/casa-medievale-render': '/src/pages/casa-medievale-render.html',
    '/re-kappa': '/src/pages/kappa.html',
    '/hard-surface-render': '/src/pages/hard-surface.html',
    '/coding': '/src/pages/coding.html',
    '/wordpress-theme': '/src/pages/wordpress-theme.html',
    '/newsly': '/src/pages/newsly.html',
    '/portfolio': '/src/pages/design.html',
    '/experience': '/src/pages/experience.html',
    '/about': '/src/pages/about.html'
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;

    document.documentElement.scrollTop = 0;

    const navbar = document.querySelector('app-navbar');
    navbar.setAttribute('current-page', path);

    switch (path) {
        case '/':
        case '/portfolio':
            navbar.setAttribute('current-page', '/design');
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
