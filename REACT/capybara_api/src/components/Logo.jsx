import { useId } from 'react'

export default function Logo({ className }) {
  const clipId = 'logo' + useId().replace(/[^a-zA-Z0-9_-]/g, '')

  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id={clipId}>
          <rect width="48" height="48" rx="14" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width="48" height="48" fill="#2f5d43" />
        <g fill="#8f5732">
          <ellipse cx="13.2" cy="17.2" rx="3.6" ry="2.8" transform="rotate(-20 13.2 17.2)" />
          <ellipse cx="34.8" cy="17.2" rx="3.6" ry="2.8" transform="rotate(20 34.8 17.2)" />
        </g>
        <path
          d="M17.54 16h12.92c5.32 0 8.74 3.23 9.12 8.74l1.71 13.68c.57 4.75 2.09 8.74 3.61 12.54H3.1c1.52-3.8 3.04-7.79 3.61-12.54l1.71-13.68c.38-5.51 3.8-8.74 9.12-8.74z"
          fill="#cf9862"
        />
        <g fill="#f08c78" opacity="0.45">
          <ellipse cx="12.4" cy="31.6" rx="2.7" ry="1.6" />
          <ellipse cx="35.6" cy="31.6" rx="2.7" ry="1.6" />
        </g>
        <g fill="none" stroke="#3a2213" strokeWidth="1.7" strokeLinecap="round">
          <path d="M13.4 25.1q2.1 1.6 4.2 0" />
          <path d="M30.4 25.1q2.1 1.6 4.2 0" />
        </g>
        <rect x="13.7" y="27.4" width="20.6" height="13.7" rx="6.5" fill="#e6bb88" />
        <rect x="18.3" y="28.4" width="11.4" height="4.8" rx="2.4" fill="#5a3520" />
        <circle cx="24" cy="12.2" r="5" fill="#f6a823" />
        <path d="M24.2 7.1c.95-2.1 3.4-2.85 5.3-2.1-.95 1.9-3 2.65-5.3 2.1z" fill="#8fd0a0" />
      </g>
    </svg>
  )
}
