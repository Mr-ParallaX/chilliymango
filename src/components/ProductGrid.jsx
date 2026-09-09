"use client";

import Image from 'next/image';
import { useRef, useState } from 'react';
import Link from 'next/link';

const tabs = [
  "BESTSELLERS", "NEW ARRIVALS", "COMPLEXION", "EYE", "LIP + CHEEK", "SKINCARE", "TOOLS"
];

const products = [
  { 
    id: 1, 
    name: "Super Serum Skin Tint SPF 40", 
    desc: "Skincare-powered makeup in a bottle.",
    badges: ["1% FOR THE PLANET", "ALLURE WINNER"],
    rating: 5,
    shades: 30, 
    image: "/assets/ILIA_2026_SUN_SERUM_CLOSED_US_GREY-1795b0b2d8dda8.jpg",
    buttonText: "MATCH MY SHADE"
  },
  { 
    id: 2, 
    name: "Limitless Lash Mascara", 
    desc: "Lifts, lengthens, separates.", 
    badges: ["ALLURE WINNER", "GLAMOUR WINNER"],
    rating: 5,
    image: "/assets/ILIA_2026_LIMITLESS-LASH_GREY-8152e9f0c2df8b.jpg",
    buttonText: "SHOP MASCARA"
  },
  { 
    id: 3, 
    name: "Overglaze Hydrating Lip Gloss", 
    desc: "Clinical hydration + 24-hr plumping.", 
    rating: 5,
    image: "/assets/ILIA_2026_OVERGLAZE_LIPGLOSS_OPEN_MOTIF_GREY_469160fa-5dab-4d70-a02a-7b70d5ad2f11.jpg",
    buttonText: "SHOP OVERGLAZE"
  }
];

export default function ProductGrid() {
  const scrollRef = useRef(null);
  const [activeTab, setActiveTab] = useState("BESTSELLERS");

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-6 max-w-[1600px] mx-auto relative group">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-4xl font-light mb-8 text-center text-gray-900">Curated Favorites</h2>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 border-b border-gray-200 pb-2 max-w-4xl mx-auto w-full">
          {tabs.map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[10px] tracking-widest-ilia font-bold transition-colors ${activeTab === tab ? 'text-gray-900 border-b-2 border-gray-900 pb-2 -mb-[10px]' : 'text-gray-500 hover:text-gray-900'}`}
            >
              {tab}
            </button>
          ))}
          <div className="text-[10px] tracking-widest-ilia font-bold text-gray-900 ml-auto border-b border-gray-900 pb-[2px] cursor-pointer hover:text-gray-500">
            Shop All &rarr;
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-0 top-[40%] transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50 hidden lg:flex"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>

        {/* Scrollable Area */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar"
        >
          {products.map(product => (
            <div key={product.id} className="min-w-[280px] w-[85vw] sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] flex-shrink-0 snap-start flex flex-col group/card cursor-pointer">
              
              <div className="relative aspect-[4/5] bg-[#f5f5f5] mb-4 overflow-hidden rounded-sm">
                {/* Badges */}
                {product.badges && product.badges.length > 0 && (
                  <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
                    {product.badges.map((badge, idx) => (
                      <span key={idx} className="bg-black text-white text-[8px] font-bold tracking-widest-ilia px-2 py-1 uppercase text-center rounded-full leading-none max-w-[50px]">
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
                
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover group-hover/card:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="flex flex-col flex-grow">
                {/* Rating */}
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" className="text-black"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  ))}
                </div>
                
                <h3 className="font-bold text-sm leading-tight text-gray-900 group-hover/card:underline mb-1">{product.name}</h3>
                <p className="text-xs text-gray-600 mb-4">{product.desc}</p>
                
                <div className="mt-auto">
                  <button className="w-full border border-gray-300 text-gray-900 font-bold text-[10px] tracking-widest-ilia uppercase py-3 hover:bg-gray-50 transition">
                    {product.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Promo Tile */}
          <div className="min-w-[280px] w-[85vw] sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] flex-shrink-0 snap-start flex flex-col group/promo cursor-pointer relative overflow-hidden bg-[#735e5a] text-white">
            <Image 
              src="/assets/Product_Grid-1_44e4d974-5ba3-48c9-945a-c12600f59f57.jpg" 
              alt="Promo" 
              fill 
              className="object-cover opacity-80 group-hover/promo:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-xl font-light mb-2 flex items-center group-hover/promo:underline">
                Mini Gift, Big Color <span className="ml-2">&rarr;</span>
              </h3>
              <p className="text-sm font-light">Receive a free travel size with $75+</p>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-0 top-[40%] transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50 hidden lg:flex"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </section>
  );
}
