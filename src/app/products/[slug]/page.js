import Image from 'next/image';
import Link from 'next/link';

// Mock product details
const getProductDetails = (slug) => {
  const formattedName = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    name: formattedName,
    price: "$48",
    description: "A light-coverage, tinted mineral SPF 40 serum that boosts skincare benefits.",
    image: "/assets/ILIA_2026_SUN_SERUM_CLOSED_US_GREY-1795b0b2d8dda8.jpg",
    badges: ["1% FOR THE PLANET", "Clean at Sephora"],
    shades: [
      { name: "Skye ST0.5", color: "#f3e1d1" },
      { name: "Rendezvous ST1", color: "#eccdb5" },
      { name: "Tulum ST2", color: "#dfbc9f" },
      { name: "Balos ST3", color: "#d2a987" },
      { name: "Formosa ST4", color: "#c18c64" },
      { name: "Bom Bom ST5", color: "#a56641" }
    ]
  };
};

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductDetails(slug);

  return (
    <div className="max-w-[1600px] mx-auto px-6 py-12">
      {/* Breadcrumbs */}
      <div className="text-[10px] tracking-widest-ilia font-bold text-gray-500 uppercase mb-8">
        <Link href="/" className="hover:text-gray-900">HOME</Link>
        <span className="mx-2">/</span>
        <Link href="/collections/all" className="hover:text-gray-900">SHOP ALL</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left Column: Image Gallery */}
        <div className="w-full lg:w-3/5 flex flex-col gap-4">
          <div className="w-full aspect-square bg-[#f5f5f5] relative flex items-center justify-center p-12">
            {/* Badges */}
            <div className="absolute top-6 left-6 flex flex-col gap-3 z-10">
              {product.badges.map(b => (
                <div key={b} className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-center text-[9px] font-bold leading-tight shadow-sm p-2 border border-gray-100">
                  {b}
                </div>
              ))}
            </div>
            
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              className="object-contain p-12"
            />
          </div>
          {/* Thumbnails (Mocked) */}
          <div className="flex gap-4 overflow-x-auto no-scrollbar">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className={`w-24 h-24 relative bg-[#f5f5f5] flex-shrink-0 cursor-pointer border-2 ${i === 1 ? 'border-gray-900' : 'border-transparent'}`}>
                <Image src={product.image} alt="Thumbnail" fill className="object-contain p-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Product Info */}
        <div className="w-full lg:w-2/5 flex flex-col pt-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-gray-900 gap-[1px]">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500 underline cursor-pointer">4,592 Reviews</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-sans font-light tracking-tight mb-4">{product.name}</h1>
          <p className="text-xl text-gray-900 mb-6">{product.price}</p>
          <p className="text-base text-gray-600 mb-8 leading-relaxed">{product.description}</p>

          {/* Shade Selector */}
          <div className="mb-8">
            <div className="flex justify-between items-end mb-4">
              <p className="text-sm text-gray-900 font-bold">SHADE: <span className="font-normal text-gray-600">Skye ST0.5</span></p>
              <button className="text-xs tracking-widest-ilia font-bold text-gray-500 underline hover:text-gray-900">FIND MY SHADE</button>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.shades.map((shade, idx) => (
                <div 
                  key={shade.name} 
                  title={shade.name}
                  className={`w-10 h-10 rounded-full cursor-pointer border-2 ${idx === 0 ? 'border-gray-900 p-1' : 'border-transparent'} relative`}
                >
                  <div className="w-full h-full rounded-full" style={{ backgroundColor: shade.color }}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mb-12">
            <button className="w-full bg-gray-900 text-white text-sm tracking-widest-ilia font-bold uppercase py-5 hover:bg-gray-800 transition">
              ADD TO BAG - {product.price}
            </button>
            <p className="text-center text-xs text-gray-500 mt-2">Free shipping on orders over $50</p>
          </div>

          {/* Accordions */}
          <div className="border-t border-gray-200">
            {['Details', 'How to Use', 'Ingredients'].map(section => (
              <div key={section} className="border-b border-gray-200 py-6 cursor-pointer flex justify-between items-center group">
                <span className="text-sm tracking-widest-ilia font-bold uppercase text-gray-900">{section}</span>
                <svg className="transform transition-transform group-hover:rotate-180" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
