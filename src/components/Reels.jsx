"use client";

import Image from 'next/image';
import { useState, useRef, useEffect, useCallback } from 'react';

const reels = [
  { 
    id: 1, 
    image: "/assets/Category_Tile-2.jpg", 
    product: "Skin Tint SPF 40", 
    price: "$48", 
    thumb: "/assets/Category_Tile-2.jpg" 
  },
  { 
    id: 2, 
    image: "/assets/455590ed7a0443be87f8e6bce00b679d.thumbnail.0000000000.jpg", 
    product: "Skin Rewind Complexion Stick", 
    price: "$50", 
    thumb: "/assets/ILIA_SBSC_1N_TWILL_OPEN_GREY.jpg" 
  },
  { 
    id: 3, 
    image: "/assets/9b6789e8beb048ceba2802145f8a9d0e.thumbnail.0000000000.jpg", 
    product: "Super Serum Skin Tint SPF 40", 
    price: "$48", 
    thumb: "/assets/ILIA_Silo_Shot_Award_Seals_Final-grey-ST5.jpg" 
  },
  { 
    id: 4, 
    image: "/assets/Feature_Tile-2.jpg", 
    product: "Lip Sketch Hydrating Crayon", 
    price: "$27", 
    thumb: "/assets/ILIA_2026_TLE_Trace_Open_Grey.jpg" 
  },
  { 
    id: 5, 
    image: "/assets/Category_Tile-4.jpg", 
    product: "Limitless Lash Mascara", 
    price: "$29", 
    thumb: "/assets/Category_Tile-4.jpg" 
  },
  { 
    id: 6, 
    image: "/assets/Cornerstone_5c7be23d-9d5b-4a68-8864-c38700601c81.jpg", 
    product: "Eye Stylus Shadow Stick", 
    price: "$33", 
    thumb: "/assets/ILIA_2026_TLE_Trace_Open_Grey.jpg" 
  },
  { 
    id: 7, 
    image: "/assets/Category_Tile-3.jpg", 
    product: "Soft Focus Blurring Powder", 
    price: "$36", 
    thumb: "/assets/ILIA_2026_SOFT-FOCUS-POWDER_OPEN-SPONGE_SHADE-1_GREY.jpg" 
  }
];

// Replicate array to enable seamless infinite horizontal looping
const COPIES = 5;
const extendedReels = Array(COPIES).fill(reels).flat();
const N = reels.length;
const INITIAL_INDEX = N * 2 + 2; // Super Serum Skin Tint SPF 40 in middle block

