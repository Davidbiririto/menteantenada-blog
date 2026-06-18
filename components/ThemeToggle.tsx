'use client'

import { useEffect, useState } from 'react'

const lightThemeCSS = 
html,
body {
background: #ffffff !important;
color: #0f172a !important;
}

header {
background: #ffffff !important;
background-color: #ffffff !important;
border-color: rgba(15, 23, 42, 0.10) !important;
box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06) !important;
}

main,
main > section,
main section {
background: #ffffff !important;
background-color: #ffffff !important;
background-image: none !important;
color: #0f172a !important;
}

footer {
background: #ffffff !important;
background-color: #ffffff !important;
color: #0f172a !important;
border-color: rgba(15, 23, 42, 0.10) !important;
}

footer h1,
footer h2,
footer h3,
footer strong {
color: #0f172a !important;
}

footer p,
footer li,
footer a,
footer span {
color: #334155 !important;
}

main section h1,
main section h2,
main section h3 {
color: #0f172a !important;
}

main section p,
main section li {
color: #334155 !important;
}

.bg-ink,
.bg-grid {
background: #ffffff !important;
background-color: #ffffff !important;
background-image: none !important;
}

.text-cyanx {
color: #0284c7 !important;
}

main section a[href*="/categoria"] {
background: #e0f2fe !important;
color: #0369a1 !important;
border-color: rgba(2, 132, 199, 0.22) !important;
}

/* Mantém os cards dos artigos escuros */
[class~="group"] {
background: #0b1220 !important;
background-color: #0b1220 !important;
border-color: rgba(0, 217, 255, 0.12) !important;
box-shadow: 0 18px 45px rgba(15, 23, 42, 0.18) !important;
}

[class~="group"] h1,
[class~="group"] h2,
[class~="group"] h3,
[class~="group"] p {
color: #ffffff !important;
}

[class~="group"] .text-slate-100,
[class~="group"] .text-slate-200,
[class~="group"] .text-slate-300,
[class~="group"] .text-slate-400 {
color: #cbd5e1 !important;
}

/* Página dos artigos: leitura clara */
.article-content,
.prose {
background: #ffffff !important;
color: #334155 !important;
}

.article-content h1,
.article-content h2,
.article-content h3,
.article-content strong,
.prose h1,
.prose h2,
.prose h3,
.prose strong {
color: #0f172a !important;
}

.article-content p,
.article-content li,
.prose p,
.prose li {
color: #334155 !important;
}

.article-content a,
.prose a {
color: #0284c7 !important;
}

.article-content figcaption {
color: #64748b !important;
}

.article-content figure img,
.article-content img {
border-color: rgba(15, 23, 42, 0.12) !important;
box-shadow: 0 18px 40px rgba(15, 23, 42, 0.10) !important;
}

input,
textarea {
background: #ffffff !important;
color: #0f172a !important;
border-color: rgba(15, 23, 42, 0.16) !important;
}

input::placeholder,
textarea::placeholder {
color: #64748b !important;
}

/* Newsletter continua escura para combinar com os cards */
.glass {
background: #0b1220 !important;
background-color: #0b1220 !important;
border-color: rgba(0, 217, 255, 0.16) !important;
}

.glass h1,
.glass h2,
.glass h3,
.glass p,
.glass span {
color: #ffffff !important;
}

.glass input,
.glass textarea {
background: rgba(7, 17, 31, .82) !important;
color: #ffffff !important;
border-color: rgba(0, 217, 255, .25) !important;
}

.btn-primary {
background: linear-gradient(135deg, #0284c7, #2563eb) !important;
color: #ffffff !important;
}

.btn-ghost {
background: #ffffff !important;
color: #0f172a !important;
border-color: rgba(15, 23, 42, 0.16) !important;
}

/* Hero continua escuro por causa do vídeo */
section:has(video) {
background: #07111f !important;
background-color: #07111f !important;
}


export default function ThemeToggle() {
const [isLight, setIsLight] = useState(false)

function enableLightTheme() {
document.documentElement.classList.add('light-theme')
document.body.classList.add('light-theme')
document.documentElement.setAttribute('data-theme', 'light')
document.body.setAttribute('data-theme', 'light')


let styleTag = document.getElementById('mente-light-theme-style')

if (!styleTag) {
  styleTag = document.createElement('style')
  styleTag.id = 'mente-light-theme-style'
  document.head.appendChild(styleTag)
}

styleTag.innerHTML = lightThemeCSS

localStorage.setItem('mente-theme', 'light')
setIsLight(true)


}

function enableDarkTheme() {
document.documentElement.classList.remove('light-theme')
document.body.classList.remove('light-theme')
document.documentElement.setAttribute('data-theme', 'dark')
document.body.setAttribute('data-theme', 'dark')


const styleTag = document.getElementById('mente-light-theme-style')

if (styleTag) {
  styleTag.remove()
}

localStorage.setItem('mente-theme', 'dark')
setIsLight(false)


}

useEffect(() => {
const savedTheme = localStorage.getItem('mente-theme')


if (savedTheme === 'light') {
  enableLightTheme()
} else {
  enableDarkTheme()
}


}, [])

function toggleTheme() {
if (isLight) {
enableDarkTheme()
} else {
enableLightTheme()
}
}

return (
<button
type="button"
onClick={toggleTheme}
className="rounded-full border border-cyanx/30 bg-slate-900/70 px-3 py-2 text-xs font-bold text-cyanx transition hover:bg-cyanx/10 sm:text-sm"
aria-label="Alternar entre modo claro e modo escuro"
title={isLight ? 'Ativar modo escuro' : 'Ativar modo claro'}
>
{isLight ? '🌙 Modo escuro' : '☀️ Modo claro'} </button>
)
}
