import Image from 'next/image';
import Link from 'next/link';

const testimonials = [
  {
    id: 1,
    image: "/assets/Category_Tile-1.jpg", // Replace with appropriate image
    rating: 5,
    quote: "“My skin looks + feels the healthiest it has ever been.”",
    linkText: "Shop Skin Tint",
    linkUrl: "/products/super-serum-skin-tint-spf-40"
  },
  {
    id: 2,
    image: "/assets/ILIA_2026_TLE_Trace_Open_Grey.jpg",
    rating: 5,
    quote: "“did not smudge even in the high heat and humidity”",
    linkText: "Shop Thru Line Eyeliner",
    linkUrl: "/products/thru-line-eyeliner"
  },
  {
    id: 3,
    image: "/assets/Feature_Tile-2.jpg",
    rating: 5,
    quote: "“Holy grail of mascara”",
    linkText: "Shop Limitless Mascara",
    linkUrl: "/products/limitless-lash-mascara"
  }
];

export default function PressBanner() {
  return (
    <section className="w-full">
      {/* Testimonial Grid */}
      <div className="max-w-[1600px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test) => (
            <Link href={test.linkUrl} key={test.id} className="relative w-full aspect-[4/5] rounded-sm overflow-hidden group block cursor-pointer">
              <Image 
                src={test.image} 
                alt="Testimonial" 
                fill 
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <div className="flex mb-3 text-white">
                  {[...Array(test.rating)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  ))}
                </div>
                <h3 className="text-2xl font-light mb-4 leading-tight">{test.quote}</h3>
                <span className="text-[11px] font-bold tracking-widest-ilia flex items-center group-hover:underline uppercase">
                  {test.linkText} <span className="ml-2">&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Brown Press Banner */}
      <div className="w-full bg-[#b28b7e] py-20 px-6 text-center text-white flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl lg:text-3xl font-light leading-snug mb-16">
            “A brand built with intention, offering makeup that makes your skin look and feel better.”
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-80">
            {/* Mocking the logos with text since we might not have the SVGs */}
            <span className="font-serif text-3xl tracking-widest uppercase">BAZAAR</span>
            <span className="font-serif text-3xl tracking-widest uppercase">VOGUE</span>
            <span className="font-sans text-3xl font-bold lowercase tracking-tighter">allure</span>
          </div>
        </div>
      </div>

      {/* Brand Mission Block */}
      <div className="w-full bg-[#f9f8f6] py-24 px-6 text-center text-gray-900 border-b border-gray-200">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-light mb-4">
            Makeup That Makes Your Skin Better™
          </h2>
          <p className="text-gray-600 font-light leading-relaxed mb-8">
            We believe clean beauty is thoughtful beauty—with carefully-selected ingredients meant to perform harmoniously and to protect your skin.
          </p>
          <a href="/pages/about" className="inline-block border border-gray-900 text-gray-900 font-bold text-xs tracking-widest-ilia uppercase py-4 px-8 hover:bg-gray-900 hover:text-white transition">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