export default function Reels() {
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const [cardMetrics, setCardMetrics] = useState({ width: 270, gap: 24, height: 530 });

  const trackRef = useRef(null);
  const dragStartXRef = useRef(0);
  const hasMovedRef = useRef(false);

  // Responsive card sizing
  useEffect(() => {
    const updateMetrics = () => {
      if (typeof window === 'undefined') return;
      const w = window.innerWidth;
      if (w < 640) {
        // Mobile: 1 main active card dominant with neighbor peeks
        const cardW = Math.min(280, Math.max(240, Math.round(w * 0.72)));
        setCardMetrics({ width: cardW, gap: 14, height: 460 });
      } else if (w < 1024) {
        // Tablet: approx 3 cards visible
        setCardMetrics({ width: 230, gap: 18, height: 490 });
      } else {
        // Desktop: approx 5 cards visible across viewport
        setCardMetrics({ width: 270, gap: 24, height: 530 });
      }
    };

    updateMetrics();
    window.addEventListener('resize', updateMetrics);
    return () => window.removeEventListener('resize', updateMetrics);
  }, []);

  const slotWidth = cardMetrics.width + cardMetrics.gap;

  // Auto-play at slow luxury pace
  useEffect(() => {
    if (isDragging || isHovered || isAutoPlayPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, [isDragging, isHovered, isAutoPlayPaused]);

  // Seamless infinite loop boundary adjustment
  const handleTransitionEnd = useCallback((e) => {
    if (e.target !== trackRef.current) return;

    if (currentIndex >= N * 3) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - N);
    } else if (currentIndex < N * 2) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + N);
    }
  }, [currentIndex]);

  // Re-enable smooth transition after silent jump
  useEffect(() => {
    if (!isTransitioning) {
      const frame = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [isTransitioning]);

  // Pointer / Drag interactions
  const handlePointerDown = (clientX) => {
    dragStartXRef.current = clientX;
    hasMovedRef.current = false;
    setIsDragging(true);
    setDragOffset(0);
  };

  const handlePointerMove = (clientX) => {
    if (!isDragging) return;
    const delta = clientX - dragStartXRef.current;
    if (Math.abs(delta) > 5) {
      hasMovedRef.current = true;
    }
    setDragOffset(delta);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = Math.max(50, cardMetrics.width * 0.18);
    if (dragOffset < -threshold) {
      setCurrentIndex((prev) => prev + 1);
    } else if (dragOffset > threshold) {
      setCurrentIndex((prev) => prev - 1);
    }
    setDragOffset(0);
  };

  const handleCardClick = (idx) => {
    if (hasMovedRef.current) return;
    if (idx !== currentIndex) {
      setCurrentIndex(idx);
    }
  };

  const translateX = `calc(50% - ${currentIndex * slotWidth + cardMetrics.width / 2}px + ${dragOffset}px)`;

  const trackStyle = {
    transform: `translateX(${translateX})`,
    transition: isTransitioning && !isDragging
      ? 'transform 700ms cubic-bezier(0.25, 1, 0.5, 1)'
      : 'none',
  };

  return (
    <section 
      className="py-16 md:py-24 w-full overflow-hidden bg-white select-none touch-pan-y"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        handlePointerUp();
        setIsHovered(false);
      }}
    >
      <div 
        className="w-full relative flex items-center justify-center overflow-visible"
        style={{ height: `${cardMetrics.height + 80}px` }}
        onMouseDown={(e) => handlePointerDown(e.clientX)}
        onMouseMove={(e) => handlePointerMove(e.clientX)}
        onMouseUp={handlePointerUp}
        onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
        onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
        onTouchEnd={handlePointerUp}
      >
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          style={trackStyle}
          className={`flex items-center will-change-transform ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        >
          {extendedReels.map((reel, idx) => {
            const isActive = idx === currentIndex;
            const distance = Math.abs(idx - currentIndex);
            const isFar = distance > 5;

            return (
              <div
                key={`${reel.id}-${idx}`}
                onClick={() => handleCardClick(idx)}
                style={{
                  width: `${cardMetrics.width}px`,
                  height: `${cardMetrics.height}px`,
                  flexShrink: 0,
                  marginRight: `${cardMetrics.gap}px`,
                }}
                className={`relative rounded-2xl overflow-hidden cursor-pointer select-none transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                  ${isActive
                    ? 'scale-100 sm:scale-[1.08] lg:scale-[1.12] z-30 opacity-100 shadow-[0_20px_45px_rgba(0,0,0,0.28)] ring-1 ring-black/5'
                    : 'scale-[0.88] sm:scale-[0.90] z-10 opacity-80 hover:opacity-95 hover:scale-[0.92] shadow-md'
                  }
                `}
              >
                {/* Background UGC Image */}
                {!isFar && (
                  <Image
                    src={reel.image}
                    alt={reel.product}
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 240px, 320px"
                    priority={distance <= 1}
                    draggable={false}
                    className="object-cover pointer-events-none"
                  />
                )}

                {/* Gradient Overlay for bottom text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10 pointer-events-none"></div>

                {/* Controls (Sound & Pause) at Top Right - Active Card Only */}
                {isActive && (
                  <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                      }}
                      className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition cursor-pointer shadow-sm"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="1" y1="1" x2="23" y2="23"></line>
                          <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
                          <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
                          <line x1="12" y1="19" x2="12" y2="23"></line>
                          <line x1="8" y1="23" x2="16" y2="23"></line>
                        </svg>
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                        </svg>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsAutoPlayPaused(!isAutoPlayPaused);
                      }}
                      className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition cursor-pointer shadow-sm"
                      aria-label={isAutoPlayPaused ? "Play" : "Pause"}
                    >
                      {isAutoPlayPaused ? (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="6 4 20 12 6 20 6 4"></polygon>
                        </svg>
                      ) : (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                          <rect x="14" y="4" width="4" height="16" rx="1"></rect>
                        </svg>
                      )}
                    </button>
                  </div>
                )}

                {/* Bottom Product Info Overlay */}
                <div className="absolute bottom-4 left-3 right-3 sm:left-4 sm:right-4 flex items-center gap-2.5 sm:gap-3 z-20 text-white">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-md overflow-hidden flex-shrink-0 relative shadow-md p-0.5">
                    <Image
                      src={reel.thumb}
                      alt={reel.product}
                      fill
                      sizes="44px"
                      draggable={false}
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] sm:text-[12px] font-bold leading-tight truncate text-white drop-shadow-sm">
                      {reel.product}
                    </p>
                    <p className="text-[11px] sm:text-[12px] font-semibold text-white/90 mt-0.5">
                      {reel.price}
                    </p>
                  </div>

                  {isActive ? (
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/80">
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                      <button
                        type="button"
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/60 flex items-center justify-center hover:bg-white hover:text-black transition-all text-base font-light backdrop-blur-sm shadow-sm"
                        aria-label="Add product"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 rounded-full border border-white/60 flex items-center justify-center hover:bg-white hover:text-black transition-all text-base font-light backdrop-blur-sm shadow-sm"
                      aria-label="Select product"
                    >
                      +
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
