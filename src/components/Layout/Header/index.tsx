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

  // Close mobile menu when clicking outside
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
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${sticky
          ? "bg-darkmode shadow-lg py-2"
          : "bg-darkmode/80 backdrop-blur-md py-5 md:py-8"
        }`}
      data-aos="fade-down"
      data-aos-duration="600"
    >
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" aria-label="Home" className="transform transition-transform duration-300 hover:scale-105">
          <Logo />
        </Link>

        {/* Desktop Navbar */}
        <nav className="hidden lg:flex flex-grow items-center gap-8 justify-end">
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="block lg:hidden p-2 rounded-lg transition-transform duration-300 hover:scale-110"
          aria-label="Toggle mobile menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300"></span>
          <span className="block w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300"></span>
          <span className="block w-6 h-0.5 bg-white transition-transform duration-300"></span>
        </button>
      </div>

      {/* Backdrop for Mobile Menu */}
      {navbarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-40 transition-opacity duration-300"
          data-aos="fade-in"
          data-aos-duration="300"
        />
      )}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-darkmode shadow-2xl transform transition-transform duration-500 ease-in-out ${navbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        data-aos="slide-left"
        data-aos-duration="400"
      >
        <div className="flex items-center justify-between p-4">
          <Link href="/" aria-label="Home" className="transform transition-transform duration-300 hover:scale-105">
            <Logo />
          </Link>
          <button
            onClick={() => setNavbarOpen(false)}
            className="bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-6 h-6 absolute top-4 right-4 dark:invert transition-transform duration-300 hover:scale-110"
            aria-label="Close menu"
          ></button>
        </div>
        <nav className="flex flex-col items-start p-6 space-y-4">
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} onClick={() => setNavbarOpen(false)} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;