import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const products = [
  {
    id: 1,
    icon: '🧸',
    name: 'Óriás Kapibara Plüss',
    price: '8 990 Ft',
    desc: '45 cm-es, extra puha plüssfigura narancssárga yuzuval a fején.',
    tone: 'caramel',
    tag: 'Kedvenc'
  },
  {
    id: 2,
    icon: '☕',
    name: 'Chill Kapibara Bögre',
    price: '3 490 Ft',
    desc: '350 ml-es kerámia bögre a nyugodt reggeli kávézásokhoz.',
    tone: 'pond'
  },
  {
    id: 3,
    icon: '🧦',
    name: 'Kapibara Zokni Szett',
    price: '4 290 Ft',
    desc: '3 pár kényelmes, pamut alapanyagú mintás zokni.',
    tone: 'blush',
    tag: 'Új'
  },
  {
    id: 4,
    icon: '✨',
    name: 'Matrica Csomag (20 db)',
    price: '1 990 Ft',
    desc: 'Vízálló, egyedi grafikás matricák laptopra vagy kulacsra.',
    tone: 'yuzu'
  }
]

const perks = [
  { icon: '🚚', title: 'Gyors szállítás', text: 'A csomagod hamar úton van hozzád.' },
  { icon: '☁️', title: 'Puha, minőségi anyagok', text: 'Kényelmes és tartós darabok.' },
  { icon: '💚', title: 'Jó ügyet támogatsz', text: 'Minden vásárlással az élőhelyvédelmet segíted.' }
]

export default function Products() {
  const [cartCount, setCartCount] = useState(0)
  const [lastAdded, setLastAdded] = useState(null)

  // A "kosárba került" értesítés pár másodperc után eltűnik
  useEffect(() => {
    if (!lastAdded) return
    const timer = setTimeout(() => setLastAdded(null), 2400)
    return () => clearTimeout(timer)
  }, [lastAdded])

  function addToCart(item) {
    setCartCount((count) => count + 1)
    setLastAdded({ id: item.id, name: item.name, key: Date.now() })
  }

  return (
    <main id="main" className="page products-page">
      <div className="wrap">
        <Link className="back-link" to="/">
          <span aria-hidden="true">←</span> Vissza a főoldalra
        </Link>

        <div className="page-heading products-heading">
          <div>
            <p className="eyebrow reveal" style={{ '--d': 0 }}>Kapibara shop</p>
            <h1 className="reveal" style={{ '--d': 1 }}>Apró örömök, nagy nyugalom</h1>
            <p className="page-intro reveal" style={{ '--d': 2 }}>
              Válogass a kedvenc kapibara kiegészítőid közül.
            </p>
          </div>
          <div className="cart-pill reveal" style={{ '--d': 2 }}>
            <span aria-hidden="true">🛍️</span>
            Kosár
            <strong key={cartCount} className={cartCount > 0 ? 'bump' : undefined}>
              {cartCount}
            </strong>
          </div>
        </div>

        <section className="product-grid" aria-label="Termékeink">
          {products.map((item, i) => {
            const justAdded = lastAdded?.id === item.id

            return (
              <article className={`product-card tone-${item.tone}`} key={item.id} style={{ '--d': i }}>
                <div className="product-media" aria-hidden="true">
                  {item.tag && <span className="product-tag">{item.tag}</span>}
                  <span className="product-emoji">{item.icon}</span>
                </div>
                <div className="product-body">
                  <h2>{item.name}</h2>
                  <p>{item.desc}</p>
                </div>
                <div className="product-footer">
                  <span className="product-price">{item.price}</span>
                  <button
                    className={`add-to-cart${justAdded ? ' is-added' : ''}`}
                    type="button"
                    onClick={() => addToCart(item)}
                  >
                    {justAdded ? (
                      <>
                        <span aria-hidden="true">✓</span> Kosárban
                      </>
                    ) : (
                      <>
                        <span aria-hidden="true">+</span> Kosárba
                      </>
                    )}
                  </button>
                </div>
              </article>
            )
          })}
        </section>

        <ul className="perks" aria-label="Miért nálunk vásárolj?">
          {perks.map((perk) => (
            <li className="perk reveal-on-scroll" key={perk.title}>
              <span className="perk-icon" aria-hidden="true">{perk.icon}</span>
              <div>
                <strong>{perk.title}</strong>
                <p>{perk.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="toast-region" aria-live="polite">
        {lastAdded && (
          <p className="cart-toast" key={lastAdded.key}>
            <span aria-hidden="true">🛍️</span>
            <span>
              <strong>{lastAdded.name}</strong> a kosárba került!
            </span>
          </p>
        )}
      </div>
    </main>
  )
}
