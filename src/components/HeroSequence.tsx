import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowDown, Calendar, Play, Pause, Repeat, Layers } from 'lucide-react';
import { TOTAL_HERO_FRAMES, HERO_FRAMES, getFallbackFramePath } from '../config/heroFrames';

export const HeroSequence: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [playMode, setPlayMode] = useState<'scroll' | 'autoplay'>('scroll');
  const [isPlayingAuto, setIsPlayingAuto] = useState<boolean>(true);

  // Animation frame references
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(performance.now());
  const accumulatorRef = useRef<number>(0);

  // Draw a frame onto the canvas with cover scaling
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const clamped = Math.max(0, Math.min(TOTAL_HERO_FRAMES - 1, Math.round(frameIndex)));
    const img = imagesRef.current[clamped];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const nw = img.naturalWidth;
    const nh = img.naturalHeight;

    // Responsive cover math
    const scale = Math.max(cw / nw, ch / nh);
    const dw = nw * scale;
    const dh = nh * scale;
    const dx = (cw - dw) * 0.5;
    const dy = (ch - dh) * 0.5;

    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  // Resize canvas according to devicePixelRatio
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(window.innerWidth * dpr);
    canvas.height = Math.round(window.innerHeight * dpr);
    renderFrame(currentFrameRef.current);
  }, [renderFrame]);

  // Preload all 168 frames on mount
  useEffect(() => {
    let isCancelled = false;
    let count = 0;
    const imageElements: HTMLImageElement[] = new Array(TOTAL_HERO_FRAMES);

    const loadSingleImage = (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = HERO_FRAMES[index];

        const onFinish = () => {
          if (isCancelled) return;
          count++;
          setLoadedCount(count);
          if (count === TOTAL_HERO_FRAMES) {
            setIsLoaded(true);
          }
          resolve(img);
        };

        img.onload = () => {
          if ('decode' in img) {
            img.decode().catch(() => {}).finally(onFinish);
          } else {
            onFinish();
          }
        };

        img.onerror = () => {
          // Fallback to secondary directory if needed
          img.src = getFallbackFramePath(index);
          img.onload = onFinish;
          img.onerror = onFinish;
        };
      });
    };

    // Load first frame immediately to eliminate white flash
    loadSingleImage(0).then((firstImg) => {
      if (isCancelled) return;
      imageElements[0] = firstImg;
      imagesRef.current = imageElements;
      handleResize();
      renderFrame(0);

      // Load remaining frames asynchronously
      const remainingPromises = [];
      for (let i = 1; i < TOTAL_HERO_FRAMES; i++) {
        remainingPromises.push(
          loadSingleImage(i).then((img) => {
            imageElements[i] = img;
          })
        );
      }

      Promise.all(remainingPromises).then(() => {
        if (!isCancelled) {
          imagesRef.current = imageElements;
          setIsLoaded(true);
        }
      });
    });

    window.addEventListener('resize', handleResize);

    return () => {
      isCancelled = true;
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize, renderFrame]);

  // Scroll event listener for scroll-driven scrub
  useEffect(() => {
    const handleScroll = () => {
      if (playMode !== 'scroll') return;
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollableDistance = rect.height - window.innerHeight;
      if (totalScrollableDistance <= 0) return;

      // Fraction of scroll progress through the 300vh container
      const progress = Math.min(Math.max(-rect.top / totalScrollableDistance, 0), 1);
      targetFrameRef.current = progress * (TOTAL_HERO_FRAMES - 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [playMode]);

  // Animation Loop: Handles both 60fps Lerp scrubbing and smooth Autoplay
  useEffect(() => {
    const FRAME_DURATION = 1000 / 30; // 30 FPS playback

    const animate = (timestamp: number) => {
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (playMode === 'autoplay' && isPlayingAuto) {
        accumulatorRef.current += delta;
        while (accumulatorRef.current >= FRAME_DURATION) {
          targetFrameRef.current = (targetFrameRef.current + 1) % TOTAL_HERO_FRAMES;
          accumulatorRef.current -= FRAME_DURATION;
        }
        currentFrameRef.current = targetFrameRef.current;
      } else {
        // High-precision lerp for silky smooth scroll-scrub
        const diff = targetFrameRef.current - currentFrameRef.current;
        if (Math.abs(diff) > 0.005) {
          currentFrameRef.current += diff * 0.16;
        } else {
          currentFrameRef.current = targetFrameRef.current;
        }
      }

      renderFrame(currentFrameRef.current);
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, [playMode, isPlayingAuto, renderFrame]);

  const progressPercent = Math.round((loadedCount / TOTAL_HERO_FRAMES) * 100);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#0B0C0E]">
      {/* Sticky Fullscreen Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Full-bleed Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Cinematic Vignette Overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(to top, #0B0C0E 6%, rgba(11,12,14,0.35) 50%, rgba(11,12,14,0.65) 100%)',
          }}
        />

        {/* Minimalist Loading Bar */}
        {!isLoaded && (
          <div className="absolute top-0 left-0 right-0 z-50">
            <div
              className="h-[3px] bg-gradient-to-r from-[#D4AF37] to-[#E8C86A] transition-all duration-150 ease-out shadow-[0_0_12px_rgba(212,175,55,0.8)]"
              style={{ width: `${progressPercent}%` }}
            />
            <div className="absolute top-3 right-6 text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] bg-black/60 px-2 py-0.5 rounded backdrop-blur">
              Loading Sequence {progressPercent}%
            </div>
          </div>
        )}

        {/* Floating Playback Mode Control Pill */}
        <div className="absolute top-24 right-6 z-40 flex items-center space-x-2">
          <div className="bg-[#131518]/80 backdrop-blur-md border border-white/10 rounded-full p-1 flex items-center shadow-2xl">
            <button
              onClick={() => setPlayMode('scroll')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all ${
                playMode === 'scroll'
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Scroll-Scrub</span>
            </button>

            <button
              onClick={() => {
                setPlayMode('autoplay');
                setIsPlayingAuto(true);
              }}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all ${
                playMode === 'autoplay'
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Repeat className="w-3.5 h-3.5" />
              <span>Auto-Play Loop</span>
            </button>

            {playMode === 'autoplay' && (
              <button
                onClick={() => setIsPlayingAuto(!isPlayingAuto)}
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-colors ml-1"
                aria-label={isPlayingAuto ? 'Pause playback' : 'Start playback'}
              >
                {isPlayingAuto ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              </button>
            )}
          </div>
        </div>

        {/* Spacer for Navbar */}
        <div className="h-24 pointer-events-none" />

        {/* Hero Overlay Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pb-8">
          <div className="max-w-3xl space-y-6">
            {/* Gold Eyebrow */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-black/50 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
              <span className="text-xs uppercase tracking-[0.28em] text-[#F5F5F0] font-medium">
                • EXCLUSIVELY LISTED • MONTEREY HORIZON
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-light leading-[1.05] tracking-tight">
              Where Luxury <br />
              <span className="italic font-normal text-[#D4AF37]">
                Meets the Ocean.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-neutral-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
              An extraordinary monolithic oceanfront sanctuary perched above the Pacific. Seamlessly unifying cantilevered glass architecture, infinity horizons, and timeless travertine finishes.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#concept"
                className="px-8 py-4 rounded-full bg-[#D4AF37] text-black font-semibold text-xs tracking-widest uppercase hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore the Property</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#acquisition"
                className="px-7 py-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 hover:border-[#D4AF37] text-white font-medium text-xs tracking-widest uppercase transition-all duration-300 flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>Book a Private Tour</span>
              </a>
            </div>

            {/* Bottom 4-Column Spec Strip */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white">
              <div>
                <div className="text-[10px] tracking-widest uppercase text-neutral-400">Accommodations</div>
                <div className="text-lg font-serif tracking-wide text-[#F5F5F0]">6 Grand Suites</div>
              </div>
              <div>
                <div className="text-[10px] tracking-widest uppercase text-neutral-400">Baths</div>
                <div className="text-lg font-serif tracking-wide text-[#F5F5F0]">9 Spa Baths</div>
              </div>
              <div>
                <div className="text-[10px] tracking-widest uppercase text-neutral-400">Living Space</div>
                <div className="text-lg font-serif tracking-wide text-[#F5F5F0]">14,200 SQ FT</div>
              </div>
              <div>
                <div className="text-[10px] tracking-widest uppercase text-neutral-400">Estate Grounds</div>
                <div className="text-lg font-serif tracking-wide text-[#F5F5F0]">1.8 Coastal Acres</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
