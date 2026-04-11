"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "HOME", href: "#" },
  { name: "ABOUT US", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "MEMBERSHIP PLANS", href: "#plans" },
  { name: "OFFERS", href: "#offers" },
  { name: "GALLERY", href: "#gallery" },
  { name: "BLOG", href: "#blog" },
  { name: "CONTACT US", href: "#contact" },
];

export function NavbarBlock() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5",
        scrolled ? "bg-background/95 backdrop-blur-md py-4 shadow-md" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Using a text logo since no image logo was provided - applying gym font */}
          <span className="font-heading text-3xl font-bold tracking-wider">
            RETRO<span className="text-primary">FIT</span>
          </span>
        </Link>
        
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
      </div>
    </header>
  );
}
