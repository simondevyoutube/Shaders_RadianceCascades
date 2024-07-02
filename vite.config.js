import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';
import solidPlugin from 'vite-plugin-solid';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        wasm(),
        topLevelAwait(),
        solidPlugin(),
        {
            name: 'reload-glsl',
            handleHotUpdate({ file, server }) {
              if (file.endsWith('.glsl')) {
                server.ws.send({
                  type: 'full-reload'
                });
              }
            }
        }
    ],
    resolve: {
        alias: {
        },
    },
    build: {
        sourcemap: true,
    },
    server: {
        port: 5200,
        hmr: {
            clientPort: 5200,
        }
    },
    //base: "/Quick_Grass/"
});
