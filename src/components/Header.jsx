"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import CartDrawer from './CartDrawer';

const navItems = [
  'SHOP ALL', 'BESTSELLERS', 'COMPLEXION', 'EYE', 'LIP + CHEEK', 'SKINCARE', 'SETS', 'TOOLS', 'REWARDS'
];

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="w-full bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100 transition-all duration-300" onMouseLeave={() => setHoveredItem(null)}>
        {/* Primary Announcement Bar - Hides on scroll */}
        <div className={`bg-[#ab7568] text-white text-[10px] tracking-widest-ilia font-bold text-center flex items-center justify-center cursor-pointer hover:bg-opacity-90 transition-all duration-300 origin-top overflow-hidden relative z-20 ${isScrolled ? 'h-0 opacity-0 py-0' : 'h-8 py-2 opacity-100'}`}>
          MINI EYE STYLUS WITH $75+ AND MORE <span className="ml-2">→</span>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 py-4 flex flex-col gap-4 relative z-20 bg-white">
          {/* Top Row: Hamburger, Logo and Right Nav */}
          <div className="flex justify-between items-center relative">
            
            {/* Mobile Hamburger */}
            <div className="flex-1 lg:hidden flex justify-start">
              <button onClick={() => setIsMobileMenuOpen(true)} className="hover:text-gray-500 transition p-2 -ml-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Desktop spacer */}
            <div className="hidden lg:flex flex-1"></div>
            
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 w-[180px] h-[40px]">
              <Image src="/assets/logo.png" alt="ChillyMango" fill className="object-contain" />
            </Link>
            
            <div className="flex-1 flex justify-end items-center gap-4 lg:gap-6 text-[10px] tracking-widest font-bold text-gray-800">
              <Link href="/account" className="hidden lg:block hover:text-gray-500 transition">SIGN IN</Link>
              <div className="hidden lg:block cursor-pointer hover:text-gray-500 transition">$US</div>
              
              <button className="hover:text-gray-500 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
              
              {/* Cart Icon -> Opens Drawer */}
              <button onClick={() => setIsCartOpen(true)} className="flex items-center gap-1 hover:text-gray-500 transition relative p-2 -mr-2">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span className="absolute top-[12px] left-1/2 transform -translate-x-1/2 text-[9px] font-bold">0</span>
              </button>
            </div>
          </div>

          {/* Bottom Row: Main Navigation (Desktop Only) */}
          <nav className="hidden lg:flex justify-between items-center w-full px-2">
            {navItems.map((item) => (
              <div 
                key={item}
                onMouseEnter={() => setHoveredItem(item)}
                className="py-2 cursor-pointer border-b-2 border-transparent hover:border-gray-900 transition-colors"
              >
                <Link 
                  href={`/collections/${item.toLowerCase().replace(/ /g, '-')}`} 
                  className="text-[11px] tracking-widest-ilia font-bold text-gray-800 hover:text-gray-500 transition whitespace-nowrap"
                >
                  {item}
                </Link>
              </div>
            ))}
          </nav>
        </div>

        {/* Secondary Red Banner (Visible when scrolled or below nav) */}
        <div className="w-full bg-[#8b2b32] text-white text-[10px] tracking-widest-ilia font-bold text-center py-2 flex items-center justify-center relative z-10">
          TWO NEW SHADES OF OVERGLAZE HYDRATING LIP GLOSS | <a href="#" className="underline ml-1 hover:text-gray-200">SHOP NOW</a>
        </div>

        {/* Mega Menu Dropdown (Desktop Only) */}
        <div className="hidden lg:block">
          {hoveredItem === 'COMPLEXION' && (
            <div className="absolute top-full left-0 w-full bg-white shadow-[0_10px_20px_rgba(0,0,0,0.05)] z-10 transition-all duration-300 origin-top animate-in fade-in slide-in-from-top-2 border-t border-gray-100">
              <div className="max-w-[1200px] mx-auto px-6 py-10 flex gap-20">
                {/* Image Block */}
                <div className="w-[300px] aspect-square relative bg-[#f5f5f5]">
                   <Image src="/assets/Category_Tile-2.jpg" alt="Complexion" fill className="object-cover" />
                </div>

                {/* Links Block 1: Favorites */}
                <div className="flex flex-col gap-5">
                  <h4 className="text-[11px] tracking-widest-ilia font-bold text-gray-500 mb-1">FAVORITES</h4>
                  <Link href="/products/super-serum-skin-tint" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">SUPER SERUM SKIN TINT SPF 40</Link>
                  <Link href="/products/limitless-lash-mascara" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">LIMITLESS LASH MASCARA</Link>
                  <Link href="/products/eye-stylus-shadow-stick" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">EYE STYLUS SHADOW STICK</Link>
                  <Link href="/products/multi-stick" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">MULTI-STICK</Link>
                  <Link href="/products/lip-sketch-hydrating-crayon" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">LIP SKETCH HYDRATING CRAYON</Link>
                </div>

                {/* Links Block 2: Collections */}
                <div className="flex flex-col gap-5">
                  <h4 className="text-[11px] tracking-widest-ilia font-bold text-gray-500 mb-1">COLLECTIONS</h4>
                  <Link href="/collections/all-bestsellers" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">ALL BESTSELLERS</Link>
                </div>
              </div>
            </div>
          )}

          {hoveredItem === 'EYE' && (
            <div className="absolute top-full left-0 w-full bg-white shadow-[0_10px_20px_rgba(0,0,0,0.05)] z-10 transition-all duration-300 origin-top animate-in fade-in slide-in-from-top-2 border-t border-gray-100">
              <div className="max-w-[1200px] mx-auto px-6 py-10 flex gap-20">
                {/* Image Block */}
                <div className="w-[300px] aspect-square relative bg-[#f5f5f5]">
                   <Image src="/assets/Feature_Tile-2.jpg" alt="Eye" fill className="object-cover" />
                </div>

                {/* Links Block 1: Favorites */}
                <div className="flex flex-col gap-5">
                  <h4 className="text-[11px] tracking-widest-ilia font-bold text-gray-500 mb-1">FAVORITES</h4>
                  <Link href="/products/limitless-lash-mascara" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">LIMITLESS LASH MASCARA</Link>
                  <Link href="/products/thru-line-eyeliner" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">NEW! THRU LINE WATERPROOF EYELINER</Link>
                  <Link href="/products/eye-stylus-shadow-stick" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">EYE STYLUS SHADOW STICK</Link>
                  <Link href="/products/fullest-volumizing-mascara" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">FULLEST VOLUMIZING MASCARA</Link>
                </div>

                {/* Links Block 2: Collections */}
                <div className="flex flex-col gap-5">
                  <h4 className="text-[11px] tracking-widest-ilia font-bold text-gray-500 mb-1">COLLECTIONS</h4>
                  <Link href="/collections/mascara" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">MASCARA</Link>
                  <Link href="/collections/eyeshadow" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">EYESHADOW</Link>
                  <Link href="/collections/eyeliner" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">EYELINER</Link>
                  <Link href="/collections/eyebrows" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">EYEBROWS</Link>
                  <Link href="/collections/all-eye" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">ALL EYE</Link>
                </div>
              </div>
            </div>
          )}
          {hoveredItem === 'LIP + CHEEK' && (
            <div className="absolute top-full left-0 w-full bg-white shadow-[0_10px_20px_rgba(0,0,0,0.05)] z-10 transition-all duration-300 origin-top animate-in fade-in slide-in-from-top-2 border-t border-gray-100">
              <div className="max-w-[1200px] mx-auto px-6 py-10 flex gap-20">
                {/* Image Block */}
                <div className="w-[300px] aspect-square relative bg-[#f5f5f5]">
                   <Image src="/assets/Category_Tile-3.jpg" alt="Lip and Cheek" fill className="object-cover" />
                </div>

                {/* Links Block 1: Favorites */}
                <div className="flex flex-col gap-5">
                  <h4 className="text-[11px] tracking-widest-ilia font-bold text-gray-500 mb-1">FAVORITES</h4>
                  <Link href="/products/multi-stick" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">MULTI-STICK</Link>
                  <Link href="/products/lip-sketch" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">LIP SKETCH HYDRATING CRAYON</Link>
                  <Link href="/products/overglaze" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">NEW! OVERGLAZE HYDRATING LIP GLOSS</Link>
                  <Link href="/products/soft-focus" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">SOFT FOCUS BLURRING BLUSH</Link>
                </div>

                {/* Links Block 2: Collections */}
                <div className="flex flex-col gap-5">
                  <h4 className="text-[11px] tracking-widest-ilia font-bold text-gray-500 mb-1">COLLECTIONS</h4>
                  <Link href="/collections/lip" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">LIP</Link>
                  <Link href="/collections/cheek" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">CHEEK</Link>
                  <Link href="/collections/all-lip-cheek" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">ALL LIP + CHEEK</Link>
                </div>
              </div>
            </div>
          )}

          {hoveredItem === 'SKINCARE' && (
            <div className="absolute top-full left-0 w-full bg-white shadow-[0_10px_20px_rgba(0,0,0,0.05)] z-10 transition-all duration-300 origin-top animate-in fade-in slide-in-from-top-2 border-t border-gray-100">
              <div className="max-w-[1200px] mx-auto px-6 py-10 flex gap-20">
                {/* Image Block */}
                <div className="w-[300px] aspect-square relative bg-[#f5f5f5]">
                   <Image src="/assets/Category_Tile-4.jpg" alt="Skincare" fill className="object-cover" />
                </div>

                {/* Links Block 1: Favorites */}
                <div className="flex flex-col gap-5">
                  <h4 className="text-[11px] tracking-widest-ilia font-bold text-gray-500 mb-1">FAVORITES</h4>
                  <Link href="/products/sun-serum" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">NEW! SUN SERUM MINERAL SUNSCREEN SPF 50</Link>
                  <Link href="/products/base-face-milk" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">THE BASE FACE MILK</Link>
                  <Link href="/products/barrier-build" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">BARRIER BUILD SKIN PROTECTANT CREAM</Link>
                  <Link href="/products/bright-start" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">BRIGHT START RETINOL ALTERNATIVE EYE CREAM</Link>
                </div>

                {/* Links Block 2: Collections */}
                <div className="flex flex-col gap-5">
                  <h4 className="text-[11px] tracking-widest-ilia font-bold text-gray-500 mb-1">COLLECTIONS</h4>
                  <Link href="/collections/face-care" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">FACE CARE</Link>
                  <Link href="/collections/lip-care" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">LIP CARE</Link>
                  <Link href="/collections/all-skincare" className="text-xs tracking-widest-ilia font-bold text-gray-900 hover:text-gray-500 transition">ALL SKINCARE</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden flex">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          {/* Drawer Content */}
          <div className="relative w-[85%] max-w-sm h-full bg-white shadow-2xl animate-in slide-in-from-left duration-300 flex flex-col overflow-y-auto">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <div className="relative w-[120px] h-[30px]">
                <Image src="/assets/logo.png" alt="ChillyMango" fill className="object-contain" />
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-500 hover:text-gray-900">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div className="flex flex-col p-6 gap-6">
              {navItems.map((item) => (
                <Link 
                  key={item}
                  href={`/collections/${item.toLowerCase().replace(/ /g, '-')}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm tracking-widest-ilia font-bold text-gray-900 border-b border-gray-100 pb-4"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="mt-auto p-6 bg-gray-50 border-t border-gray-200 flex flex-col gap-4 text-xs font-bold tracking-widest-ilia">
              <Link href="/account" onClick={() => setIsMobileMenuOpen(false)}>SIGN IN</Link>
              <div>$US</div>
            </div>
          </div>
        </div>
      )}

      {/* Global Cart Drawer Component */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
