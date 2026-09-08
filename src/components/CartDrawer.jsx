"use client";

import Link from 'next/link';

export default function CartDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Drawer */}
      <div className="relative w-full max-w-[420px] h-full bg-white shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white z-10">
          <h2 className="text-xl font-light tracking-tight text-gray-900">Your Bag</h2>
          <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-900 transition">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        {/* Empty State */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center justify-center text-center">
          <p className="text-gray-500 mb-8 font-light text-sm">Your bag is currently empty.</p>
          <Link href="/collections/all" onClick={onClose} className="w-full bg-gray-900 text-white text-xs tracking-widest-ilia font-bold uppercase py-5 hover:bg-gray-800 transition block text-center">
            Shop Best Sellers
          </Link>
        </div>
      </div>
    </div>
  );
}
