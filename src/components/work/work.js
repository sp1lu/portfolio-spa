export class WorkCard extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'closed' });
    }

    render() {

    }

    connectedCallback() {
        // html
        const work = JSON.parse(this.getAttribute('work'));

        this.shadow.innerHTML =
            `
            <article href="${work.url}">
                <div class="post-author-pic-section">
                    <img class="post-author-pic" src="https://daviderivolta.com/wp-content/uploads/2023/02/Davide-Rivolta-768x432.jpg" alt="Immagine del profilo di Davide Rivolta">
                </div>
                <div class="post-content">
                    <p class="post-author"><span class="post-author-name">Davide Rivolta</span> <span class="post-author-username">@spilu</span><span class="post-date"> • ${JSON.parse(this.getAttribute('work')).year}</span></p>
                    <p>${work.desc}</p>
                    <img src="${work.img}" alt="">
                </div>
            </article>
            `
            ;

        // css
        // const style = document.createElement('link');
        // style.setAttribute('rel', 'stylesheet');
        // style.setAttribute('href', '/components/post/post.css');
        // this.shadow.append(style);

        // js
        this.article = this.shadow.querySelector('article');
        this.article.addEventListener('click', this.handleLinkClick.bind(this));

    }

    handleLinkClick(event) {
        const work = JSON.parse(this.getAttribute('work'));
        event.preventDefault();
        history.pushState({}, '', work.url);
        window.onpopstate(event);
    }
}

customElements.define('app-work-card', WorkCard);