import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: 'index.html',
                404: 'src/pages/404.html',
            }
        }
    }
})