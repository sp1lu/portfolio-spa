import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: 'index.html',
                test: 'src/pages/test.html',
                404: 'src/pages/404.html',
                about: 'src/pages/about.html',
                lorem: 'src/pages/lorem.html',
                experience: 'src/pages/experience.html'
            }
        }
    }
})