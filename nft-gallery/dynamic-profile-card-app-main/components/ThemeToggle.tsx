"use client"

type Props = {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

export default function ThemeToggle({
  darkMode,
  setDarkMode,
}: Props) {
  return (
    <button
      className="theme-btn"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  )
}