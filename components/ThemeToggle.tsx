'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
const [isLight, setIsLight] = useState(false)

function applyTheme(theme: 'light' | 'dark') {
if (theme === 'light') {
document.documentElement.classList.add('light-theme')
document.body.classList.add('light-theme')
document.documentElement.setAttribute('data-theme', 'light')
document.body.setAttribute('data-theme', 'light')
localStorage.setItem('mente-theme', 'light')
setIsLight(true)
} else {
document.documentElement.classList.remove('light-theme')
document.body.classList.remove('light-theme')
document.documentElement.setAttribute('data-theme', 'dark')
document.body.setAttribute('data-theme', 'dark')
localStorage.setItem('mente-theme', 'dark')
setIsLight(false)
}
}

useEffect(() => {
const savedTheme = localStorage.getItem('mente-theme')


if (savedTheme === 'light') {
  applyTheme('light')
} else {
  applyTheme('dark')
}


}, [])

function toggleTheme() {
applyTheme(isLight ? 'dark' : 'light')
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
