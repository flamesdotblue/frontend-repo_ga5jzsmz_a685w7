import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold text-lg">Bean Nation Market</h3>
            <p className="text-white/70 text-sm mt-1">
              Fresh groceries, cosmic vibes, delivered fast.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-white/70 hover:text-white transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-white/70 hover:text-white transition">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-white/70 hover:text-white transition">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
        <p className="text-center text-white/50 text-xs mt-6">
          © {new Date().getFullYear()} Bean Nation Market. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
