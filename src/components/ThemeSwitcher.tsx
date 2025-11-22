"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Palette } from "lucide-react"
import { useTheme, type ThemeName, themes } from "@/contexts/ThemeContext"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)

    const themeOptions: { name: ThemeName; label: string; emoji: string }[] = [
        { name: "golden-warm", label: "Golden Warm", emoji: "✨" },
        { name: "royal-purple", label: "Royal Purple", emoji: "👑" },
        { name: "crimson-dark", label: "Crimson Dark", emoji: "🔴" },
        { name: "lime-fresh", label: "Lime Fresh", emoji: "🌿" },
        { name: "grape-magenta", label: "Grape Magenta", emoji: "💜" },
    ]

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full transition-all duration-300 hover:bg-accent/20 icon-btn glow-pulse"
                    title="Change Theme"
                >
                    <Palette className="w-5 h-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 glass-card border-border/60">
                <DropdownMenuLabel className="text-sm font-semibold text-gradient">Select Dark Theme</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-border/30" />
                <DropdownMenuRadioGroup value={theme} onValueChange={(value) => setTheme(value as ThemeName)}>
                    {themeOptions.map((option) => (
                        <DropdownMenuRadioItem
                            key={option.name}
                            value={option.name}
                            className="cursor-pointer transition-all duration-200 hover:bg-accent/10"
                        >
                            <div className="flex items-center gap-3 w-full py-1">
                                <span className="text-lg">{option.emoji}</span>
                                <span className="font-medium">{option.label}</span>
                                <div
                                    className="w-3 h-3 rounded-full border border-border ml-auto flex-shrink-0"
                                    style={{
                                        background: `linear-gradient(135deg, ${themes[option.name].primary}, ${themes[option.name].accent})`,
                                    }}
                                />
                            </div>
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ThemeSwitcher
