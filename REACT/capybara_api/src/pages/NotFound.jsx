import CapybaraArt from '../components/CapybaraArt'

export default function NotFound() {
  return (
    <main id="main" className="page">
      <div className="wrap notfound">
        <CapybaraArt className="notfound-art" />
        <p className="eyebrow">404-es hiba</p>
        <h1>Ez az oldal elúszott…</h1>
        <p className="page-intro">
          Úgy tűnik, ez a kapibara inkább pihen egyet. Gyere, visszaviszünk a főoldalra!
        </p>
        <a className="button button-primary" href="/">
          Vissza a főoldalra <span className="button-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </main>
  )
}
