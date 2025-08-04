"use client";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { headerData } from "./Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "./Navigation/HeaderLink";
import MobileHeaderLink from "./Navigation/MobileHeaderLink";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${sticky
        ? "bg-darkmode shadow-lg py-2 sm:py-3 md:py-4"
        : "bg-darkmode/80 backdrop-blur-md py-3 sm:py-4 md:py-6"
        }`}
      data-aos="fade-down"
      data-aos-duration="600"
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Shri Kishori Design Studio Home"
          className="transform transition-transform duration-300 hover:scale-105"
        >
          <Logo />
        </Link>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex flex-grow items-center gap-4 lg:gap-6 xl:gap-8 justify-end">
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="md:hidden p-2 rounded-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Toggle mobile menu"
          aria-expanded={navbarOpen}
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300"></span>
          <span className="block w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300"></span>
          <span className="block w-6 h-0.5 bg-white transition-transform duration-300"></span>
        </button>
      </div>

      {/* Backdrop for Mobile Menu */}
      {navbarOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden"
          onClick={() => setNavbarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed inset-y-0 right-0 h-full w-4/5 sm:w-3/5 max-w-sm bg-darkmode shadow-2xl transform transition-transform duration-300 ease-in-out ${navbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex items-center justify-between p-4 border-b border-dark_border">
          <Link
            href="/"
            aria-label="Home"
            className="transform transition-transform duration-300 hover:scale-105"
            onClick={() => setNavbarOpen(false)}
          >
            <Logo />
          </Link>
          <button
            onClick={() => setNavbarOpen(false)}
            className="p-2 rounded-lg text-white hover:bg-primary/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-80px)]">
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} onClick={() => setNavbarOpen(false)} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;