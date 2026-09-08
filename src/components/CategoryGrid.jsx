"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const categories = [
  { id: 1, name: "COMPLEXION", image: "/assets/Category_Tile-2.jpg" },
  { id: 2, name: "EYE", image: "/assets/Feature_Tile-2.jpg" },
  { id: 3, name: "LIP", image: "/assets/Category_Tile-3.jpg" },
  { id: 4, name: "SKINCARE", image: "/assets/Category_Tile-4.jpg" },
  { id: 5, name: "BRUSHES", image: "/assets/Feature_Tile_17fda082-095f-464d-aba8-48eee1bb30e9.jpg" },
  { id: 6, name: "BUNDLES", image: "/assets/Feature_Tile-4.jpg" }
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
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar"
        >
          {categories.map(category => (
            <Link 
              href={`/collections/${category.name.toLowerCase()}`} 
              key={category.id} 
              className="min-w-[200px] w-[60vw] sm:w-[calc(33.333%-16px)] lg:w-[calc(16.666%-20px)] flex-shrink-0 snap-start flex flex-col items-center group/cat cursor-pointer"
            >
              <div className="w-full aspect-[4/5] relative bg-[#f5f5f5] mb-4 overflow-hidden rounded-sm">
                <Image 
                  src={category.image} 
                  alt={category.name} 
                  fill 
                  className="object-cover group-hover/cat:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-[11px] font-bold tracking-widest-ilia text-gray-900 group-hover/cat:underline">{category.name}</h3>
            </Link>
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
    </section>
  );
}
