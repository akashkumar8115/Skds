"use client";
import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";

const MobileHeaderLink: React.FC<{ item: HeaderItem; onClick: () => void }> = ({ item, onClick }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        onClick={item.submenu ? handleToggle : onClick}
        className={`flex items-center justify-between w-full py-3 text-lg font-medium text-muted hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-0 after:transition-all after:duration-300 hover:after:w-full`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className={`transition-transform duration-300 ${submenuOpen ? "rotate-180" : ""}`}
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
      {submenuOpen && item.submenu && (
        <div
          className="bg-white dark:bg-darklight p-4 w-full mt-2 rounded-lg shadow-md"
          data-aos="fade-down"
          data-aos-duration="400"
        >
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              onClick={onClick}
              className="block py-2 text-base text-gray-500 hover:bg-primary/10 hover:text-primary transition-all duration-200"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;