export { render }

import { hydrateRoot } from 'react-dom/client'
import { PageShell } from './PageShell'

// This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
async function render(pageContext) {
  const { Page, pageProps } = pageContext
  if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined')

  const root = document.getElementById('react-root')
  if (!root) throw new Error('DOM element #react-root not found')

  hydrateRoot(
    root,
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )
}

// Enables client-side routing. Read https://vite-plugin-ssr.com/clientRouting
export const clientRouting = true
export const hydrationCanBeAborted = true
export const prefetchStaticAssets = 'viewport'
