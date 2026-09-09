import Image from 'next/image';

export default function PactSection() {
  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto bg-white flex flex-col items-center">
      <h2 className="text-4xl lg:text-5xl font-light text-center max-w-3xl mb-12 text-gray-900 leading-tight">
        We've planted over 1 million trees so far—and we're not stopping there.
      </h2>
      
      <div className="w-full flex flex-col lg:flex-row gap-12 items-end justify-center">
        {/* Left Side: Image and Logo */}
        <div className="w-full lg:w-[600px] flex flex-col items-end">
          <div className="w-full relative aspect-[16/7] bg-[#f5efe9] overflow-hidden mb-4">
            <Image 
              src="/assets/Category_Tile-1.jpg" // Fallback to a suitable image
              alt="Foundation dropper" 
              fill 
              className="object-cover object-bottom"
            />
          </div>
          
          <div className="w-full bg-[#f5efe9] py-6 px-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold tracking-tighter">1%</span>
              <div className="flex flex-col">
                <span className="text-xs font-bold leading-tight">FOR THE</span>
                <span className="text-xs font-bold leading-tight">PLANET</span>
                <span className="text-[8px] tracking-widest uppercase mt-1 border-t border-black pt-1">- MEMBER -</span>
              </div>
            </div>
            
            {/* The Don't Be Cruel block in the screenshot is actually floating to the right of this bottom bar, let's put it next to it or as a separate div based on layout. In screenshot, it is right-aligned to the main image container? Actually, in the screenshot, "Don't Be Cruel" is on the right side of the 1% for the planet bar, taking up the remaining width. */}
            <div className="hidden lg:block w-px h-16 bg-transparent"></div> {/* Spacer if we want to move Don't Be Cruel out */}
          </div>
        </div>

        {/* Right Side: Don't Be Cruel text */}
        <div className="w-full lg:w-auto lg:max-w-xs flex flex-col justify-end lg:mb-8">
          <h3 className="text-lg text-gray-900 font-medium mb-2">Don't Be Cruel</h3>
          <p className="text-gray-500 font-light leading-relaxed">
            All of our products are cruelty-free and Leaping Bunny Certified.
          </p>
        </div>
      </div>
    </section>
  );
}
