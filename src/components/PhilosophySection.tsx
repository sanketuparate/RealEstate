import React from 'react';
import { ZoomIn } from 'lucide-react';
import { LightboxData } from '../types';

interface PhilosophySectionProps {
  onOpenLightbox: (data: Omit<LightboxData, 'isOpen'>) => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ onOpenLightbox }) => {
  const showcaseImage =
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90';

  return (
    <section id="concept" className="py-28 px-6 bg-[#0B0C0E] border-b border-[#24262B]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Stats */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
                The Architectural Philosophy
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#F5F5F0] font-light leading-tight">
                Monolithic purity framed by the endless rhythm of the Pacific.
              </h2>
            </div>

            <p className="text-[#9CA3AF] font-light leading-relaxed text-base">
              Conceived as an organic extension of the craggy Monterey bluffs, Solaria embodies an unprecedented dialogue between massive hand-chiseled Roman travertine, patinated bronze, and ultra-clear structural glass curtain walls.
            </p>

            <p className="text-[#9CA3AF] font-light leading-relaxed text-base">
              Engineered with audacious cantilevered terraces, every salon is orientated toward solar geometry, catching the pristine coastal dawn and the legendary golden twilight while preserving total acoustic stillness inside.
            </p>

            {/* 4-Stat Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-[#24262B]">
              <div>
                <span className="block font-serif text-3xl sm:text-4xl text-[#F5F5F0] font-medium">
                  14,200
                </span>
                <span className="text-xs tracking-wider uppercase text-neutral-400 mt-1 block">
                  Interior SF
                </span>
              </div>

              <div>
                <span className="block font-serif text-3xl sm:text-4xl text-[#F5F5F0] font-medium">
                  220 FT
                </span>
                <span className="text-xs tracking-wider uppercase text-neutral-400 mt-1 block">
                  Ocean Frontage
                </span>
              </div>

              <div>
                <span className="block font-serif text-3xl sm:text-4xl text-[#F5F5F0] font-medium">
                  75 FT
                </span>
                <span className="text-xs tracking-wider uppercase text-neutral-400 mt-1 block">
                  Horizon Pool
                </span>
              </div>

              <div>
                <span className="block font-serif text-3xl sm:text-4xl text-[#F5F5F0] font-medium">
                  8-Car
                </span>
                <span className="text-xs tracking-wider uppercase text-neutral-400 mt-1 block">
                  Gallery Garage
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Showcase Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-[#24262B] bg-[#131518]">
              <img
                src={showcaseImage}
                alt="Solaria Double-Height Ocean Salon Interior"
                className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest bg-black/60 text-[#F5F5F0] backdrop-blur-md border border-white/20">
                  Double-Height Ocean Salon
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div>
                  <p className="font-serif text-2xl text-[#F5F5F0]">Main Residence • Level 02</p>
                  <p className="text-xs text-neutral-300 font-light mt-0.5">
                    Floor-to-ceiling acoustic glass facing Monterey Bay
                  </p>
                </div>

                <button
                  onClick={() =>
                    onOpenLightbox({
                      image: showcaseImage,
                      title: 'Double-Height Ocean Salon — Main Residence • Level 02',
                      description:
                        '24-foot soaring glass facades looking over the Pacific bluffs with bespoke Italian stone fireplaces and radiant heated travertine.',
                    })
                  }
                  className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all group"
                  aria-label="View High-Resolution Image"
                >
                  <ZoomIn className="w-5 h-5 transition-transform group-hover:scale-110" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
