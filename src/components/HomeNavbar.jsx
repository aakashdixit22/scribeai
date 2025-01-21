"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { useScrollSpy } from "../../hooks/useScrollSpy";

export default function HomeNavbar() {
  const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['hero', 'features', 'about', 'developers', 'contact']);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#hero', label: 'Home', id: 'hero' },
    { href: '#features', label: 'Features', id: 'features' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#developers', label: 'Developers', id: 'developers' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="bg-transparent w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            ScribeAI
          </span>
        </a>
        
        {/* Auth & Menu Button Section */}
        <div className="flex md:order-2 items-center space-x-4">
          <div className="w-[120px] flex justify-center items-center">
            {user ? (
              <Link href="/dashboard" className="w-full flex justify-center">
                <button className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-[2px]">
                  <div className="relative rounded-lg bg-slate-800 px-4 py-2 transition-colors group-hover:bg-slate-600">
                    <span className="relative text-sm z-10 font-medium text-white">
                      Dashboard
                    </span>
                  </div>
                </button>
              </Link>
            ) : (
              <Link href="/sign-in" className="w-full flex justify-center">
                <button className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-[2px]">
                  <div className="relative rounded-lg bg-slate-800 px-4 py-2 transition-colors group-hover:bg-slate-600">
                    <span className="relative text-sm z-10 font-medium text-white">
                      Get started
                    </span>
                  </div>
                </button>
              </Link>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-slate-600 focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        
        {/* Navigation Links */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto md:order-1`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`block py-2 px-3 rounded md:p-0 transition-colors duration-200 ${
                    activeSection === link.id
                      ? 'text-emerald-500'
                      : 'text-white hover:text-slate-300 md:hover:text-slate-300'
                  } ${
                    isMenuOpen ? 'hover:bg-slate-600 md:hover:bg-transparent' : ''
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}