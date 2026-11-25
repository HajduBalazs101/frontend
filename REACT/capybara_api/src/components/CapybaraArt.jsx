import { useId } from 'react'

const palettes = {
  sunset: {
    skyTop: '#fff6e3',
    skyBottom: '#ffd99c',
    glow: '#fff3cf',
    hillBack: '#dfe9bd',
    hillFront: '#c3da9f'
  },
  mint: {
    skyTop: '#f2fbf5',
    skyBottom: '#c8e9d8',
    glow: '#ffffff',
    hillBack: '#d6eac2',
    hillFront: '#b6d89c'
  }
}

export default function CapybaraArt({ accessory = 'yuzu', palette = 'sunset', className = '' }) {
  const uid = 'capy' + useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const colors = palettes[palette] ?? palettes.sunset
  const isOnsen = accessory === 'yuzu'
  const id = (name) => `${uid}-${name}`
  const url = (name) => `url(#${id(name)})`

  const label = isOnsen
    ? 'Kapibara yuzuval a fején, meleg vizes fürdőben pihen'
    : 'Kapibara egy kismadárral a fején, a tóban pihen'

  return (
    <svg className={`capy-art ${className}`.trim()} viewBox="0 0 400 400" role="img" aria-label={label}>
      <defs>
        <clipPath id={id('clip')}>
          <circle cx="200" cy="200" r="194" />
        </clipPath>
        <linearGradient id={id('sky')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={colors.skyTop} />
          <stop offset="1" stopColor={colors.skyBottom} />
        </linearGradient>
        <linearGradient id={id('water')} gradientUnits="userSpaceOnUse" x1="0" y1="284" x2="0" y2="400">
          <stop offset="0" stopColor="#a9ddcf" />
          <stop offset="1" stopColor="#5aa591" />
        </linearGradient>
        <linearGradient id={id('fur')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d19a63" />
          <stop offset="0.75" stopColor="#ad7142" />
        </linearGradient>
        <radialGradient id={id('yuzu')} cx="0.36" cy="0.32" r="0.78">
          <stop offset="0" stopColor="#ffd76f" />
          <stop offset="1" stopColor="#f29511" />
        </radialGradient>
      </defs>

      <g clipPath={url('clip')}>
        {/* ég, dombok */}
        <rect width="400" height="400" fill={url('sky')} />
        <circle cx="296" cy="100" r="46" fill={colors.glow} opacity="0.75" />
        <g className="capy-sparkles" fill="#fff">
          <path d="M84 96l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
          <path d="M338 178l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
          <path d="M132 50l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
        </g>
        <path d="M0 236c64-40 132-34 196-8 62-30 136-38 204-10v182H0z" fill={colors.hillBack} />
        <path d="M0 262c72-28 150-24 212-4 64-22 130-22 188 2v140H0z" fill={colors.hillFront} />

        {/* kövek a víz szélén */}
        <ellipse cx="18" cy="286" rx="40" ry="20" fill="#d6ccb8" />
        <ellipse cx="80" cy="283" rx="30" ry="16" fill="#c2b59d" />
        <ellipse cx="322" cy="283" rx="32" ry="17" fill="#c2b59d" />
        <ellipse cx="384" cy="287" rx="40" ry="21" fill="#d6ccb8" />

        {/* kapibara */}
        <g className="capy-bob">
          {/* kicsi, kerek fülek a fej tetején */}
          <g fill="#8f5732">
            <ellipse cx="141" cy="136" rx="14" ry="10.5" transform="rotate(-20 141 136)" />
            <ellipse cx="259" cy="136" rx="14" ry="10.5" transform="rotate(20 259 136)" />
          </g>
          <g fill="#6b3f22">
            <ellipse cx="142" cy="137.5" rx="7" ry="5" transform="rotate(-20 142 137.5)" />
            <ellipse cx="258" cy="137.5" rx="7" ry="5" transform="rotate(20 258 137.5)" />
          </g>
          {/* szögletes, "kenyérforma" kapibarafej és test */}
          <path
            d="M166 132h68c28 0 46 17 48 46l9 72c3 25 11 46 19 66H90c8-20 16-41 19-66l9-72c2-29 20-46 48-46z"
            fill={url('fur')}
          />
          <path
            d="M262 140c14 8 19 22 20 38l9 72c3 25 11 46 19 66h-30c-6-24-9-50-11-76z"
            fill="#7a4524"
            opacity="0.12"
          />
          <ellipse cx="176" cy="150" rx="34" ry="9" fill="#fff" opacity="0.16" transform="rotate(-8 176 150)" />
          <g fill="#f08c78" opacity="0.42">
            <ellipse cx="139" cy="214" rx="14" ry="8" />
            <ellipse cx="261" cy="214" rx="14" ry="8" />
          </g>
          {/* csukott, elégedett szemek */}
          <g fill="none" stroke="#3a2213" strokeWidth="4.5" strokeLinecap="round">
            <path d="M144 180q11 8.5 22 0" />
            <path d="M234 180q11 8.5 22 0" />
          </g>
          {/* nagy, tompa orr */}
          <rect x="146" y="192" width="108" height="72" rx="34" fill="#e2b684" />
          <rect x="170" y="197" width="60" height="25" rx="12.5" fill="#6e4126" />
          <g fill="#2a170c">
            <ellipse cx="186" cy="209.5" rx="6" ry="4.2" transform="rotate(14 186 209.5)" />
            <ellipse cx="214" cy="209.5" rx="6" ry="4.2" transform="rotate(-14 214 209.5)" />
          </g>
          <path
            d="M200 222v10m-12 4q6 6 12 0q6 6 12 0"
            fill="none"
            stroke="#6e4126"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {isOnsen ? (
            <g>
              <circle cx="200" cy="113" r="25" fill={url('yuzu')} />
              <ellipse cx="190" cy="104" rx="8" ry="4.6" fill="#fff" opacity="0.5" transform="rotate(-32 190 104)" />
              <g fill="#d9820b" opacity="0.35">
                <circle cx="211" cy="119" r="1.6" />
                <circle cx="202" cy="128" r="1.5" />
                <circle cx="216" cy="108" r="1.4" />
                <circle cx="192" cy="122" r="1.4" />
                <circle cx="207" cy="100" r="1.2" />
              </g>
              <path d="M200 90v-6" stroke="#6b4a22" strokeWidth="3" strokeLinecap="round" />
              <path d="M201 87c5-11 18-15 28-11-5 10-16 14-28 11z" fill="#5f9e4c" />
              <path d="M204 86c7-3 13-5 21-8" fill="none" stroke="#3f7a35" strokeWidth="1.6" strokeLinecap="round" />
            </g>
          ) : (
            <g transform="translate(0 6)">
              <path d="M178 112l-20-7 6 14z" fill="#e2a22b" />
              <ellipse cx="197" cy="113" rx="22" ry="15" fill="#f8cd52" />
              <path d="M182 112c6-9 19-10 26-3-6 7-17 9-26 3z" fill="#e6ab33" />
              <circle cx="215" cy="99" r="12" fill="#f8cd52" />
              <circle cx="218.5" cy="97" r="2.4" fill="#2a1a10" />
              <circle cx="219.3" cy="96.2" r="0.8" fill="#fff" />
              <path d="M226 98.5l10 3-10 3.5z" fill="#ef8a26" />
              <ellipse cx="212" cy="104.5" rx="3.4" ry="2.2" fill="#f49b8c" opacity="0.7" />
              <g stroke="#8a5a2a" strokeWidth="2.4" strokeLinecap="round">
                <path d="M192 127v4" />
                <path d="M202 127v4" />
              </g>
            </g>
          )}
        </g>

        {/* víz */}
        <path d="M0 292c34-8 66-8 100 0s66 8 100 0 66-8 100 0 66 8 100 0v108H0z" fill={url('water')} opacity="0.94" />
        <ellipse cx="200" cy="297" rx="118" ry="9" fill="none" stroke="#fff" strokeOpacity="0.65" strokeWidth="3" />
        <g stroke="#fff" strokeOpacity="0.5" strokeWidth="4" strokeLinecap="round">
          <path d="M44 334h40" />
          <path d="M278 350h58" />
          <path d="M150 370h34" />
          <path d="M232 388h22" />
        </g>

        {isOnsen ? (
          <>
            <g className="capy-float">
              <ellipse cx="92" cy="323" rx="22" ry="5" fill="#2f7d6a" opacity="0.28" />
              <circle cx="92" cy="313" r="15" fill={url('yuzu')} />
              <ellipse cx="86" cy="307" rx="5" ry="3" fill="#fff" opacity="0.5" transform="rotate(-30 86 307)" />
            </g>
            <g className="capy-float capy-float-late">
              <ellipse cx="318" cy="338" rx="18" ry="4.5" fill="#2f7d6a" opacity="0.28" />
              <circle cx="318" cy="329" r="12" fill={url('yuzu')} />
              <ellipse cx="313.5" cy="324.5" rx="4" ry="2.4" fill="#fff" opacity="0.5" transform="rotate(-30 313.5 324.5)" />
            </g>
            <g className="capy-steam" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round">
              <path d="M58 272c-10-14 10-24 0-38s10-24 0-38" />
              <path d="M342 266c-10-14 10-24 0-38s10-24 0-38" />
              <path d="M84 292c-8-11 8-19 0-30s8-19 0-30" />
            </g>
          </>
        ) : (
          <>
            <g className="capy-float">
              <ellipse cx="86" cy="324" rx="28" ry="9" fill="#77b062" />
              <path d="M86 324l26-5v10z" fill={url('water')} />
              <circle cx="79" cy="318" r="6" fill="#f7a8bd" />
              <circle cx="86" cy="316" r="5" fill="#fbc3d1" />
              <circle cx="82.5" cy="317" r="2.6" fill="#ffe08a" />
            </g>
            <g className="capy-float capy-float-late">
              <ellipse cx="322" cy="342" rx="22" ry="7" fill="#6aa457" />
              <path d="M322 342l-22-4v8z" fill={url('water')} />
            </g>
          </>
        )}
      </g>
      <circle cx="200" cy="200" r="194" fill="none" stroke="#fff" strokeOpacity="0.75" strokeWidth="8" />
    </svg>
  )
}
