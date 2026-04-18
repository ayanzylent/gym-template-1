"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Programs", href: "#programs" },
  { name: "Propiumtio", href: "#propiumtio" },
  { name: "Trainers", href: "#trainers" },
  { name: "Contact", href: "#contact" },
];

export function DemoNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] py-4 px-4 md:px-12 flex justify-between items-center bg-[#070707] border-b border-white/5">
        {/* Logo */}
        <Link href="/demo" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
            <Image src={'/demo_images/logo.svg'} alt="logo" height={100} width={100} className="w-full h-full object-contain" />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white font-sans">Flentnong</span>
        </Link>

        {/* Links - Visible on desktop only */}
        <div className="flex items-center gap-2 md:gap-4 lg:gap-8">
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-[11px] lg:text-sm font-medium text-neutral-400 hover:text-white transition-colors uppercase tracking-wide lg:tracking-widest">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-row gap-2 items-center">
            {/* Hamburger Icon (visible on mobile, hidden on desktop) */}
            <button
              className="md:hidden p-1 rounded bg-[#111111] text-white flex items-center justify-center w-8 h-8 hover:text-rose-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={20} />
            </button>
            {/* Pink Accent Button (hidden on mobile, visible on desktop) */}
            <button className="hidden md:flex items-center justify-center h-10 w-[120px] rounded-full bg-[#FF2A5F] hover:bg-rose-500 transition-colors shadow-[0_0_15px_rgba(255,42,95,0.4)] text-xs font-bold text-white tracking-widest">
              JOIN NOW
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Navigation Overlay */}
      <div
        className={`fixed inset-0 z-[50] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-[#0A0A0A] z-[55] transform transition-transform duration-300 ease-in-out md:hidden border-l border-white/5 flex flex-col pt-24 px-8 gap-8 shadow-2xl ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button
          className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={24} />
        </button>

        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-bold text-neutral-200 hover:text-rose-500 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-4 pt-6 border-t border-white/10">
            <button className="w-full py-4 rounded-full bg-[#FF2A5F] hover:bg-rose-500 transition-colors shadow-[0_4px_15px_rgba(255,42,95,0.4)] text-sm font-bold text-white tracking-widest uppercase">
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
