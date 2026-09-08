"use client";

import Image from 'next/image';
import { useRef } from 'react';

const products = [
  { id: 1, name: "Super Serum Skin Tint SPF 40", desc: "Light coverage, dewy finish", price: "$48", shades: 30, image: "/assets/ILIA_2026_SUN_SERUM_CLOSED_US_GREY-1795b0b2d8dda8.jpg" },
  { id: 2, name: "Limitless Lash Mascara", desc: "Award-winning, lengthening", price: "$28", image: "/assets/ILIA_2026_LIMITLESS-LASH_GREY-8152e9f0c2df8b.jpg" },
  { id: 3, name: "Multi-Stick", desc: "Buildable wash of color", price: "$36", shades: 12, image: "/assets/ILIA_2026_MULTI_STICK_AT_LAST_CLOSED_GREY-c88f28d7a126ed.jpg" },
  { id: 4, name: "Skin Rewind Complexion Stick", desc: "Medium coverage, natural finish", price: "$48", shades: 42, badge: "NEW", image: "/assets/ILIA_2026_SKIN_REWIND_COMPLEXION_STICK_13O_HICKORY_CLOSED_GREY_b51e0ca6-e63b-4682-bb3c-dbfbcc7e82fc.jpg" },
  { id: 5, name: "True Skin Serum Concealer", desc: "Medium coverage, radiant finish", price: "$32", shades: 20, image: "/assets/ILIA_2026_TRUE_SKIN_CONCEALER_YUCCA_SC2_CLOSED_GREY_a10f890e-b7d1-41fc-bb29-e85d956bdc39.jpg" },
  { id: 6, name: "Balmy Tint Hydrating Lip Balm", desc: "Sheer, buildable color", price: "$28", shades: 8, image: "/assets/ILIA_2026_BALMY_TINT_HEARTBEATS_CLOSED_GREY.jpg" }
];

export default function ProductGrid() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-6 max-w-[1600px] mx-auto relative group">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-light">Curated Favorites</h2>
        <a href="#" className="text-xs font-bold tracking-widest-ilia underline hover:text-gray-500 transition hidden sm:block">SHOP BEST SELLERS</a>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-md z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50 border border-gray-100 hidden lg:flex"
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
              
              <div className="relative aspect-square bg-[#f5f5f5] mb-4 overflow-hidden rounded-sm">
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-white text-[9px] font-bold tracking-widest-ilia px-2 py-1 z-10">{product.badge}</span>
                )}
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-contain p-8 group-hover/card:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-1 gap-2">
                  <h3 className="font-bold text-sm leading-tight text-gray-900 group-hover/card:underline">{product.name}</h3>
                  <span className="font-bold text-sm text-gray-900">{product.price}</span>
                </div>
                <p className="text-sm text-gray-500 mb-2 leading-tight">{product.desc}</p>
                {product.shades && (
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest-ilia mt-auto pt-2">{product.shades} SHADES</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-md z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50 border border-gray-100 hidden lg:flex"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
      
      <a href="#" className="text-xs font-bold tracking-widest-ilia underline hover:text-gray-500 transition sm:hidden mt-4 block text-center">SHOP BEST SELLERS</a>
    </section>
  );
}
