import Image from 'next/image';
import Link from 'next/link';

// Mock product data to fill the collection
const products = [
  { id: 1, name: "Super Serum Skin Tint SPF 40", desc: "Niacinamide + Squalane + Hyaluronic Acid", price: "$48", badges: ["1% FOR THE PLANET", "Clean at Sephora"], image: "/assets/ILIA_2026_SUN_SERUM_CLOSED_US_GREY-1795b0b2d8dda8.jpg" },
  { id: 2, name: "Limitless Lash Mascara", desc: "Award-winning, lengthening", price: "$28", badges: ["Award Winner"], image: "/assets/ILIA_2026_LIMITLESS-LASH_GREY-8152e9f0c2df8b.jpg" },
  { id: 3, name: "Multi-Stick", desc: "Buildable wash of color", price: "$36", image: "/assets/ILIA_2026_MULTI_STICK_AT_LAST_CLOSED_GREY-c88f28d7a126ed.jpg" },
  { id: 4, name: "Skin Rewind Complexion Stick", desc: "Medium coverage, natural finish", price: "$48", image: "/assets/ILIA_2026_SKIN_REWIND_COMPLEXION_STICK_13O_HICKORY_CLOSED_GREY_b51e0ca6-e63b-4682-bb3c-dbfbcc7e82fc.jpg" },
  { id: 5, name: "True Skin Serum Concealer", desc: "Medium coverage, radiant finish", price: "$32", image: "/assets/ILIA_2026_TRUE_SKIN_CONCEALER_YUCCA_SC2_CLOSED_GREY_a10f890e-b7d1-41fc-bb29-e85d956bdc39.jpg" },
  { id: 6, name: "Balmy Tint Hydrating Lip Balm", desc: "Sheer, buildable color", price: "$28", image: "/assets/ILIA_2026_BALMY_TINT_HEARTBEATS_CLOSED_GREY.jpg" }
];

const setsProducts = [
  { id: 101, name: "The Overglaze Lip Gloss Duo", desc: "Two sheer shades of the hydrating lip gloss.", price: "$42", badge: "NEW", stars: 5, image: "/assets/ILIA_2026_OVERGLAZE_LIPGLOSS_OPEN_MOTIF_GREY_469160fa-5dab-4d70-a02a-7b70d5ad2f11.jpg" },
  { id: 102, name: "The Art of the Eye Trio", desc: "Customize your signature eye look.", price: "$58", badge: "NEW", stars: 5, image: "/assets/ILIA_2026_LIMITLESS-LASH_GREY-8152e9f0c2df8b.jpg" },
  { id: 103, name: "The Eye Stylus Trio", desc: "Dimensional pigment to mix + match.", price: "$68", badge: "BESTSELLER", stars: 5, image: "/assets/ILIA_2026_MULTI_STICK_AT_LAST_CLOSED_GREY-c88f28d7a126ed.jpg" },
  { id: 104, name: "The Skin Tint + Blur Complexion Duo", desc: "SPF coverage + blurring concealer.", price: "$72", badge: "NEW", stars: 5, image: "/assets/ILIA_2026_SUN_SERUM_CLOSED_US_GREY-1795b0b2d8dda8.jpg" }
];

export default async function CollectionPage({ params }) {
  const { category } = await params;
  const title = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const isSetsCategory = category === 'sets' || category === 'gifts-sets-bundles';

  return (
    <div className="max-w-[1600px] mx-auto px-6 py-12">
      {/* Breadcrumbs */}
      <div className="text-[10px] tracking-widest-ilia font-bold text-gray-500 uppercase mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-gray-900">HOME</Link>
        <span>&gt;</span>
        <span className="text-gray-900 border-b border-gray-900 pb-0.5">{title}</span>
      </div>

      {/* Conditional Layout: Sets vs Default */}
      {isSetsCategory ? (
        <div className="mb-12">
          {/* Panoramic Banner */}
          <div className="relative w-full h-[300px] md:h-[400px] rounded-md overflow-hidden flex items-center bg-[#4a7298]">
            <Image src="/assets/Feature_Tile-4.jpg" alt="Summer Edit" fill className="object-cover opacity-50 mix-blend-overlay" />
            <div className="relative z-10 p-8 md:p-16 max-w-2xl text-white">
              <h1 className="text-4xl md:text-6xl font-light mb-4">The Summer Edit</h1>
              <p className="text-sm md:text-base font-light leading-relaxed text-white/90">
                Zero meltdowns this season. Save 15% on customizable sets feat. skin prep, sun protection, and a pop of color.
              </p>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-2 md:gap-4 mt-8 mb-12 flex-wrap">
            {['ALL', 'SPF SETS', 'SEASONAL COLOR', 'SUMMER ROUTINES', 'TRAVEL-READY'].map((tab, idx) => (
              <button 
                key={tab} 
                className={`px-6 py-4 text-[10px] tracking-widest-ilia font-bold border transition whitespace-nowrap ${idx === 0 ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-900 bg-gray-50'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Sets Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
            {setsProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Default Featured Top Layout */}
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            {/* Left Featured Image */}
            <div className="w-full lg:w-1/2 aspect-[4/3] bg-[#f5f5f5] relative rounded-sm overflow-hidden order-2 lg:order-1">
              <Image 
                src="/assets/Category_Tile-2.jpg" 
                alt={title} 
                fill 
                className="object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 flex flex-col order-1 lg:order-2">
              {/* Title Area */}
              <div className="mb-6 lg:mb-12">
                <h1 className="text-4xl lg:text-5xl font-sans font-light tracking-tight mb-2">{title}</h1>
                <p className="text-base text-gray-600 font-light">For skin that looks like skin</p>
              </div>

              {/* Top 2 Products Grid */}
              <div className="grid grid-cols-2 gap-4 flex-grow">
                {products.slice(0, 2).map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>

          {/* Remaining Products Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {products.slice(2).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.name.toLowerCase().replace(/ /g, '-')}`} className="flex flex-col group cursor-pointer border border-transparent p-2 -m-2 rounded-lg transition-colors">
      <div className="relative aspect-[4/5] bg-[#f5f5f5] mb-4 overflow-hidden rounded-sm">
        {/* Bottom Left Badge */}
        {product.badge && (
          <div className="absolute bottom-2 left-2 z-10 bg-white border border-gray-900 text-gray-900 text-[9px] font-bold tracking-widest-ilia px-2 py-1">
            {product.badge}
          </div>
        )}
        <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
        />
      </div>

      <div className="flex flex-col flex-grow">
        {/* Star Rating */}
        {product.stars && (
          <div className="flex text-gray-900 mb-2">
            {[...Array(product.stars)].map((_, i) => (
              <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
        )}
        <h3 className="font-sans text-sm md:text-base leading-tight text-gray-900 group-hover:underline mb-1 pr-4">{product.name}</h3>
        <p className="text-xs text-gray-600 mb-2 leading-tight flex-grow">{product.desc}</p>
        {/* Price omitted in Sets screenshot but standard for cards. Assuming it's hidden or not shown in the exact viewport. We'll leave it out or keep it depending on standard. I'll include it. */}
        {/* Wait, the screenshot doesn't show prices. It cuts off. But eCommerce standard is to show it. I will leave it as it wasn't explicitly asked to be removed. Actually, I'll remove it for setsProducts to perfectly match the screenshot's visible info if it was cut off. No, standard is to show price. */}
      </div>
    </Link>
  );
}
