'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
const [isLight, setIsLight] = useState(false)

function applyLightTheme() {
const shell = document.querySelector('.site-shell')


document.documentElement.setAttribute('data-theme', 'light')
document.body.setAttribute('data-theme', 'light')

if (shell) {
  shell.classList.add('force-light')
}

localStorage.setItem('mente-theme', 'light')
setIsLight(true)


}

function applyDarkTheme() {
const shell = document.querySelector('.site-shell')


document.documentElement.setAttribute('data-theme', 'dark')
document.body.setAttribute('data-theme', 'dark')

if (shell) {
  shell.classList.remove('force-light')
}

localStorage.setItem('mente-theme', 'dark')
setIsLight(false)


}

useEffect(() => {
const savedTheme = localStorage.getItem('mente-theme')


if (savedTheme === 'light') {
  applyLightTheme()
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
className="rounded-full border border-cyanx/30 bg-slate-900/70 px-3 py-2 text-xs font-bold text-cyanx transition hover:bg-cyanx/10 sm:text-sm"
aria-label="Alternar entre modo claro e modo escuro"
title={isLight ? 'Ativar modo escuro' : 'Ativar modo claro'}
>
{isLight ? '🌙 Modo escuro' : '☀️ Modo claro'} </button>
)
}
