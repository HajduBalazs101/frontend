import { useState } from 'react'
import { Link } from 'react-router-dom'

const ratingLabels = {
  1: 'Nem tetszett',
  2: 'Elmegy',
  3: 'Jó',
  4: 'Nagyon jó',
  5: 'Imádom!'
}

const avatarTones = ['matcha', 'yuzu', 'pond', 'blush', 'caramel']

function getInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')
}

function getTone(name) {
  let sum = 0
  for (const char of name) sum += char.codePointAt(0)
  return avatarTones[sum % avatarTones.length]
}

function Stars({ value }) {
  return (
    <span className="stars" role="img" aria-label={`${value} az 5 csillagból`}>
      {'★'.repeat(value)}
      <span className="stars-empty">{'★'.repeat(5 - value)}</span>
    </span>
  )
}

export default function Review() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: 'Kovács Anna',
      rating: 5,
      comment: 'A plüss kapibara elképesztően puha, gyors volt a szállítás is!'
    },
    {
      id: 2,
      author: 'Nagy Bence',
      rating: 5,
      comment: 'A bögre élőben még jobban néz ki, remek ajándék lett belőle.'
    }
  ])

  const [author, setAuthor] = useState('')
  const [rating, setRating] = useState(5)
  const [hoverRating, setHoverRating] = useState(0)
  const [comment, setComment] = useState('')

  const average = reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length
  const shownRating = hoverRating || rating

  function handleSubmit(e) {
    e.preventDefault()
    if (!author.trim() || !comment.trim()) return

    setReviews((currentReviews) => [
      { id: Date.now(), author: author.trim(), rating: Number(rating), comment: comment.trim() },
      ...currentReviews
    ])
    setAuthor('')
    setRating(5)
    setComment('')
  }

  return (
    <main id="main" className="page review-page">
      <div className="wrap">
        <Link className="back-link" to="/">
          <span aria-hidden="true">←</span> Vissza a főoldalra
        </Link>

        <div className="page-heading review-heading">
          <p className="eyebrow reveal" style={{ '--d': 0 }}>A ti szavaitok</p>
          <h1 className="reveal" style={{ '--d': 1 }}>Értékelések</h1>
          <p className="page-intro reveal" style={{ '--d': 2 }}>
            Oszd meg velünk a kapibara-élményedet!
          </p>
        </div>

        <section className="review-layout" aria-label="Vélemények">
          <div className="review-side reveal" style={{ '--d': 3 }}>
            <div className="rating-summary">
              <p className="rating-score">{average.toFixed(1).replace('.', ',')}</p>
              <div>
                <Stars value={Math.round(average)} />
                <p>{reviews.length} értékelés alapján</p>
              </div>
            </div>

            <div className="review-form-card">
              <h2>Írj véleményt</h2>
              <p className="form-intro">Minden visszajelzésnek örülünk.</p>
              <form onSubmit={handleSubmit} className="review-form">
                <div className="field">
                  <label htmlFor="review-author">Neved</label>
                  <input
                    id="review-author"
                    className="text-input"
                    type="text"
                    placeholder="Pl. Kapi Bella"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                  />
                </div>

                <fieldset className="field">
                  <legend>Értékelés</legend>
                  <div className="star-picker" onMouseLeave={() => setHoverRating(0)}>
                    {[1, 2, 3, 4, 5].map((value) => (
                      <label
                        key={value}
                        className={value <= shownRating ? 'is-on' : undefined}
                        onMouseEnter={() => setHoverRating(value)}
                      >
                        <input
                          type="radio"
                          name="rating"
                          value={value}
                          checked={rating === value}
                          onChange={() => setRating(value)}
                        />
                        <span className="star-glyph" aria-hidden="true">★</span>
                        <span className="sr-only">{value} csillag</span>
                      </label>
                    ))}
                    <span className="star-picker-label" aria-hidden="true">
                      {ratingLabels[shownRating]}
                    </span>
                  </div>
                </fieldset>

                <div className="field">
                  <label htmlFor="review-comment">Véleményed</label>
                  <textarea
                    id="review-comment"
                    className="text-input"
                    rows="4"
                    placeholder="Mi tetszett a legjobban?"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="button button-primary button-block">
                  Küldés <span className="button-arrow" aria-hidden="true">→</span>
                </button>
              </form>
            </div>
          </div>

          <div className="review-list reveal" style={{ '--d': 4 }}>
            <div className="review-list-heading">
              <h2>Vásárlói visszajelzések</h2>
              <span className="count-chip">{reviews.length}</span>
            </div>
            <div className="review-items">
              {reviews.map((item) => (
                <article className="review-card" key={item.id}>
                  <span className={`avatar tone-${getTone(item.author)}`} aria-hidden="true">
                    {getInitials(item.author)}
                  </span>
                  <div className="review-card-body">
                    <div className="review-card-heading">
                      <strong>{item.author}</strong>
                      <Stars value={item.rating} />
                    </div>
                    <p>{item.comment}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
