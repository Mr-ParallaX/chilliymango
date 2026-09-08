import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] flex items-center bg-[#8c8a85]">
      {/* Background Image - Assuming Hero_Campaign represents the lip glosses or we use a solid fallback color that matches */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/Hero_Campaign_a741ff1f-e381-491f-bc33-f0f1d23622f0.jpg" 
          alt="ILIA Beauty Campaign" 
          fill 
          className="object-cover object-right lg:object-center"
          priority
        />
        {/* Dark overlay for text readability if the image doesn't perfectly match the screenshot's gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7a7873] via-[#7a7873]/80 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 lg:px-12">
        <div className="max-w-xl text-white">
          <p className="text-xs font-bold tracking-widest-ilia uppercase mb-4">
            Overglaze Hydrating Lip Gloss
          </p>
          <h1 className="text-5xl lg:text-7xl font-sans font-light tracking-tight mb-4">
            Two. New. Shades.
          </h1>
          <p className="text-base lg:text-lg mb-8 leading-relaxed font-light max-w-md">
            Meet soft berry Gallery + honey brown Motif—available only at ChillyMango.com.
          </p>
          <Link 
            href="/collections/all" 
            className="inline-block bg-white text-gray-900 font-bold text-xs tracking-widest-ilia uppercase py-4 px-8 hover:bg-gray-100 transition"
          >
            Shop Overglaze
          </Link>
        </div>
      </div>
    </section>
  );
}
