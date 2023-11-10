export class WorkCard extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'closed' });
    }

    render() {

    }

    connectedCallback() {
        // html
        this.shadow.innerHTML =
            `
            <article>
                <div class="post">
                    <div class="post-author-pic-section">
                        <img class="post-author-pic" src="https://daviderivolta.com/wp-content/uploads/2023/02/Davide-Rivolta-768x432.jpg" alt="Immagine del profilo di Davide Rivolta">
                    </div>
                    <div class="post-content">
                        <p class="post-author"><span class="post-author-name">Davide Rivolta</span> <span class="post-author-username">@spilu</span><span class="post-date"> • ${this.getAttribute('year')}</span></p>
                        <p>${this.getAttribute('desc')}</p>
                        <img src="${this.getAttribute('img')}" alt="">
                    </div>
                </div>
            </article>
            `
        ;

        // css
        // const style = document.createElement('link');
        // style.setAttribute('rel', 'stylesheet');
        // style.setAttribute('href', '/components/post/post.css');
        // this.shadow.append(style);

        // this.render();

        // js
        this.shadow.querySelector('.post').addEventListener('click', () => {
            window.location.href = `/${this.getAttribute('url')}`;
        });

    }
}

customElements.define('app-work-card', WorkCard);