import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { LightboxData } from '../types';

interface LightboxModalProps {
  data: LightboxData;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ data, onClose }) => {
  useEffect(() => {
    if (data.isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [data.isOpen, onClose]);

  if (!data.isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-6 transition-all duration-300 animate-fade-in"
    >
      {/* Top Bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex items-center justify-between text-white max-w-7xl mx-auto w-full pt-2"
      >
        <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
          Solaria High-Resolution Gallery
        </span>
        <button
          onClick={onClose}
          className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-black flex items-center justify-center transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex-1 flex items-center justify-center py-4 max-w-6xl mx-auto w-full overflow-hidden"
      >
        <img
          src={data.image}
          alt={data.title}
          className="max-h-[76vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
        />
      </div>

      {/* Description Footer */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-4xl mx-auto w-full pb-4 text-center space-y-1"
      >
        <h4 className="font-serif text-2xl sm:text-3xl text-[#F5F5F0] font-light">
          {data.title}
        </h4>
        <p className="text-sm text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
          {data.description}
        </p>
      </div>
    </div>
  );
};
