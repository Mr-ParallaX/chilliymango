import Image from 'next/image';
import Link from 'next/link';

export default function ArtOfTheEye() {
  return (
    <section className="relative w-full h-[600px] lg:h-[800px] flex items-center bg-[#a89083]">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/Cornerstone_5c7be23d-9d5b-4a68-8864-c38700601c81.jpg" 
          alt="The Art of the Eye" 
          fill 
          className="object-cover object-center"
        />
        {/* Subtle gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 lg:px-12">
        <div className="max-w-xl text-white">
          <h2 className="text-5xl lg:text-7xl font-sans font-light tracking-tight mb-6 leading-tight">
            The Art of<br/>the Eye
          </h2>
          <p className="text-lg lg:text-xl font-light mb-8 max-w-md leading-relaxed opacity-90">
            Curate your signature eye look with art-inspired tools.
          </p>
          <Link 
            href="/collections/eye" 
            className="inline-flex items-center text-lg tracking-widest-ilia font-bold uppercase border-b border-white pb-1 hover:text-gray-200 hover:border-gray-200 transition"
          >
            Paint, Sketch, Frame <span className="ml-2 font-normal text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
