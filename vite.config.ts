import {defineConfig} from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import alias from "@rollup/plugin-alias";

import * as path from 'path';

declare var __dirname: string;


const projectRootDir = path.resolve(__dirname)


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vueJsx(), vue(),
        alias({
            entries: [
                {find: '@views', replacement: path.resolve(projectRootDir, '/src/views')}
            ]
        }),
    ],
    server: {
        proxy: {
            '/api': {
                target: 'http://123.57.176.198:3000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },

        }
    }
})
