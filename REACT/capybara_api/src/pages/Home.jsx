import Card from '../components/Card'
import CapybaraArt from '../components/CapybaraArt'
import { paths } from '../navigation'
import { Link } from 'react-router-dom'

const cardContents = [
  {
    icon: '🌱',
    title: 'Rólunk',
    description: 'Ismerd meg a küldetésünket és a kapibarák iránti rajongásunkat.',
    link: paths.about,
    tone: 'matcha'
  },
  {
    icon: '🧸',
    title: 'Termékeink',
    description: 'Kedves, puha és vidám apróságok a nyugodt mindennapokhoz.',
    link: paths.products,
    tone: 'yuzu'
  },
  {
    icon: '💬',
    title: 'Értékelések',
    description: 'Olvasd el mások tapasztalatait, vagy oszd meg a sajátodat.',
    link: paths.reviews,
    tone: 'pond'
  }
]

const marqueeWords = [
  'Lassíts le',
  'Élvezd a pillanatot',
  'Puha plüssök',
  'Chill bögrék',
  'Kapibara-hangulat',
  'Apró örömök'
]

const facts = [
  { value: '65 kg', text: 'Akár ennyit is nyomhat: ő a világ legnagyobb rágcsálója.' },
  { value: '35 km/h', text: 'Ha nagyon kell, ilyen gyorsan is fut, de ritkán siet.' },
  { value: '5 perc', text: 'Ennyi ideig is képes a víz alatt maradni egy merülésnél.' },
  { value: '10–20', text: 'fős csapatokban él, mert imád társaságban lenni.' }
]

export default function Home() {
  return (
    <main id="main" className="home-page">
      <section className="wrap home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow-pill reveal" style={{ '--d': 0 }}>
            <span className="pulse-dot" aria-hidden="true" />
            Lassíts le, élvezd a pillanatot
          </p>
          <h1 className="reveal" style={{ '--d': 1 }}>
            A nyugalomnak most{' '}
            <span className="highlight">
              kapibara
              <svg className="highlight-swash" viewBox="0 0 300 22" aria-hidden="true" focusable="false">
                <path d="M6 15C70 5 160 2 294 10" pathLength="1" />
              </svg>
            </span>{' '}
            alakja van.
          </h1>
          <p className="home-intro reveal" style={{ '--d': 2 }}>
            Kedves kapibarák és apró örömök, hogy a hétköznapok is egy kicsit
            nyugodtabbak legyenek.
          </p>
          <div className="hero-actions reveal" style={{ '--d': 3 }}>
            <Link className="button button-primary" to={paths.products}>
              Megnézem a termékeket <span className="button-arrow" aria-hidden="true">→</span>
            </Link>
            <Link className="button button-ghost" to={paths.about}>
              Ismerj meg minket
            </Link>
          </div>
          <div className="hero-proof reveal" style={{ '--d': 4 }}>
            <div className="avatar-stack" aria-hidden="true">
              <span>KA</span>
              <span>NB</span>
              <span>🌿</span>
            </div>
            <p>
              <span className="proof-stars" aria-hidden="true">★★★★★</span>
              <strong>5,0</strong> – vásárlóink értékelései alapján
            </p>
          </div>
        </div>

        <div className="home-hero-art reveal" style={{ '--d': 2 }}>
          <CapybaraArt className="hero-capy" />
          <div className="float-card float-card-chill" aria-hidden="true">
            <span className="float-card-emoji">😌</span>
            <div>
              <strong>Chill-szint</strong>
              <span className="meter">
                <span />
              </span>
            </div>
            <span className="float-card-value">100%</span>
          </div>
          <div className="float-card float-card-product" aria-hidden="true">
            <span className="float-card-emoji">🧸</span>
            <div>
              <small>Kedvenc</small>
              <strong>Óriás Kapibara Plüss</strong>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-band" aria-hidden="true">
        <div className="marquee">
          <div className="marquee-track">
            {[...marqueeWords, ...marqueeWords].map((word, i) => (
              <span className="marquee-item" key={i}>
                {word}
                <span className="marquee-star">✺</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="wrap home-discover" aria-labelledby="discover-title">
        <div className="section-heading reveal-on-scroll">
          <div>
            <p className="eyebrow">Fedezd fel</p>
            <h2 id="discover-title">Egy kis kapibara-kikapcsolódás</h2>
          </div>
          <p className="section-note">Jó helyen jársz, ha szereted a nyugalmat.</p>
        </div>
        <div className="home-card-grid">
          {cardContents.map((card, i) => (
            <Card key={card.link} index={`0${i + 1}`} {...card} />
          ))}
        </div>
      </section>

      <section className="facts" aria-labelledby="facts-title">
        <div className="wrap">
          <div className="facts-heading reveal-on-scroll">
            <div>
              <p className="eyebrow eyebrow-light">Tudtad?</p>
              <h2 id="facts-title">A kapibara a nyugalom nagymestere.</h2>
            </div>
            <p className="facts-intro">
              Néhány érdekesség a világ legbarátságosabb rágcsálójáról.
            </p>
          </div>
          <ul className="facts-grid">
            {facts.map((fact) => (
              <li className="fact reveal-on-scroll" key={fact.value}>
                <span className="fact-value">{fact.value}</span>
                <p>{fact.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap" aria-labelledby="cta-title">
        <div className="home-cta reveal-on-scroll">
          <div>
            <h2 id="cta-title">Készen állsz egy kis nyugalomra?</h2>
            <p>Válogass a kedvenc kapibarás apróságaink közül: plüss, bögre, zokni és matrica.</p>
          </div>
          <Link className="button button-dark" to={paths.products}>
            Irány a bolt <span className="button-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
