'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'

const Sun = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-6 w-6"
  >
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </svg>
)
const Moon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-6 w-6"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
)
const options = [
  { value: 'light', label: 'Light', Icon: Sun },
  { value: 'dark', label: 'Dark', Icon: Moon },
] as const

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!open) return
    const close = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [open])

  const pick = (value: (typeof options)[number]['value']) => {
    setTheme(value)
    setOpen(false)
  }

  return (
    <div ref={rootRef} className="relative z-[100]">
      <button
        type="button"
        aria-label="Theme switcher"
        aria-expanded={open}
        aria-haspopup="listbox"
        className="hover:text-primary-500 dark:hover:text-primary-400 flex shrink-0 cursor-pointer items-center justify-center text-gray-900 dark:text-gray-100"
        onClick={() => setOpen((v) => !v)}
        suppressHydrationWarning
      >
        {mounted && resolvedTheme === 'dark' ? <Moon /> : <Sun />}
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute top-full right-0 z-[100] mt-2 w-32 overflow-hidden rounded-md border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-700 dark:bg-gray-800"
        >
          {options.map(({ value, label, Icon }) => (
            <li key={value} role="option" aria-selected={resolvedTheme === value}>
              <button
                type="button"
                className="hover:bg-primary-600 dark:hover:bg-primary-600 flex w-full cursor-pointer items-center px-3 py-2 text-left text-sm text-gray-900 hover:text-white dark:text-gray-100 dark:hover:text-white"
                onClick={() => pick(value)}
              >
                <span className="mr-2">
                  <Icon />
                </span>
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ThemeSwitch
