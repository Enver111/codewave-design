"use client";

import { useState, useEffect } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / scrollHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(currentScrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-20 right-8 z-50">
      <button
        onClick={scrollToTop}
        className={`w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative overflow-hidden ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16 pointer-events-none"
        } hover:scale-110 hover:bg-secondary hover:text-secondary-foreground`}
        aria-label="Scroll to top"
      >
        {/* Progress ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 56 56"
        >
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="opacity-20"
          />
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray={163.36} // 2π * 26
            strokeDashoffset={163.36 - (163.36 * scrollProgress) / 100}
            className="transition-all duration-150 ease-out opacity-80"
            strokeLinecap="round"
          />
        </svg>

        {/* Arrow Up Icon */}
        <svg
          className="w-6 h-6 transition-transform duration-200 group-hover:-translate-y-0.5 relative z-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-150 transition-transform duration-500 -z-10" />

        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse scale-100 group-hover:scale-125 transition-transform duration-300" />
      </button>
    </div>
  );
}
