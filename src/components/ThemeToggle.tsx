"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-12 h-12 rounded-xl bg-secondary animate-pulse" />;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-xl bg-secondary hover:bg-accent transition-all duration-300 flex items-center justify-center group shadow-sm border border-border hover:shadow-md cursor-pointer"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {/* Background gradient effect */}
      <div
        className={`absolute inset-0 rounded-xl transition-opacity duration-500 ${
          theme === "light"
            ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-100"
            : "bg-gradient-to-br from-yellow-400/10 to-orange-400/10 opacity-100"
        }`}
      />

      {/* Moon Icon - показывается в светлой теме */}
      <svg
        className={`w-6 h-6 transition-all duration-500 ease-out ${
          theme === "light"
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-180 scale-0 opacity-0"
        } absolute text-slate-700 dark:text-slate-300`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>

      {/* Sun Icon - показывается в темной теме */}
      <svg
        className={`w-6 h-6 transition-all duration-500 ease-out ${
          theme === "dark"
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-180 scale-0 opacity-0"
        } absolute text-yellow-500 dark:text-yellow-400`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="5" strokeWidth="2" />
        <path
          d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
          strokeWidth="2"
        />
      </svg>

      {/* Subtle glow effect on hover */}
      <div
        className={`absolute inset-0 rounded-xl transition-opacity duration-300 group-hover:opacity-100 opacity-0 ${
          theme === "light"
            ? "shadow-[0_0_20px_rgba(147,197,253,0.3)]"
            : "shadow-[0_0_20px_rgba(251,191,36,0.3)]"
        }`}
      />
    </button>
  );
}
