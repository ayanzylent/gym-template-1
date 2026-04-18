import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export function DemoFooter() {
  return (
    <footer className="bg-[#020202] pt-16 md:pt-24 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6 md:max-w-md lg:max-w-xl">
            <Link href="/demo" className="flex items-center gap-2">
              <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
                <Image src={'/demo_images/logo.svg'} alt="logo" height={100} width={100} className="w-full h-full object-contain grayscale brightness-200" />
              </div>
              <span className="text-xl md:text-2xl font-bold tracking-tight text-white font-sans uppercase">Flentnong</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed font-light pr-4">
              We provide the ultimate premium fitness experience, combining brutal efficiency with state-of-the-art facilities engineered to transform your body.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:text-[#FF2A5F] hover:bg-white/10 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:text-[#FF2A5F] hover:bg-white/10 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:text-[#FF2A5F] hover:bg-white/10 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:text-[#FF2A5F] hover:bg-white/10 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6 md:min-w-[200px]">
            <h4 className="text-white font-bold text-lg uppercase tracking-wider relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#FF2A5F] rounded-full"></span>
            </h4>
            <ul className="flex flex-col gap-3 mt-2">
              <li><Link href="#about" className="text-neutral-400 text-sm hover:text-[#FF2A5F] transition-colors">About Us</Link></li>
              <li><Link href="#programs" className="text-neutral-400 text-sm hover:text-[#FF2A5F] transition-colors">Training Programs</Link></li>
              <li><Link href="#facilities" className="text-neutral-400 text-sm hover:text-[#FF2A5F] transition-colors">Our Facilities</Link></li>
              <li><Link href="#trainers" className="text-neutral-400 text-sm hover:text-[#FF2A5F] transition-colors">Expert Trainers</Link></li>
              <li><Link href="#pricing" className="text-neutral-400 text-sm hover:text-[#FF2A5F] transition-colors">Membership Pricing</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs md:text-sm font-light">
            &copy; {new Date().getFullYear()} Flentnong Fitness. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#privacy" className="text-neutral-500 text-xs md:text-sm hover:text-white transition-colors">Privacy</Link>
            <Link href="#terms" className="text-neutral-500 text-xs md:text-sm hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
