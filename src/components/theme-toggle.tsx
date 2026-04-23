"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      initial={false}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300",
        isDark 
          ? "bg-gradient-to-tr from-indigo-900/80 to-purple-900/80 shadow-[0_0_15px_rgba(167,139,250,0.5)] border border-indigo-500/30" 
          : "bg-gradient-to-tr from-amber-200 to-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.5)] border border-orange-200/50"
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: 180 }}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
        >
          {isDark ? (
            <Moon className="h-4 w-4 text-indigo-300" />
          ) : (
            <Sun className="h-4 w-4 text-orange-50" />
          )}
        </motion.div>
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
}
