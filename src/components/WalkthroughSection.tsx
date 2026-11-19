import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { WalkthroughStage } from '../types';

export const WalkthroughSection: React.FC = () => {
  const [currentStageIndex, setCurrentStageIndex] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);

  const stages: WalkthroughStage[] = [
    {
      id: 0,
      navLabel: '01 • Mansion Exterior',
      badge: 'Stage 01 of 07',
      sub: 'Architectural Gateway',
      title: 'Grand Mansion Exterior',
      desc: 'The iconic cliffside facade catching golden sunset rays. Built with Portuguese limestone and reinforced bronze frames designed to resist coastal ocean salt spray for generations.',
      note: '270° Cantilevered Terraces • Custom Acoustic Glass',
      img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    },
    {
      id: 1,
      navLabel: '02 • Pivot Entrance',
      badge: 'Stage 02 of 07',
      sub: 'The Arrival Sequence',
      title: 'Bespoke Pivot Entrance',
      desc: 'A monumental 12-foot blackened steel and American walnut pivot door welcomes residents into a luminous skylit vestibule with running architectural water features.',
      note: 'Biometric Access Control • Chiseled Basalt Water Basin',
      img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
    },
    {
      id: 2,
      navLabel: '03 • Ocean Salon',
      badge: 'Stage 03 of 07',
      sub: 'Central Pavilion',
      title: 'Double-Height Living Salon',
      desc: 'Soaring 24-foot ceilings framed by motorized pocketing glass panels that vanish into the wall cavity, dissolving all boundaries between the interior salon and the ocean air.',
      note: 'Acoustic Cedar Battens • Radiant Heated Travertine Slabs',
      img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    },
    {
      id: 3,
      navLabel: '04 • Art Gallery',
      badge: 'Stage 04 of 07',
      sub: 'Curated Promenade',
      title: 'The Art Gallery & Corridor',
      desc: 'Wide travertine walkways featuring museum-grade recessed track lighting, climatized sculpture niches, and framed sightlines capturing the ocean horizon.',
      note: 'Museum-Grade UV Protected Glazing • Climatized Atmosphere',
      img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85',
    },
    {
      id: 4,
      navLabel: '05 • Botanical Grounds',
      badge: 'Stage 05 of 07',
      sub: 'Private Flora Sanctuaries',
      title: 'Terraced Botanical Grounds',
      desc: 'Tiered garden pathways planted with sculptured Japanese maples, specimen olive groves, and coastal succulents descending naturally toward the private bluffs.',
      note: 'Automated Micro-Drip Irrigation • Coastal Salt Hardy Specimen',
      img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    },
    {
      id: 5,
      navLabel: '06 • 75-FT Infinity Pool',
      badge: 'Stage 06 of 07',
      sub: 'Aquatic Architecture',
      title: 'The 75-Foot Infinity Pool',
      desc: 'A heated saltwater architectural centerpiece with an invisible knife-edge overflow that seamlessly merges into the Pacific Ocean. Features sunken fire lounges and submerged daybeds.',
      note: 'Geothermal Solar Heating • Concealed Hydrotherapy Jets',
      img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=85',
    },
    {
      id: 6,
      navLabel: '07 • Pacific Horizon Sunset',
      badge: 'Stage 07 of 07',
      sub: 'Evening Twilight',
      title: 'Pacific Horizon Sunset',
      desc: 'As twilight falls, automated architectural illumination gracefully transforms the estate into a glowing cliffside beacon hovering serenely over the rolling Pacific tides.',
      note: 'Lutron Homeworks Sunset Automation • 2700K Warm Dimming',
      img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',
    },
  ];

  const handleStageSelect = (idx: number) => {
    if (idx === currentStageIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentStageIndex(idx);
      setIsFading(false);
    }, 180);
  };

  const handleNext = () => {
    handleStageSelect((currentStageIndex + 1) % stages.length);
  };

  const handlePrev = () => {
    handleStageSelect((currentStageIndex - 1 + stages.length) % stages.length);
  };

  const currentStage = stages[currentStageIndex];

  return (
    <section id="walkthrough" className="py-28 px-6 bg-[#0E1013] text-white relative overflow-hidden border-b border-[#24262B]">
      {/* Subtle Ambient Gold Glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
            Sequential Experience
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#F5F5F0] font-light mt-2">
            Explore the Mansion: 7-Stage Walkthrough
          </h2>
          <p className="text-neutral-400 text-sm font-light mt-3 leading-relaxed">
            Experience the natural progression through Solaria as engineered by the architect, moving from private coastal approaches to open ocean horizons.
          </p>
        </div>

        {/* Stage Selector Pills (Horizontally Scrollable) */}
        <div className="flex items-center space-x-3 overflow-x-auto pb-4 custom-scrollbar">
          {stages.map((stage, idx) => (
            <button
              key={stage.id}
              onClick={() => handleStageSelect(idx)}
              className={`px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all ${
                currentStageIndex === idx
                  ? 'bg-[#D4AF37] text-black shadow-lg scale-105'
                  : 'bg-[#181B20] text-neutral-300 hover:text-white border border-[#24262B] hover:border-[#D4AF37]/40'
              }`}
            >
              {stage.navLabel}
            </button>
          ))}
        </div>

        {/* Split Display Card */}
        <div className="bg-[#131518] border border-[#24262B] rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
          {/* Left: Stage Image */}
          <div className="lg:col-span-7 relative h-80 lg:h-auto overflow-hidden bg-black">
            <img
              src={currentStage.img}
              alt={currentStage.title}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                isFading ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Badge */}
            <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono tracking-widest text-[#D4AF37] border border-[#D4AF37]/30 uppercase">
              {currentStage.badge}
            </div>
          </div>

          {/* Right: Stage Copy & Note */}
          <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-6">
            <div className={`space-y-4 transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium">
                {currentStage.sub}
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F5F0] font-normal">
                {currentStage.title}
              </h3>

              <p className="text-neutral-400 font-light leading-relaxed text-sm sm:text-base">
                {currentStage.desc}
              </p>

              {/* Architectural Note Callout */}
              <div className="p-4 rounded-xl bg-[#0B0C0E] border border-[#24262B] mt-4 space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block">
                  Architectural Note
                </span>
                <p className="text-xs text-neutral-300 font-mono">
                  {currentStage.note}
                </p>
              </div>
            </div>

            {/* Previous / Next Stage Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-[#24262B]">
              <button
                onClick={handlePrev}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors py-2 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>Previous Stage</span>
              </button>

              <button
                onClick={handleNext}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors py-2 group"
              >
                <span>Next Stage</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
