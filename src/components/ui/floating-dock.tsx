import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageSwitcher } from '@/components/nav/language-switcher'

export function FloatingDock() {
    return (
        <div className="fixed bottom-6 start-6 z-50 flex items-center gap-2 p-2 rounded-full backdrop-blur-md border bg-white/70 border-slate-200 shadow-lg dark:bg-[#000A15]/70 dark:border-white/10 dark:shadow-xl dark:shadow-black/50">
            <LanguageSwitcher />
            <ThemeToggle />
        </div>
    )
}