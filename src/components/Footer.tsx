import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#24262B] bg-[#07080A] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-serif text-2xl tracking-[0.25em] text-[#F5F5F0] uppercase font-light">
            Solaria
          </span>
          <span className="text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase font-medium mt-1">
            Monterey Horizon Estate
          </span>
          <span className="text-xs text-neutral-500 mt-3 font-light">
            © 2025 Solaria Oceanfront Estate. All Rights Reserved. Confidential Offering.
          </span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 text-xs uppercase tracking-widest text-neutral-400">
          <a href="#concept" className="hover:text-[#D4AF37] transition-colors">
            Philosophy
          </a>
          <a href="#specifications" className="hover:text-[#D4AF37] transition-colors">
            Specifications
          </a>
          <a href="#highlights" className="hover:text-[#D4AF37] transition-colors">
            Highlights
          </a>
          <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">
            Anthology
          </a>
          <a href="#walkthrough" className="hover:text-[#D4AF37] transition-colors">
            Walkthrough
          </a>
          <a href="#acquisition" className="hover:text-[#D4AF37] transition-colors">
            Acquisition
          </a>
        </div>
      </div>
    </footer>
  );
};
