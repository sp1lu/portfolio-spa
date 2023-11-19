import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: 'index.html',
                404: 'src/pages/404.html',
                about: 'src/pages/about.html',
                assassinscreedodyssey: 'src/pages/assassins-creed-odyssey.html',
                botteghestorichegenova: 'src/pages/botteghe-storiche-genova.html',
                casamedievalerender: 'src/pages/casa-medievale-render.html',
                coding: 'src/pages/coding.html',
                design: 'src/pages/design.html',
                experience: 'src/pages/experience.html',
                hardsurface: 'src/pages/hard-surface.html',
                hitman: 'src/pages/hitman-3.html',
                illustrations: 'src/pages/illustrations.html',
                kappa: 'src/pages/kappa.html',
                kobebryant: 'src/pages/kobe-bryant.html',
                logofolio: 'src/pages/logofolio.html',
                newsly: 'src/pages/newsly.html',
                peglicircus: 'src/pages/pegli-circus.html',
                rivarolo: 'src/pages/rivarolo-1.html',
                udog: 'src/pages/udog.html',
                unigeneration: 'src/pages/unigeneration.html',
                valoreenergia: 'src/pages/valore-energia.html',
                videogamespoilers: 'src/pages/videogame-spoilers.html',
                wordpresstheme: 'src/pages/wordpress-theme.html',
                yelpcamp: 'src/pages/yelpcamp.html',
                youni: 'src/pages/youni.html'
            }
        }
    }
})