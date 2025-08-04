"use client";
import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  const handleClick = () => {
    if (item.submenu) {
      setSubmenuOpen(!submenuOpen);
    }
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        onClick={handleClick}
        className={`text-sm sm:text-base lg:text-lg font-medium capitalized flex items-center gap-1 transition-all duration-300 group-hover:text-primary ${path === item.href ? "text-primary" : "text-muted"
          } relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-0 after:transition-all after:duration-300 group-hover:after:w-full focus:outline-none focus:ring-2 focus:ring-primary`}
        aria-label={item.label}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
            className="transition-transform duration-300 group-hover:rotate-180"
            aria-hidden="true"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>
      {item.submenu && submenuOpen && (
        <div
          className="absolute left-0 mt-2 w-48 sm:w-56 bg-white dark:bg-darklight dark:text-white shadow-xl rounded-lg py-2 transform transition-all duration-300 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 md:scale-100 md:opacity-100"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-2 text-sm sm:text-base transition-all duration-200 ${path === subItem.href
                  ? "bg-primary text-white"
                  : "text-black dark:text-white hover:bg-primary/10 hover:text-primary"
                } focus:outline-none focus:ring-2 focus:ring-primary`}
              aria-label={subItem.label}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;