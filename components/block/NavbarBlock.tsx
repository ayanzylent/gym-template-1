"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "#" },
  { name: "ABOUT US", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "CONTACT US", href: `https://wa.me/${process.env.NEXT_PUBLIC_MOBILE_NUMBER}` },
];

export function NavbarBlock() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-300 border-b border-white/5",
          scrolled ? "bg-background/95 backdrop-blur-md py-4 shadow-md" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            {/* Using a text logo since no image logo was provided - applying gym font */}
            <span className="font-heading text-3xl font-bold tracking-wider relative z-[60]">
              RETRO<span className="text-primary">FIT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-sans font-bold tracking-widest hover:text-primary transition-colors uppercase"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-primary transition-colors relative z-[60]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-xl z-[55] lg:hidden transition-all duration-300 flex flex-col justify-center items-center",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-2xl font-sans font-bold tracking-widest hover:text-primary transition-all duration-300 uppercase",
                isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
