import React from 'react';
import { Building2, Compass, Waves, Trees, Maximize2, UtensilsCrossed } from 'lucide-react';

export const HighlightsSection: React.FC = () => {
  const highlights = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Cantilevered Architecture',
      description:
        'Structural glass, monolithic exposed travertine, and seismic oceanfront engineering creating weightless spans that hover across the sea.',
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: 'Direct Oceanfront Horizon',
      description:
        'Unobstructed 270-degree panoramic ocean views with private cliffside stone pathway descending directly to secluded shoreline access.',
    },
    {
      icon: <Waves className="w-6 h-6" />,
      title: 'Olympic Horizon Infinity Pool',
      description:
        '75-foot heated saltwater edge merging seamlessly into the Pacific horizon, paired with sunken fire pits and limestone sunbathing deck.',
    },
    {
      icon: <Trees className="w-6 h-6" />,
      title: 'Curated Botanical Oasis',
      description:
        'Sculptural centuries-old Japanese maples, specimen olive groves, and coastal terraced succulents curated by master landscape architects.',
    },
    {
      icon: <Maximize2 className="w-6 h-6" />,
      title: 'Double-Height Living Salons',
      description:
        '24-foot soaring glass facades with Italian bespoke furnishing, motorized shading, and integrated acoustic architectural stone.',
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6" />,
      title: 'Epicurean Chef Pavilion',
      description:
        'Book-matched Calacatta marble waterfall island, fluted oak custom millwork, auxiliary butler prep pantry, and Gaggenau 400 series suite.',
    },
  ];

  const specs = [
    { label: 'Bedrooms', value: '6 Grand Suites' },
    { label: 'Bathrooms', value: '9 Spa Baths' },
    { label: 'Interior', value: '14,200 SF' },
    { label: 'Lot Size', value: '1.82 Acres' },
    { label: 'Wine Cellar', value: '1,500 Bottles' },
    { label: 'Wellness', value: 'Spa & Sauna' },
  ];

  return (
    <section id="highlights" className="py-28 px-6 bg-[#0E1013] border-b border-[#24262B]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              Exemplary Craftsmanship
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#F5F5F0] font-light mt-2">
              Curated Architectural Highlights
            </h2>
          </div>
          <p className="text-[#9CA3AF] text-sm max-w-md font-light leading-relaxed">
            Every dimension of Solaria was custom engineered to offer an uncompromising balance of private coastal refuge and grand-scale entertaining.
          </p>
        </div>

        {/* 3x2 Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-xl bg-[#131518] border border-[#24262B] hover:border-[#D4AF37]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-2xl"
            >
              <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                {item.icon}
              </div>
              <h3 className="font-serif text-2xl text-[#F5F5F0] font-medium mb-3">
                {item.title}
              </h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Master Estate Specifications Strip */}
        <div id="specifications" className="rounded-2xl p-8 bg-[#131518] text-white border border-[#24262B] shadow-xl">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] mb-6 font-semibold">
            Master Estate Specifications
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-[#24262B]">
            {specs.map((spec, i) => (
              <div key={i} className="pt-4 lg:pt-0 lg:px-4 first:pl-0">
                <p className="text-neutral-400 text-xs uppercase tracking-wider">{spec.label}</p>
                <p className="font-serif text-2xl text-[#F5F5F0] mt-1">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
