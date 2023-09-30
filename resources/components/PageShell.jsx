import React from 'react'
import '/resources/scss/layout.scss'

import { NavBar } from '/resources/components/NavBar'
import { PageContextProvider } from '/renderer/usePageContext'

export { PageShell }

function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <NavBar />
        <main>{children}</main>
      </PageContextProvider>
    </React.StrictMode>
  )
}
