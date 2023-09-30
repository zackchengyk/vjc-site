import React from 'react'
import '/resources/scss/navbar.scss'

import { Link } from '/resources/components/Link'

export { NavBar }

const navItems = [
  { text: 'Home', href: '/' },
  { text: 'Preface', href: '/#preface' },
  { text: 'Documentary', href: '/#documentary' },
  { text: 'Map', href: '/#map' },
  { text: 'Team', href: '/#team' },
]

function NavBar() {
  return (
    <nav id="nav-bar">
      <div id="nav-items">
        {navItems.map(({ text, href }) => (
          <Link key={text} href={href} className={'nav-item'}>
            {text}
          </Link>
        ))}
      </div>
    </nav>
  )
}
