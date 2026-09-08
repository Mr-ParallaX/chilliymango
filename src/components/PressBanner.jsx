export default function PressBanner() {
  return (
    <section className="w-full">
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
