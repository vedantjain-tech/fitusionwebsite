import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-16 py-5 flex items-center justify-between transition-all duration-300
      ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-[#d9ff00] rotate-45 rounded-sm shadow-[0_0_12px_#d9ff00]"></div>
        <h1 className="text-xl md:text-2xl font-bold text-[#d9ff00] tracking-wide">
          FiTusion
        </h1>
      </div>

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex items-center gap-10 text-sm text-gray-400">
        <Link to="/" className="hover:text-white transition">Home</Link>
        <Link to="/about" className="hover:text-white transition">About</Link>
        <Link to="/services" className="hover:text-white transition">Services</Link>
        <Link to="/exercise" className="hover:text-white transition">Exercises</Link>
      </nav>

      {/* DESKTOP BUTTONS */}
      <div className="hidden md:flex items-center gap-3">
        <button className="px-5 py-2 rounded-full bg-[#d9ff00] text-black font-semibold hover:scale-105 transition">
          Contact Us
        </button>

        <button className="px-5 py-2 rounded-full border border-[#d9ff00] text-[#d9ff00] hover:bg-[#d9ff00] hover:text-black transition">
          Get Started
        </button>
      </div>

      {/* HAMBURGER */}
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setOpen(!open)}
      >
        <span className="w-6 h-[2px] bg-white"></span>
        <span className="w-6 h-[2px] bg-white"></span>
        <span className="w-6 h-[2px] bg-white"></span>
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-6 md:hidden animate-fadeIn">
          
          <Link to="/" onClick={() => setOpen(false)} className="text-gray-300 text-lg">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="text-gray-300 text-lg">About</Link>
          <Link to="/services" onClick={() => setOpen(false)} className="text-gray-300 text-lg">Services</Link>

          <button className="mt-4 px-5 py-3 rounded-full bg-[#d9ff00] text-black font-semibold">
            Contact Us
          </button>

          <button className="px-5 py-3 rounded-full border border-[#d9ff00] text-[#d9ff00]">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}