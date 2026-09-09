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
    <section className="py-12 px-6 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiles.map((tile, idx) => (
          <Link href={tile.link} key={tile.id} className="relative w-full aspect-[16/9] rounded-sm overflow-hidden group cursor-pointer block">
            <Image 
              src={tile.image} 
              alt={tile.title} 
              fill 
              className="object-cover group-hover:scale-105 transition duration-700" 
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
            
            <div className="absolute bottom-6 left-6 right-6 z-20 text-white flex flex-col justify-end h-full">
              <h3 className="text-2xl font-light mb-1 flex items-center group-hover:underline">
                {tile.title} <span className="ml-2">&rarr;</span>
              </h3>
              <p className="text-xs font-light leading-relaxed">{tile.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
