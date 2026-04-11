import Link from "next/link";
import { MoveRight } from "lucide-react";

export function FooterBlock() {
  return (
    <footer className="bg-black text-gray-400 py-16 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-heading text-4xl font-bold tracking-wider text-white">
                RETRO<span className="text-primary">FIT</span>
              </span>
            </Link>
            <p className="max-w-md font-sans leading-relaxed mb-8">
              Your ultimate destination for a complete body transformation. We provide state of the art equipment, expert guidance, and an unbeatable community.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'TW', 'YT'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full font-bold font-sans text-xs bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-2xl text-white mb-6">QUICK LINKS</h4>
            <ul className="flex flex-col gap-3 font-sans">
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#classes" className="hover:text-primary transition-colors">Classes</Link></li>
              <li><Link href="#trainers" className="hover:text-primary transition-colors">Trainers</Link></li>
              <li><Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-2xl text-white mb-6">CONTACT</h4>
            <ul className="flex flex-col gap-3 font-sans">
              <li>123 Fitness Avenue, Muscle City, NY 10001</li>
              <li>+1 (555) 123-4567</li>
              <li>info@retrofitness.com</li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-sans">
          <p>&copy; {new Date().getFullYear()} Retro Fitness. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
