"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "#products", label: "Produkty", scroll: true, disabled: false },
  { href: "/blog", label: "Blog", scroll: false, disabled: true },
];

interface NavLinksProps {
  mobile?: boolean;
  onClose?: () => void;
}

// Shared style object for desktop nav buttons — matches ContactButton exactly
const craftButtonStyle: React.CSSProperties = {
  background: "linear-gradient(160deg, #7a3d2e 0%, #4C2922 50%, #321810 100%)",
  boxShadow:
    "inset 0 1px 0 rgba(255,210,180,0.18), inset 0 -1px 0 rgba(0,0,0,0.25), 0 4px 14px rgba(76,41,34,0.45), 0 1px 3px rgba(0,0,0,0.2)",
};

const sharedDesktopClass = `
  group
  relative
  flex items-center
  px-4 py-2 rounded-lg
  text-[11px] font-semibold tracking-widest uppercase
  text-amber-100/90
  overflow-hidden
  transition-all duration-200
  active:scale-[0.96] active:translate-y-px
  select-none
  cursor-pointer
`;

const NavLinks = ({ mobile = false, onClose }: NavLinksProps) => {
  const pathname = usePathname();

  const handleProductsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose?.();
    const section = document.getElementById("products");
    if (section) {
      const navbarHeight = document.querySelector("header")?.offsetHeight ?? 80;
      const extraGap = 16;
      const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight - extraGap;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  if (mobile) {
    return (
      <>
        {links.map(({ href, label, scroll, disabled }) => {
          const active = !scroll && pathname?.startsWith(href);
          const mobileClass = `block text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-150 ${
            disabled
              ? "text-[#6b4f47]/40 cursor-not-allowed"
              : active
              ? "bg-[#4C2922]/10 text-[#4C2922]"
              : "text-[#6b4f47] hover:bg-[#4C2922]/8 hover:text-[#4C2922]"
          }`;
          if (disabled) {
            return <span key={href} className={mobileClass}>{label}</span>;
          }
          return scroll ? (
            <button key={href} onClick={handleProductsClick} className={mobileClass}>
              {label}
            </button>
          ) : (
            <Link key={href} href={href} onClick={onClose} className={mobileClass}>
              {label}
            </Link>
          );
        })}
      </>
    );
  }

  const Shimmer = () => (
    <span
      className="
        pointer-events-none absolute inset-0
        translate-x-[-110%] group-hover:translate-x-[110%]
        transition-transform duration-700 ease-in-out
        skew-x-[-20deg]
      "
      style={{
        background: "linear-gradient(90deg, transparent, rgba(255,210,180,0.12), transparent)",
      }}
    />
  );

  return (
    <>
      {links.map(({ href, label, scroll, disabled }) =>
        disabled ? (
          <span
            key={href}
            className={sharedDesktopClass}
            style={{
              background: "linear-gradient(160deg, #7a3d2e 0%, #4C2922 50%, #321810 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,210,180,0.18), inset 0 -1px 0 rgba(0,0,0,0.25)",
              opacity: 0.45,
              cursor: "not-allowed",
            }}
          >
            <span className="relative">{label}</span>
          </span>
        ) : scroll ? (
          <button
            key={href}
            onClick={handleProductsClick}
            className={sharedDesktopClass}
            style={craftButtonStyle}
          >
            <Shimmer />
            <span className="relative">{label}</span>
          </button>
        ) : (
          <Link
            key={href}
            href={href}
            className={sharedDesktopClass}
            style={craftButtonStyle}
          >
            <Shimmer />
            <span className="relative">{label}</span>
          </Link>
        )
      )}
    </>
  );
};

export default NavLinks;