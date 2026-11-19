import React, { useState } from 'react';
import { Maximize } from 'lucide-react';
import { GalleryItem, LightboxData } from '../types';

interface GallerySectionProps {
  onOpenLightbox: (data: Omit<LightboxData, 'isOpen'>) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const galleryItems: GalleryItem[] = [
    {
      id: 'salon',
      category: 'living',
      categoryLabel: 'Living & Salons',
      title: 'Grand Living Salon & Fireplace Pavilion',
      subtitle: 'Travertine slab fireplace with custom acoustic timber ceilings and frameless glass corner.',
      description: '24-foot soaring glass facades looking over the Pacific bluffs with bespoke Italian stone fireplaces.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90',
      highResImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=95',
      gridSpan: 'lg:col-span-8',
      height: 'h-[420px]',
    },
    {
      id: 'suite',
      category: 'suites',
      categoryLabel: 'Primary Suites',
      title: 'Master Oceanfront Suite',
      subtitle: 'Private primary wing floating above the waves with panoramic sunset vistas.',
      description: 'Wraparound cantilevered balcony with motorized acoustic glass wall disappearing into pocket cavity.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90',
      highResImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=95',
      gridSpan: 'lg:col-span-4',
      height: 'h-[420px]',
    },
    {
      id: 'culinary',
      category: 'kitchen',
      categoryLabel: 'Culinary',
      title: 'Calacatta Chef Suite',
      subtitle: 'Monolithic stone waterfall island paired with integrated Gaggenau appliances.',
      description: 'Book-matched Calacatta marble waterfall island, fluted oak custom millwork, and full auxiliary butler prep pantry.',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=90',
      highResImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2400&q=95',
      gridSpan: 'lg:col-span-4',
      height: 'h-[400px]',
    },
    {
      id: 'wellness',
      category: 'wellness',
      categoryLabel: 'Wellness & Spa',
      title: 'Monolithic Soaking Bath',
      subtitle: 'Freestanding carved granite soaking tub overlooking the Pacific coast.',
      description: 'Spa-inspired primary bath featuring steam room, Swedish sauna, and heated travertine slab radiant floors.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1800&q=90',
      highResImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2400&q=95',
      gridSpan: 'lg:col-span-4',
      height: 'h-[400px]',
    },
    {
      id: 'terraces',
      category: 'living',
      categoryLabel: 'Architecture',
      title: 'Sunset Cascading Terraces',
      subtitle: 'The iconic multi-tiered cliffside silhouette catching golden hour reflection.',
      description: 'Cascading limestone sun decks with integrated fire lounges hovering 150 feet above the crashing waves.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=90',
      highResImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2800&q=95',
      gridSpan: 'lg:col-span-4',
      height: 'h-[400px]',
    },
  ];

  const filterButtons = [
    { key: 'all', label: 'All Spaces' },
    { key: 'living', label: 'Living & Salons' },
    { key: 'suites', label: 'Suites' },
    { key: 'kitchen', label: 'Culinary' },
    { key: 'wellness', label: 'Wellness & Spa' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-28 px-6 bg-[#0B0C0E] border-b border-[#24262B]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              Visual Anthology
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#F5F5F0] font-light mt-2">
              Curated Living Spaces
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wider">
            {filterButtons.map((btn) => (
              <button
                key={btn.key}
                onClick={() => setActiveFilter(btn.key)}
                className={`px-4 py-2 rounded-full border transition-all ${
                  activeFilter === btn.key
                    ? 'border-[#D4AF37] bg-[#D4AF37] text-black font-semibold shadow-lg'
                    : 'border-[#24262B] text-neutral-400 hover:border-[#D4AF37] hover:text-[#F5F5F0]'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                onOpenLightbox({
                  image: item.highResImage,
                  title: item.title,
                  description: item.description,
                })
              }
              className={`${item.gridSpan} ${item.height} group relative rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-[#24262B] bg-[#131518]`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
                <div className="pr-4">
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl mt-1 text-[#F5F5F0]">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-xs text-neutral-300 font-light mt-1 max-w-md hidden sm:block">
                      {item.subtitle}
                    </p>
                  )}
                </div>

                <div className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  <Maximize className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
