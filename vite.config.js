import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: 'index.html',
                about: 'src/pages/about.html',
                design: 'src/pages/design.html',
                unigeneration: 'src/pages/unigeneration.html',
                coding: 'src/pages/coding.html',
                experience: 'src/pages/experience.html',
                404: 'src/pages/404.html',
            }
        }
    }
})