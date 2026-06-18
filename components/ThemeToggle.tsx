'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
const [isLight, setIsLight] = useState(false)

useEffect(() => {
const savedTheme = localStorage.getItem('mente-theme')


if (savedTheme === 'light') {
  document.documentElement.classList.add('light-theme')
  document.body.classList.add('light-theme')
  setIsLight(true)
} else {
  document.documentElement.classList.remove('light-theme')
  document.body.classList.remove('light-theme')
  setIsLight(false)
}


}, [])

function toggleTheme() {
const nextIsLight = !isLight


setIsLight(nextIsLight)

if (nextIsLight) {
  document.documentElement.classList.add('light-theme')
  document.body.classList.add('light-theme')
  localStorage.setItem('mente-theme', 'light')
} else {
  document.documentElement.classList.remove('light-theme')
  document.body.classList.remove('light-theme')
  localStorage.setItem('mente-theme', 'dark')
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
