export default function Card({ icon, title, description, link, tone = 'matcha', index }) {
  return (
    <article className={`home-card tone-${tone} reveal-on-scroll`}>
      <div className="home-card-top">
        <div className="home-card-icon" aria-hidden="true">{icon}</div>
        {index && (
          <span className="home-card-index" aria-hidden="true">
            {index}
          </span>
        )}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="home-card-link">
        Felfedezem
        <span className="sr-only">: {title}</span>
        <span className="arrow-bubble" aria-hidden="true">→</span>
      </a>
    </article>
  )
}
