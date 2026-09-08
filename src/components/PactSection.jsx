import Image from 'next/image';

export default function PactSection() {
  return (
    <section className="py-16 px-6 max-w-[1600px] mx-auto bg-white">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center max-w-[1200px] mx-auto">
        
        {/* Left Image (Mock using a feature tile) */}
        <div className="w-full lg:w-1/2 relative aspect-square bg-[#f0f0f0] rounded-sm overflow-hidden">
          <Image 
            src="/assets/Feature_Tile_17fda082-095f-464d-aba8-48eee1bb30e9.jpg" 
            alt="Sustainability" 
            fill 
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6 text-4xl font-bold tracking-tighter text-gray-900 z-10">
            pact
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          
          <div>
            <h3 className="text-lg text-gray-700 font-medium mb-2">Growth Mindset</h3>
            <p className="text-gray-500 font-light leading-relaxed">
              1% of Super Serum Skin Tint SPF 40 sales support reforestation.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-gray-700 font-medium mb-2">No Time to Waste</h3>
            <p className="text-gray-500 font-light leading-relaxed">
              With PACT, we help keep beauty packaging out of landfills.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-gray-700 font-medium mb-2">Don't Be Cruel</h3>
            <p className="text-gray-500 font-light leading-relaxed">
              All of our products are cruelty-free and Leaping Bunny Certified.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
