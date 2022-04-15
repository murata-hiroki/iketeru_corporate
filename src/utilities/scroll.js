import smoothscroll from 'smoothscroll-polyfill'

typeof window !== 'undefined' && smoothscroll.polyfill()

export const smoothScrollTo = id => {
  const el = document.getElementById(id)
  const rect = el.getBoundingClientRect()
  const distance = rect.top + window.pageYOffset
  window.scrollTo({
    top: distance,
    behavior: 'smooth'
  })
}
