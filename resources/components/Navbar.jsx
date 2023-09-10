import React from 'react'

import { Link } from '/resources/components/Link'

export { NavBar }

const navItems = [
  { text: 'Video', href: '/' },
  { text: 'Spaces', href: '/spaces' },
  { text: 'Stories', href: '/stories' },
  { text: 'Team', href: '/team' },
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
