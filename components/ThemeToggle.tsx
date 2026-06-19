'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
const [isLight, setIsLight] = useState(false)

function applyLightTheme() {
document.documentElement.classList.add('light-theme')
document.body.classList.add('light-theme')
document.documentElement.setAttribute('data-theme', 'light')
document.body.setAttribute('data-theme', 'light')

document.documentElement.style.backgroundColor = '#ffffff'
document.body.style.backgroundColor = '#ffffff'
document.body.style.color = '#0f172a'

const siteShell = document.querySelector('.site-shell') as HTMLElement | null
if (siteShell) {
  siteShell.style.backgroundColor = '#ffffff'
  siteShell.style.color = '#0f172a'
}

const lightAreas = document.querySelectorAll(
  'header, main, main section, footer'
)

lightAreas.forEach((element) => {
  const el = element as HTMLElement
  el.style.backgroundColor = '#ffffff'
  el.style.backgroundImage = 'none'
  el.style.color = '#0f172a'
  el.style.borderColor = 'rgba(15, 23, 42, 0.10)'
})

const generalTitles = document.querySelectorAll(
  'main h1, main h2, main h3, footer h1, footer h2, footer h3'
)

generalTitles.forEach((element) => {
  const el = element as HTMLElement
  el.style.color = '#0f172a'
})

const generalTexts = document.querySelectorAll(
  'main p, main li, footer p, footer li, footer a, footer span'
)

generalTexts.forEach((element) => {
  const el = element as HTMLElement
  el.style.color = '#334155'
})

const articleContent = document.querySelectorAll(
  '.article-content, .prose'
)

articleContent.forEach((element) => {
  const el = element as HTMLElement
  el.style.backgroundColor = '#ffffff'
  el.style.color = '#334155'
})

const articleText = document.querySelectorAll(
  '.article-content p, .article-content li, .prose p, .prose li'
)

articleText.forEach((element) => {
  const el = element as HTMLElement
  el.style.color = '#334155'
})

const articleTitles = document.querySelectorAll(
  '.article-content h1, .article-content h2, .article-content h3, .article-content strong, .prose h1, .prose h2, .prose h3, .prose strong'
)

articleTitles.forEach((element) => {
  const el = element as HTMLElement
  el.style.color = '#0f172a'
})

const categoryPills = document.querySelectorAll(
  'main section a[href*="/categoria"]'
)

categoryPills.forEach((element) => {
  const el = element as HTMLElement
  el.style.backgroundColor = '#e0f2fe'
  el.style.color = '#0369a1'
  el.style.borderColor = 'rgba(2, 132, 199, 0.22)'
})

const cards = document.querySelectorAll('[class~="group"]')

cards.forEach((element) => {
  const card = element as HTMLElement
  card.style.backgroundColor = '#0b1220'
  card.style.borderColor = 'rgba(0, 217, 255, 0.12)'
  card.style.boxShadow = '0 18px 45px rgba(15, 23, 42, 0.18)'

  const cardTitles = card.querySelectorAll('h1, h2, h3')
  cardTitles.forEach((title) => {
    const el = title as HTMLElement
    el.style.color = '#ffffff'
  })

  const cardTexts = card.querySelectorAll('p, span, li')
  cardTexts.forEach((text) => {
    const el = text as HTMLElement
    el.style.color = '#cbd5e1'
  })
})

const newsletter = document.querySelector('.glass') as HTMLElement | null
if (newsletter) {
  newsletter.style.backgroundColor = '#0b1220'
  newsletter.style.borderColor = 'rgba(0, 217, 255, 0.16)'
  newsletter.style.boxShadow = '0 18px 60px rgba(0, 217, 255, 0.10)'
}

localStorage.setItem('mente-theme', 'light')
setIsLight(true)

}

function applyDarkTheme() {
document.documentElement.classList.remove('light-theme')
document.body.classList.remove('light-theme')
document.documentElement.setAttribute('data-theme', 'dark')
document.body.setAttribute('data-theme', 'dark')

document.documentElement.removeAttribute('style')
document.body.removeAttribute('style')

const styledElements = document.querySelectorAll(
  '.site-shell, header, main, main section, footer, main h1, main h2, main h3, main p, main li, footer h1, footer h2, footer h3, footer p, footer li, footer a, footer span, .article-content, .article-content p, .article-content li, .article-content h1, .article-content h2, .article-content h3, .article-content strong, .prose, .prose p, .prose li, .prose h1, .prose h2, .prose h3, .prose strong, main section a[href*="/categoria"], [class~="group"], [class~="group"] h1, [class~="group"] h2, [class~="group"] h3, [class~="group"] p, [class~="group"] span, [class~="group"] li, .glass'
)

styledElements.forEach((element) => {
  const el = element as HTMLElement
  el.removeAttribute('style')
})

localStorage.setItem('mente-theme', 'dark')
setIsLight(false)

}

useEffect(() => {
const savedTheme = localStorage.getItem('mente-theme')

if (savedTheme === 'light') {
  setTimeout(() => {
    applyLightTheme()
  }, 50)
} else {
  applyDarkTheme()
}

}, [])

function toggleTheme() {
if (isLight) {
applyDarkTheme()
} else {
applyLightTheme()
}
}

return (
<button
type="button"
onClick={toggleTheme}
className="rounded-full border border-cyanx/30 bg-slate-900/70 px-3 py-2 text-xs font-bold text-cyanx transition hover/10 sm"
aria-label="Alternar entre modo claro e modo escuro"
title={isLight ? 'Ativar modo escuro' : 'Ativar modo claro'}
>
{isLight ? '🌙 Modo escuro' : '☀️ Modo claro'}

)
}
