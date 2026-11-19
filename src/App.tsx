import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSequence } from './components/HeroSequence';
import { PhilosophySection } from './components/PhilosophySection';
import { HighlightsSection } from './components/HighlightsSection';
import { GallerySection } from './components/GallerySection';
import { WalkthroughSection } from './components/WalkthroughSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { LightboxData } from './types';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [lightboxData, setLightboxData] = useState<LightboxData>({
    isOpen: false,
    image: '',
    title: '',
    description: '',
  });

  const handleOpenLightbox = (data: Omit<LightboxData, 'isOpen'>) => {
    setLightboxData({
      isOpen: true,
      image: data.image,
      title: data.title,
      description: data.description,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxData((prev) => ({ ...prev, isOpen: false }));
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#9CA3AF] font-sans antialiased selection:bg-[#D4AF37] selection:text-black">
      {/* Sticky Glassmorphism Header */}
      <Navbar darkMode={darkMode} onToggleDarkMode={handleToggleDarkMode} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Canvas Image-Sequence Animation */}
        <HeroSequence />

        {/* The Architectural Philosophy (2-Column Split) */}
        <PhilosophySection onOpenLightbox={handleOpenLightbox} />

        {/* Curated Architectural Highlights (3x2 Grid + Master Specs) */}
        <HighlightsSection />

        {/* Curated Living Spaces (Filterable Bento Gallery + Lightbox) */}
        <GallerySection onOpenLightbox={handleOpenLightbox} />

        {/* Explore the Mansion: 7-Stage Walkthrough (Interactive Stepper) */}
        <WalkthroughSection />

        {/* Arrange a Confidential Showing (Broker Info + Interactive Form) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal */}
      <LightboxModal data={lightboxData} onClose={handleCloseLightbox} />
    </div>
  );
}

export default App;
