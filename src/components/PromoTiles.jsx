import Image from 'next/image';
import Link from 'next/link';

const tiles = [
  {
    id: 1,
    title: "Become a VIP",
    desc: "Enjoy redeemable points, early access, personalized recs, and more.",
    image: "/assets/Category_Tile-3.jpg", // Fallback to a red/pink image
    link: "/account/rewards"
  },
  {
    id: 2,
    title: "Find My Shade",
    desc: "Take a short quiz to discover your perfect formulas + shades.",
    image: "/assets/Category_Tile-2.jpg", // Fallback to a complexion image
    link: "/pages/shade-finder"
  },
  {
    id: 3,
    title: "Keep 'Em Coming",
    desc: "Start a subscription to get 10% off+ free shipping—forever.",
    image: "/assets/Category_Tile-4.jpg", // Fallback to skincare/bottles image
    link: "/pages/subscribe"
  }
];

export default function PromoTiles() {
  return (
    <section className="py-20 px-6 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiles.map((tile, idx) => (
          <Link href={tile.link} key={tile.id} className="relative w-full aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer block">
            <Image 
              src={tile.image} 
              alt={tile.title} 
              fill 
              className="object-cover group-hover:scale-105 transition duration-700" 
            />
            {/* Dark gradient for text readability at bottom */}
            <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] tracking-widest-ilia font-bold z-10 flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <span>
                <span className="font-serif tracking-widest text-lg">ChillyMango</span> VIP
              </span>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
            
            <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
              <h3 className="text-3xl font-light mb-2">{tile.title} <span className="inline-block transition-transform group-hover:translate-x-2">→</span></h3>
              <p className="text-sm font-light leading-relaxed">{tile.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
