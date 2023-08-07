import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api/v1': {
                target: 'http://miniproject-env.eba-4m29msi8.ap-southeast-2.elasticbeanstalk.com',
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
