import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import pugPlugin from "vite-plugin-pug"

const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    pugPlugin(options, locals),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
