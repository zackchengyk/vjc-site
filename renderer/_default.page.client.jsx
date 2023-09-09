import ReactDOM from 'react-dom/client'

import { getPageTitle } from '/renderer/getPageTitle'
import { PageShell } from '/resources/components/PageShell'

export { render }
export { clientRouting }
export { hydrationCanBeAborted }
export { prefetchStaticAssets }

let root

async function render(pageContext) {
  console.log('%cClient-side render() begin.', 'color: orange')

  const { Page, pageProps } = pageContext

  if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined')

  const container = document.getElementById('root')
  if (!container) throw new Error('DOM element #root not found')

  const initialChildren = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  // How we update the DOM depends on whether the HTML is provided (`isHydration` is true).
  if (pageContext.isHydration) {
    console.log('HTML was provided.')
    root = ReactDOM.hydrateRoot(container, initialChildren)
  } else {
    console.log('HTML was not provided.')
    if (!root) {
      root = ReactDOM.createRoot(container)
    } else {
      console.log('...but root was already created.')
    }
    root.render(initialChildren)
  }

  document.title = getPageTitle(pageContext)

  console.log('%cClient-side render() end.', 'color: yellowgreen')
}

// Enables client-side routing. Read https://vite-plugin-ssr.com/clientRouting
const clientRouting = true
const hydrationCanBeAborted = true
const prefetchStaticAssets = 'viewport'
