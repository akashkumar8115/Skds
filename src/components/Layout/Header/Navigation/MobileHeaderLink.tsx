"use client";
import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";

const MobileHeaderLink: React.FC<{ item: HeaderItem; onClick: () => void }> = ({ item, onClick }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = (e: React.MouseEvent) => {
    if (item.submenu) {
      e.preventDefault();
      setSubmenuOpen(!submenuOpen);
    }
  };

  const isActive = pathname === item.href;

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        onClick={item.submenu ? handleToggle : onClick}
        className={`flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
          isActive 
            ? "bg-primary/20 text-primary" 
            : "text-muted hover:text-primary hover:bg-primary/10"
        } focus:outline-none focus:ring-2 focus:ring-primary`}
        aria-label={item.label}
      >
        <span>{item.label}</span>
        {item.submenu && (
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${submenuOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </Link>
      
      {submenuOpen && item.submenu && (
        <div className="pl-4 mt-1 space-y-1">
          {item.submenu.map((subItem, index) => {
            const isSubActive = pathname === subItem.href;
            return (
              <Link
                key={index}
                href={subItem.href}
                onClick={onClick}
                className={`block px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                  isSubActive 
                    ? "bg-primary/20 text-primary" 
                    : "text-muted hover:text-primary hover:bg-primary/10"
                } focus:outline-none focus:ring-2 focus:ring-primary`}
                aria-label={subItem.label}
              >
                {subItem.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
