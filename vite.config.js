import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      __CIVIL_AI_CONFIG__: JSON.stringify({
        serverId: env.CIVIL_AI_SERVER_ID || '',
        serverName: env.CIVIL_AI_SERVER_NAME || '',
        baseUrl: env.CIVIL_AI_BASE_URL || '',
        provider: env.CIVIL_AI_PROVIDER || '',
        model: env.CIVIL_AI_MODEL || '',
        apiVersion: env.CIVIL_AI_API_VERSION || '',
        apiKey: env.CIVIL_AI_API_KEY || '',
      }),
    },
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
  }
})
