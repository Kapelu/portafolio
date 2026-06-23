"use client"

import { useEffect, useState } from "react"

type Theme = "light" | "dark"

export function useTheme() {
    const [theme, setTheme] = useState<Theme>("light")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as Theme | null

        if (storedTheme) {
            setTheme(storedTheme)
            document.documentElement.classList.toggle("dark", storedTheme === "dark")
        } else {
            const systemDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches

            const systemTheme: Theme = systemDark ? "dark" : "light"
            setTheme(systemTheme)
            document.documentElement.classList.toggle("dark", systemDark)
        }

        setMounted(true)
    }, [])

    const toggleTheme = () => {
        const newTheme: Theme = theme === "dark" ? "light" : "dark"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
        document.documentElement.classList.toggle("dark", newTheme === "dark")
    }

    return { theme, toggleTheme, mounted }
}
