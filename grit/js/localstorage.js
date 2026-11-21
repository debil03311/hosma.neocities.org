// Load theme preferences

const font = localStorage.getItem('font')
const theme = localStorage.getItem('theme')

if (font)
  document.body.dataset.font = font

if (theme)
  document.documentElement.dataset.theme = theme