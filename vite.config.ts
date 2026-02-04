import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/f1-vault',
  plugins: [react()],
  server: {
    proxy: {
      '/f1': {
        target: 'https://f1api.dev',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/f1/, '')
      }
    }
  }
})


// Vite dev server config. Used to fix CORS error during development

//server: {} this configures the local dev server
// proxy:{} some request should be forwarded to another server instead of handling locally
// '/f1': any url that starts with this will be intercepted
// target means this is the url where it will be sent. so /f1/api/current  →  https://f1api.dev/api/current
// changeOrigin means 👉 Change
/* 👉 Removes /f1 from the request path before sending it to the target server. the Origin header of the request to match https://f1api.dev.
without rewrite it would receive https://f1api.dev/f1/api/current ❌ (wrong)
*/
