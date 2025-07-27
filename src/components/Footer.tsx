import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-gray-600 text-sm">
            2025 — Создано с любовью,{" "}
            <Link
              className="text-white bg-black px-2 py-1 rounded-md hover:bg-white hover:text-black transition-colors"
              href="https://codewave-eo.online"
              target="_blank"
            >
              Codewave
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-8">
            <a
              href="https://t.me/codewave_eo"
              className="text-gray-600 hover:text-black transition-colors text-sm"
            >
              Telegram
            </a>
            <a
              href="https://instagram.com/codewave.eo"
              className="text-gray-600 hover:text-black transition-colors text-sm"
            >
              Instagram
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
