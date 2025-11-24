"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

export type ThemeName = "golden-warm" | "royal-purple" | "crimson-dark" | "lime-fresh" | "grape-magenta" | "navy-gold"

interface ThemeContextType {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const themes: Record<
  ThemeName,
  {
    primary: string
    accent: string
    secondary: string
    dark: string
  }
> = {
  "golden-warm": {
    primary: "#F8CD86",
    accent: "#FBBF24",
    secondary: "#D4A574",
    dark: "#1A1918",
  },
  "royal-purple": {
    primary: "#94225b",
    accent: "#d4a4e8",
    secondary: "#c178d9",
    dark: "#13111a",
  },
  "crimson-dark": {
    primary: "#cc2727",
    accent: "#ff6b6b",
    secondary: "#e74c3c",
    dark: "#0f0f0f",
  },
  "lime-fresh": {
    primary: "#a2e276",
    accent: "#c8ff6d",
    secondary: "#8bc34a",
    dark: "#060606",
  },
  "grape-magenta": {
    primary: "#f25add",
    accent: "#ff69e0",
    secondary: "#d946ef",
    dark: "#110f10",
  },
  "navy-gold": {
    primary: "#0A1A4A",
    accent: "#D4AF37",
    secondary: "#1E2A68",
    dark: "#050914",
  },
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme") as ThemeName
      return saved && saved in themes ? saved : "royal-purple"
    }
    return "royal-purple"
  })

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme)
    localStorage.setItem("theme", newTheme)

    const root = window.document.documentElement
    const themeColors = themes[newTheme]

    root.setAttribute("data-theme", newTheme)
    root.style.setProperty("--theme-primary", themeColors.primary)
    root.style.setProperty("--theme-accent", themeColors.accent)
    root.style.setProperty("--theme-secondary", themeColors.secondary)
    root.style.setProperty("--theme-dark", themeColors.dark)
  }

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.add("dark")
    root.classList.remove("light")

    // Apply initial theme
    const themeColors = themes[theme]
    root.setAttribute("data-theme", theme)
    root.style.setProperty("--theme-primary", themeColors.primary)
    root.style.setProperty("--theme-accent", themeColors.accent)
    root.style.setProperty("--theme-secondary", themeColors.secondary)
    root.style.setProperty("--theme-dark", themeColors.dark)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}
