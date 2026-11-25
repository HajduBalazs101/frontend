// Az oldalak útvonalai egy helyen: ha változnak, elég itt átírni őket.
export const paths = {
  home: '/',
  about: '/rolunk',
  products: '/termekek',
  reviews: '/ertekeles'
}

export const navLinks = [
  { href: paths.home, label: 'Főoldal' },
  { href: paths.about, label: 'Rólunk' },
  { href: paths.products, label: 'Termékek' },
  { href: paths.reviews, label: 'Értékelések' }
]
