import Logo from './Logo'
import { navLinks } from '../navigation'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <a className="site-brand" href="/">
            <Logo className="brand-logo" />
            <span>
              Capybara <em>Shop</em>
            </span>
          </a>
          <p>
            Kedves kapibarák és apró örömök, hogy a hétköznapok is egy kicsit
            nyugodtabbak legyenek.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Lábléc navigáció">
          <p className="footer-title">Oldalak</p>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-note">
          <p className="footer-title">Ígéretünk</p>
          <p>
            Minden vásárlással dél-amerikai élőhelyvédelmi programokat
            támogatsz. <span aria-hidden="true">💚</span>
          </p>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>© {year} Adorable Capybaras. Minden jog fenntartva.</p>
        <a className="back-to-top" href="#top">
          Vissza a tetejére <span aria-hidden="true">↑</span>
        </a>
      </div>

      <p className="footer-giant" aria-hidden="true">
        capybara
      </p>
    </footer>
  )
}
