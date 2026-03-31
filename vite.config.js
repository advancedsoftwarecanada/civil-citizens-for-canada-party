import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'ccc-social-meta',
      transformIndexHtml() {
        return {
          tags: [
            { tag: 'meta', attrs: { name: 'robots', content: 'index,follow' }, injectTo: 'head' },
            { tag: 'meta', attrs: { name: 'theme-color', content: '#dc2626' }, injectTo: 'head' },
            { tag: 'meta', attrs: { property: 'og:locale', content: 'en_CA' }, injectTo: 'head' },
            {
              tag: 'meta',
              attrs: {
                property: 'og:logo',
                content: 'https://civilcitizenscanada.ca/assets/img/CCC-512.png',
              },
              injectTo: 'head',
            },
            {
              tag: 'meta',
              attrs: {
                property: 'og:image:url',
                content: 'https://civilcitizenscanada.ca/assets/img/CCC-opengraph.jpg',
              },
              injectTo: 'head',
            },
            {
              tag: 'meta',
              attrs: {
                property: 'og:image:secure_url',
                content: 'https://civilcitizenscanada.ca/assets/img/CCC-opengraph.jpg',
              },
              injectTo: 'head',
            },
            {
              tag: 'meta',
              attrs: { name: 'twitter:url', content: 'https://civilcitizenscanada.ca/' },
              injectTo: 'head',
            },
          ],
        }
      },
    },
  ],
})
