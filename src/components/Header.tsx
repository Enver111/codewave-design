"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Главная");

  const navigationItems = [
    { name: "Главная", id: "home" },
    { name: "Проекты", id: "projects" },
    { name: "О нас", id: "about" },
    { name: "Контакты", id: "contact" },
  ];

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <header className="bg-background">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Top bar with logo and theme toggle */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center justify-center flex-1">
            <Image
              src="/icons/codewave_logo.svg"
              alt="CodeWave"
              width={80}
              height={80}
            />
            <div className="text-2xl font-bold text-foreground">
              CodeWave
              <span className="text-xs align-super">™</span>
            </div>
          </div>
          <ThemeToggle />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center">
          <nav className="flex items-center gap-1 bg-primary rounded-full p-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  activeTab === item.name
                    ? "bg-background text-foreground hover:bg-secondary"
                    : "bg-primary text-primary-foreground hover:bg-secondary/20"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
