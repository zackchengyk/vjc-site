import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'

export default {
  base: '/vjc-site/',
  plugins: [react(), ssr({ prerender: true })],
}
