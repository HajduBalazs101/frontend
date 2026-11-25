import CapybaraArt from '../components/CapybaraArt'

export default function About() {
  return (
    <main id="main" className="page about-page">
      <div className="wrap">
        <a className="back-link" href="/">
          <span aria-hidden="true">←</span> Vissza a főoldalra
        </a>

        <section className="about-hero">
          <div>
            <p className="eyebrow reveal" style={{ '--d': 0 }}>A nyugalom kis közössége</p>
            <h1 className="reveal" style={{ '--d': 1 }}>Rólunk</h1>
            <p className="about-lead reveal" style={{ '--d': 2 }}>
              Az <strong>Adorable Capybaras</strong> közösség azért született, hogy
              a világ legnyugodtabb állatainak békéjét elhozza a mindennapokba.
            </p>
          </div>
          <div className="about-hero-art reveal" style={{ '--d': 2 }}>
            <CapybaraArt accessory="bird" palette="mint" />
          </div>
        </section>

        <section className="about-values" aria-label="Küldetésünk és értékeink">
          <article className="about-value-card tone-matcha reveal-on-scroll">
            <span className="about-value-icon" aria-hidden="true">💚</span>
            <h2>Küldetésünk</h2>
            <p>
              Egyedi tervezésű kapibarás ajándéktárgyakkal és kiegészítőkkel
              foglalkozunk, miközben minden vásárlás után dél-amerikai
              élőhelyvédelmi programokat támogatunk.
            </p>
          </article>
          <article className="about-value-card tone-yuzu reveal-on-scroll">
            <span className="about-value-icon" aria-hidden="true">☀️</span>
            <h2>Miért a kapibara?</h2>
            <p>
              A kapibarák a természet legbarátságosabb teremtményei. Termékeinket
              is ebben a szellemben készítjük: kényelmesek, tartósak és
              garantáltan mosolyt csalnak az arcodra.
            </p>
          </article>
        </section>

        <figure className="about-quote reveal-on-scroll">
          <blockquote>„Lassíts le, élvezd a pillanatot – ahogy egy kapibara tenné.”</blockquote>
          <figcaption>Az Adorable Capybaras csapata</figcaption>
        </figure>
      </div>
    </main>
  )
}
