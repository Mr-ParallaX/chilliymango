import Image from 'next/image';
import Link from 'next/link';

// Mock product details matching Overglaze Hydrating Lip Gloss
const getProductDetails = (slug) => {
  return {
    name: "Overglaze Hydrating Lip Gloss",
    price: "$28",
    description: "Clinical hydration and volume. 24-hour hydration. This long-wear, non-sticky lip gloss delivers a high-shine finish and 24 hours of moisture for visibly fuller, smoother lips. Formulated with powerful active ingredients like Hyaluronic Acid and Peptides to hydrate and visibly plump. Overglaze feels like a treatment and shines like a gloss. Comes in 12 shades.",
    image: "/assets/ILIA_2026_OVERGLAZE_LIPGLOSS_OPEN_MOTIF_GREY_469160fa-5dab-4d70-a02a-7b70d5ad2f11.jpg",
    badges: ["NEW!"],
    reviews: 123,
    shadeGroup: "Honey brown",
    shades: [
      { name: "Penny", color: "#a9664d" },
      { name: "Motif", color: "#8a4b3d" },
      { name: "Gallery", color: "#662c26" },
      { name: "Ceramic", color: "#d29081" },
      { name: "Porcelain", color: "#e1a798" },
      { name: "Glaze", color: "#c17967" },
      { name: "Biscotti", color: "#b6715f" },
      { name: "Tawny", color: "#984f3e" }
    ],
    features: [
      "Safe For Sensitive Skin",
      "Formulated Without Fragrance",
      "Dermatologist Tested",
      "Vegan + Cruelty-Free"
    ]
  };
};

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductDetails(slug);

  return (
    <div className="relative">
      <div className="max-w-[1600px] mx-auto px-6 py-8">
        
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 relative">
          
          {/* Left Column: Image Gallery (Vertical Thumbnails) */}
          <div className="w-full lg:w-3/5 flex gap-4 lg:gap-8 h-[calc(100vh-120px)] lg:sticky lg:top-24">
            {/* Vertical Thumbnails */}
            <div className="hidden lg:flex flex-col gap-4 overflow-y-auto no-scrollbar w-20 flex-shrink-0">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className={`w-20 h-20 relative bg-[#f9f8f6] flex-shrink-0 cursor-pointer border ${i === 1 ? 'border-gray-900' : 'border-transparent hover:border-gray-300'}`}>
                  <Image src={product.image} alt="Thumbnail" fill className="object-cover p-1" />
                </div>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="w-full h-full bg-[#f9f8f6] relative flex items-center justify-center">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-contain p-8"
              />
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div className="w-full lg:w-2/5 flex flex-col pb-32 pt-4 lg:pt-0">
            {/* Breadcrumbs */}
            <div className="text-[10px] tracking-widest-ilia font-bold text-gray-500 uppercase mb-6 flex gap-2">
              <Link href="/collections/new" className="hover:text-gray-900">New</Link>
              <span>/</span>
              <span className="text-gray-900">{product.name}</span>
            </div>

            {product.badges.map(b => (
              <span key={b} className="text-[10px] tracking-widest-ilia font-bold text-gray-900 uppercase mb-2 block">{b}</span>
            ))}
            
            <h1 className="text-3xl lg:text-4xl font-light tracking-tight mb-2 text-gray-900">{product.name}</h1>
            
            <p className="text-sm text-gray-500 mb-2">{product.shadeGroup}</p>
            
            <div className="flex items-center gap-2 mb-8">
              <div className="flex text-gray-900 gap-[2px]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-900 font-bold underline cursor-pointer">{product.reviews} Reviews</span>
            </div>

            {/* Shade Selector */}
            <div className="mb-8">
              <p className="text-sm font-bold text-gray-900 mb-1">Motif <span className="font-normal text-gray-500 ml-2">Honey brown</span></p>
              <div className="flex flex-wrap gap-2 mt-4">
                {product.shades.map((shade, idx) => (
                  <div 
                    key={shade.name} 
                    title={shade.name}
                    className={`w-9 h-9 rounded-full cursor-pointer border-2 ${idx === 1 ? 'border-gray-900 p-[2px]' : 'border-transparent'} relative transition-transform hover:scale-110`}
                  >
                    <div className="w-full h-full rounded-full" style={{ backgroundColor: shade.color }}></div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between items-center text-[10px] tracking-widest-ilia font-bold uppercase">
                <span className="text-gray-900 border-b border-gray-900 pb-[1px] cursor-pointer hover:text-gray-500">Compare 12 Shades</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-6 text-lg font-light text-gray-900">
              <span className="font-bold">{product.price}</span> 
              <span className="text-sm text-gray-500">|</span> 
              <span className="text-sm text-gray-500 line-through">$28.00</span>
              <span className="text-sm font-bold text-gray-900 underline ml-auto cursor-pointer flex items-center gap-1">
                4-interest free payments of $7.00 with <span className="font-serif italic font-bold">Klarna.</span>
              </span>
            </div>

            {/* Bundle + Save */}
            <div className="border border-gray-200 p-4 mb-8 flex gap-4 items-center bg-[#fcfcfc] rounded-sm cursor-pointer hover:border-gray-400 transition">
              <div className="w-12 h-12 relative flex-shrink-0 bg-[#f5f5f5]">
                <Image src="/assets/Feature_Tile-4.jpg" alt="Bundle" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-widest-ilia uppercase text-gray-900 mb-1">BUNDLE + SAVE 10%</span>
                <span className="text-sm text-gray-600 font-light leading-tight">The Hydration Set - Our top best sellers for hydrating, glowing lips + cheeks.</span>
                <span className="text-sm font-bold text-gray-900 mt-1">$64.00 <span className="line-through text-gray-400 font-normal ml-1">$72.00</span></span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 mb-8">
              <button className="w-full bg-[#222222] text-white text-xs tracking-widest-ilia font-bold uppercase py-4 hover:bg-black transition">
                ADD TO BAG - {product.price}
              </button>
            </div>

            <div className="flex flex-col gap-3 text-xs text-gray-600 mb-12">
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12l5 5L20 7"/></svg>
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3h18v18H3zM9 9h6v6H9z"/></svg>
                <span>Free 60-day returns</span>
              </div>
            </div>

            {/* ILIA Looks Good On You */}
            <div className="mb-10">
              <h3 className="text-lg font-light mb-4">ILIA Looks Good On You</h3>
              <div className="flex gap-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-1/3 aspect-[3/4] relative bg-gray-100 cursor-pointer group overflow-hidden">
                    <Image src={`/assets/Category_Tile-${i}.jpg`} alt="UGC" fill className="object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-sm font-bold tracking-widest-ilia uppercase text-gray-900 mb-4">Description</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-light">{product.description}</p>
            </div>

            {/* Accordions */}
            <div className="border-t border-gray-200">
              {['Ingredients', 'Awards'].map(section => (
                <div key={section} className="border-b border-gray-200 py-5 cursor-pointer flex justify-between items-center group">
                  <span className="text-[11px] tracking-widest-ilia font-bold uppercase text-gray-900">{section}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14M5 12h14"/></svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Feature Banner */}
      <div className="w-full bg-[#9f6d63] text-white py-4 px-6 mt-12 overflow-x-auto no-scrollbar">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between min-w-[800px] gap-6 text-sm font-light">
          {product.features.map(f => (
            <div key={f} className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12l5 5L20 7"/></svg>
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Rich Content Sections (Mocked based on screenshot) */}
      <div className="max-w-[1600px] mx-auto">
        {/* Hydration block */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-light mb-6">24-hour hydration.<br/>Smoothing.<br/>Plumping.<br/>Resists bleeding + feathering.</h2>
          </div>
          <div className="w-full md:w-1/2 relative aspect-square">
            <Image src="/assets/Hero_Campaign_a741ff1f-e381-491f-bc33-f0f1d23622f0.jpg" alt="Lips" fill className="object-cover" />
          </div>
        </div>

        {/* Clinical Results */}
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 relative aspect-square">
            <Image src="/assets/Feature_Tile-2.jpg" alt="Model" fill className="object-cover" />
          </div>
          <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-[#f9f8f6]">
            <h2 className="text-3xl font-light mb-8 text-gray-900">Clinical Results</h2>
            <ul className="space-y-6 text-lg font-light text-gray-800">
              <li><span className="font-bold mr-2">100%</span> said it locks in moisture + quenches dry, chapped lips*</li>
              <li><span className="font-bold mr-2">100%</span> said it feels cushiony*</li>
              <li><span className="font-bold mr-2">100%</span> said lips look smoother*</li>
            </ul>
            <p className="text-xs text-gray-400 mt-8">*In a 24-hour clinical study of 33 people.</p>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] z-40 hidden md:block">
        <div className="max-w-[1600px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 relative bg-[#f5f5f5]">
              <Image src={product.image} alt={product.name} fill className="object-contain p-1" />
            </div>
            <span className="text-sm font-bold text-gray-900">{product.name}</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#8a4b3d' }}></div>
              <span className="text-sm font-bold text-gray-900">Motif <span className="font-normal text-gray-500">Honey brown</span></span>
              <span className="text-xs tracking-widest-ilia font-bold text-gray-500 underline ml-2 cursor-pointer">Edit</span>
            </div>
            <button className="bg-[#222222] text-white text-xs tracking-widest-ilia font-bold uppercase py-3 px-8 hover:bg-black transition">
              ADD TO BAG - {product.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
