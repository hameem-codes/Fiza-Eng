"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CONSOLIDATED_NAV = [
  { href: "/company", label: "Company" },
  { href: "/capabilities", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/products", label: "Products" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 px-6 md:px-12 flex items-center justify-between",
          scrolled || !isHome
            ? "bg-iron-white/95 backdrop-blur-md border-b border-slab-grey text-earth-black shadow-sm"
            : "bg-transparent text-iron-white border-b border-white/10"
        )}
      >
        {/* Brand Wordmark */}
        <Link href="/" className="flex flex-col group select-none">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-heading text-xl md:text-2xl font-semibold tracking-tight uppercase">
              FIZA
            </span>
            <span className="w-2 h-2 rounded-none bg-oxide-red inline-block" />
          </div>
          <span
            className={cn(
              "font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase leading-tight mt-0.5",
              scrolled || !isHome ? "text-quarry-grey" : "text-slab-grey"
            )}
          >
            Engineering Corporation
          </span>
        </Link>

        {/* Desktop Navigation Links: 6 Consolidated Items */}
        <nav className="hidden lg:flex items-center gap-7">
          {CONSOLIDATED_NAV.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-body-sm font-medium tracking-[0.05em] uppercase transition-colors duration-200 relative py-1",
                  isActive
                    ? "text-oxide-red font-semibold"
                    : scrolled || !isHome
                    ? "text-earth-black hover:text-oxide-red"
                    : "text-iron-white/90 hover:text-iron-white"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-oxide-red" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button: Get in Touch */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="bg-oxide-red text-iron-white text-xs font-semibold uppercase tracking-wider py-2.5 px-5 hover:bg-earth-black transition-colors duration-200 shadow-sm inline-flex items-center gap-1.5"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={cn(
            "lg:hidden p-2 flex items-center justify-center transition-colors",
            scrolled || !isHome ? "text-earth-black" : "text-iron-white"
          )}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      {/* Mobile Drawer (Clean Full-Screen Dark Overlay) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-coal-dark text-iron-white flex flex-col justify-between p-8 pt-28 lg:hidden animate-fade-in overflow-y-auto">
          <div className="flex flex-col space-y-6">
            <span className="text-label text-dust-tan tracking-widest uppercase font-mono">
              Corporate Directory
            </span>
            {CONSOLIDATED_NAV.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-medium tracking-tight uppercase hover:text-oxide-red transition-colors flex items-center justify-between border-b border-slab-grey/15 pb-3",
                    isActive ? "text-oxide-red" : "text-iron-white"
                  )}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={18} className="text-quarry-grey" />
                </Link>
              );
            })}
          </div>

          <div className="pt-8 border-t border-slab-grey/20 space-y-5">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-oxide-red text-iron-white text-center text-sm font-semibold uppercase tracking-wider py-3.5 block hover:bg-white hover:text-earth-black transition-colors"
            >
              Get in Touch
            </Link>

            <div className="text-xs font-mono text-quarry-grey space-y-1">
              <span className="block text-dust-tan font-semibold uppercase">
                Fiza Engineering Corporation
              </span>
              <span className="block">
                info@fizaengineering.com · Dubai · Africa
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
