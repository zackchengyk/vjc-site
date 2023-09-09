import ReactDOMServer from 'react-dom/server'

import { getPageTitle } from '/renderer/getPageTitle'
import { PageShell } from '/resources/components/PageShell'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'

export { render }
export { passToClient }

async function render(pageContext) {
  const { Page, pageProps } = pageContext

  if (!Page) throw new Error('Server-side render() hook expects pageContext.Page to be defined')

  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>${getPageTitle(pageContext)}</title>
        <meta name="description" content="Todo: Description" />
        <meta name="keywords" content="Todo: Keywords">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return { documentHtml }
}

// Allows the client-side render() to access `pageContext.pageProps`, etc.
const passToClient = ['pageProps', 'documentProps']
