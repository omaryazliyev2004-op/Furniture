import React, { useState } from "react";

const navLinks = ["Home", "Services", "Doctors", "Products", "Gallery"];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .nav-link {
          font-size: 14px;
          font-weight: 600;
          color: #333;
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 2px;
          background: #054C73;
          border-radius: 9999px;
          transition: width 0.3s ease;
        }
        .nav-link:hover { color: #054C73; }
        .nav-link:hover::after { width: 100%; }
      `}</style>

      <header className="w-full bg-white sticky top-0 z-50 shadow-md">
        <nav className="max-w-[1560px] mx-auto flex items-center justify-between px-5 lg:px-[120px] h-[80px]">
          
          <a href="#">
            <img src="/images/logo.svg" alt="logo" className="h-8" />
          </a>

          <ul className="hidden min-[1000px]:flex items-center gap-16">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="nav-link">{link}</a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="min-[1000px]:hidden text-2xl"
          >
            {open ? "✕" : "☰"}
          </button>
        </nav>

        <div
          className={`min-[1000px]:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-[400px]" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col px-5 py-3 gap-3 bg-white">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="block py-2 font-semibold text-gray-700 hover:text-[#054C73]"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        />
      )}
    </>
  );
}