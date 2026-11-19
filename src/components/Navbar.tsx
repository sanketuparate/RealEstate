import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Concept', href: '#concept' },
    { label: 'Specifications', href: '#specifications' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Interior Gallery', href: '#gallery' },
    { label: 'Walkthrough', href: '#walkthrough' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav border-b ${
        isScrolled
          ? 'bg-black/80 border-[#24262B] shadow-2xl backdrop-blur-xl'
          : 'bg-black/40 border-white/10 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a href="#" className="flex flex-col group">
          <span className="font-serif text-2xl tracking-[0.25em] text-[#F5F5F0] uppercase font-light group-hover:text-[#D4AF37] transition-colors">
            Solaria
          </span>
          <span className="text-[9px] tracking-[0.35em] text-[#D4AF37] uppercase font-medium">
            Monterey Horizon
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-10 text-xs uppercase tracking-[0.2em] font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#D4AF37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA & Controls */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleDarkMode}
            aria-label="Toggle Theme Mode"
            className="w-10 h-10 rounded-full border border-white/20 text-[#F5F5F0] flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-white/5 transition-all"
          >
            {darkMode ? <Sun className="w-4 h-4 text-[#D4AF37]" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#acquisition"
            className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black hover:from-[#E8C86A] hover:to-[#D4AF37] transition-all shadow-lg hover:shadow-[#D4AF37]/20 group"
          >
            <span>Private Showing</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-[#D4AF37]"
            aria-label="Open Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#D4AF37]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0C0E]/95 border-b border-[#24262B] px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-widest text-[#F5F5F0] hover:text-[#D4AF37] transition-colors py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#acquisition"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex w-full justify-center items-center space-x-2 px-5 py-3 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#D4AF37] text-black mt-2"
          >
            <span>Private Showing</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
};
