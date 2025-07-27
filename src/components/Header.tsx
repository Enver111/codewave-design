"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Главная");

  // Порядок должен соответствовать реальному порядку секций на странице
  const navigationItems = [
    { name: "Главная", id: "home" },
    { name: "О нас", id: "about" },
    { name: "Проекты", id: "projects" },
    { name: "Контакты", id: "contact" },
  ];

  // Функция для определения активной секции при скролле
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => ({
        ...item,
        element: document.getElementById(item.id),
      }));

      // Увеличиваем offset для корректной работы со sticky header
      const scrollPosition = window.scrollY + 150;

      // Проверяем, близко ли к концу страницы (для последней секции)
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isNearBottom =
        windowHeight + window.scrollY >= documentHeight - 200;

      // Определяем активную секцию
      let currentSection = sections[0]; // По умолчанию первая секция

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      }

      // Специальная обработка для последней секции навигации
      const lastNavSection = sections[sections.length - 1];
      if (
        isNearBottom ||
        (lastNavSection.element &&
          lastNavSection.element.offsetTop <= scrollPosition + 100)
      ) {
        currentSection = lastNavSection;
      }

      setActiveTab(currentSection.name);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Вызываем сразу для установки начального состояния

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (itemId: string, itemName: string) => {
    setActiveTab(itemName);

    // Плавный скролл к секции
    const element = document.getElementById(itemId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="bg-background top-0 z-50 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-6 py-4 ">
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
                onClick={() => handleTabClick(item.id, item.name)}
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
