import React from 'react'

export { NavBar }

const navItems = [
  { text: 'Video', href: '/' },
  { text: 'Scenes', href: '/scenes' },
  { text: 'Collections', href: '/collections' },
]

function NavBar({ url }) {
  return (
    <nav id="nav-bar">
      {navItems.map((navItem) => (
        <a key={navItem.text} href={navItem.href} className={['nav-item', ...(navItem.href === url ? ['active'] : [])]}>
          {navItem.text}
        </a>
      ))}
    </nav>
  )
}
