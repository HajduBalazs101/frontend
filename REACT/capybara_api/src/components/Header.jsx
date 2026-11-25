import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { navLinks } from '../navigation'

export default function Header() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`site-header${menuOpen ? ' is-open' : ''}`}>
      <div className="wrap site-header-inner">
        <Link className="site-brand" to="/">
          <Logo className="brand-logo" />
          <span>
            Capybara <em>Shop</em>
          </span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-bars" aria-hidden="true" />
          <span className="sr-only">{menuOpen ? 'Menü bezárása' : 'Menü megnyitása'}</span>
        </button>

        <nav id="site-nav" className="site-nav" aria-label="Fő navigáció">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                to={link.href}
                className={isActive ? 'active' : undefined}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
