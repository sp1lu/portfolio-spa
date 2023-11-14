export class WorkCard extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    render() {

    }

    connectedCallback() {
        // html
        const work = JSON.parse(this.getAttribute('work'));

        this.shadowRoot.innerHTML =
            `
            <article href="${work.url}">
                <div class="post">
                    <div class="post-author-pic-section">
                        <img class="post-author-pic" src="https://daviderivolta.com/wp-content/uploads/2023/02/Davide-Rivolta-768x432.jpg" alt="Immagine del profilo di Davide Rivolta">
                    </div>
                    <div class="post-content">
                        <p class="post-author"><span class="post-author-name">Davide Rivolta</span> <span class="post-author-username">@spilu</span><span class="post-date"> • ${JSON.parse(this.getAttribute('work')).year}</span></p>
                        <p>${work.desc} <a href="/${work.url}">/${work.url}</a></p>
                        <div class="tags"></div>
                        <img src="${work.img}" alt="Thumbnail progetto ${work.title}">
                    </div>
                </div>
                <app-heart-btn></app-heart-btn>
            </article>
            `
        ;

        this.tags = this.shadowRoot.querySelector('.tags');
        work.technologies.forEach(element => {
            const pill = document.createElement('app-pill');
            pill.setAttribute('text', element);
            this.tags.append(pill);
        });

        // js
        this.article = this.shadowRoot.querySelector('article');
        this.article.addEventListener('click', this.handleLinkClick.bind(this));

        // css
        const style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', '/src/components/work/work.css');
        this.shadowRoot.append(style);

    }

    handleLinkClick(event) {
        const work = JSON.parse(this.getAttribute('work'));
        event.preventDefault();
        history.pushState({}, '', work.url);
        window.onpopstate(event);
    }
}

customElements.define('app-work-card', WorkCard);