"use client";

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const reels = [
  { id: 1, image: "/assets/Category_Tile-2.jpg", product: "Skin Tint SPF 40", price: "$48", thumb: "/assets/Category_Tile-2.jpg" },
  { id: 2, image: "/assets/455590ed7a0443be87f8e6bce00b679d.thumbnail.0000000000.jpg", product: "Skin Rewind Complexion Stick", price: "$50", thumb: "/assets/Category_Tile-1.jpg" },
  { id: 3, image: "/assets/9b6789e8beb048ceba2802145f8a9d0e.thumbnail.0000000000.jpg", product: "Multi-Stick", price: "$36", thumb: "/assets/ILIA_2026_SOFT-FOCUS-POWDER_OPEN-SPONGE_SHADE-1_GREY.jpg" },
  { id: 4, image: "/assets/Feature_Tile-2.jpg", product: "Lip Sketch Hydrating Crayon", price: "$27", thumb: "/assets/Feature_Tile-2.jpg" },
  { id: 5, image: "/assets/Category_Tile-4.jpg", product: "Super Serum", price: "$48", thumb: "/assets/Category_Tile-4.jpg" },
];

export default function Reels() {
  // By default, make the middle item active (e.g. index 2)
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="py-20 w-full overflow-hidden bg-white">
      <div className="max-w-[1200px] mx-auto flex justify-center items-center h-[600px] gap-4">
        {reels.map((reel, idx) => {
          const isActive = idx === activeIndex;
          
          return (
            <div 
              key={reel.id} 
              onClick={() => setActiveIndex(idx)}
              className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out shadow-lg
                ${isActive 
                  ? 'w-[320px] h-[550px] z-20 scale-100' 
                  : 'w-[260px] h-[450px] z-10 scale-95 opacity-80 hover:opacity-100'
                }
              `}
            >
              <Image 
                src={reel.image} 
                alt={reel.product} 
                fill 
                className="object-cover" 
              />
              {/* Gradient Overlay for bottom text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              
              {/* Play/Sound Icons Top Right (Only on Active) */}
              {isActive && (
                <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                  <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white backdrop-blur-sm border border-white/20 hover:bg-black/60 cursor-pointer">
                    {/* Mute Icon */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white backdrop-blur-sm border border-white/20 hover:bg-black/60 cursor-pointer">
                    {/* Pause Icon */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                  </div>
                </div>
              )}

              {/* Bottom Product Info */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 z-20 text-white">
                <div className="w-10 h-10 bg-white rounded-sm overflow-hidden flex-shrink-0 relative">
                   <Image src={reel.thumb} alt={reel.product} fill className="object-cover p-1" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold leading-tight truncate">{reel.product}</p>
                  <p className="text-xs font-bold">{reel.price}</p>
                </div>
                <button className="w-8 h-8 flex-shrink-0 rounded-full border border-white/50 flex items-center justify-center hover:bg-white hover:text-black transition text-lg font-light">
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
