"use client";

import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const navigationItems = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <header className="bg-white/80 ">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center mt-6">
          <Image
            src="icons/codewave_logo.svg"
            alt="CodeWave"
            width={80}
            height={80}
          />
          <div className="text-2xl font-bold text-black">
            CodeWave
            <span className="text-xs align-super">™</span>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8 gap-4">
          <nav className="flex items-center gap-1 bg-black rounded-full p-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === item.name
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-black text-white hover:bg-gray-800"
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
