"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const categories = [
  { id: 1, name: "Bestsellers", image: "/assets/Category_Tile-1.jpg" },
  { id: 2, name: "Complexion", image: "/assets/Category_Tile-2.jpg" },
  { id: 3, name: "Lip + Cheek", image: "/assets/Category_Tile-3.jpg" },
  { id: 4, name: "Skincare", image: "/assets/Category_Tile-4.jpg" },
  { id: 5, name: "Eye", image: "/assets/Feature_Tile-2.jpg" },
  { id: 6, name: "Sets", image: "/assets/Feature_Tile-4.jpg" }
];

export default function CategoryGrid() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 px-6 max-w-[1600px] mx-auto relative group">
      <h2 className="text-4xl font-light text-center mb-10 text-gray-900">Clean Makeup + Skincare Essentials</h2>
      
      {/* Carousel Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50 hidden lg:flex"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>

        {/* Scrollable Area */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar"
        >
          {categories.map(category => (
            <Link 
              href={`/collections/${category.name.toLowerCase().replace(/ \+ /g, '-').replace(/ /g, '-')}`} 
              key={category.id} 
              className="min-w-[200px] w-[60vw] sm:w-[calc(33.333%-16px)] lg:w-[calc(16.666%-16px)] flex-shrink-0 snap-start flex flex-col group/cat cursor-pointer"
            >
              <div className="w-full aspect-[4/5] relative bg-[#f5f5f5] overflow-hidden rounded-sm group-hover/cat:opacity-95 transition-opacity">
                {/* Overlay Text */}
                <div className="absolute top-4 left-4 z-10">
                  <h3 className="text-sm font-bold text-white group-hover/cat:underline shadow-sm">{category.name}</h3>
                </div>
                {/* Fallback gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent h-20 z-0"></div>
                <Image 
                  src={category.image} 
                  alt={category.name} 
                  fill 
                  className="object-cover group-hover/cat:scale-105 transition-transform duration-700 z-[-1]"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50 hidden lg:flex"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </section>
  );
}
