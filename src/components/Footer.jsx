import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#f0ece6] pt-16 pb-8 px-6 text-[10px] tracking-widest-ilia font-bold uppercase text-gray-900 border-t border-gray-200">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
        
        {/* Column 1: SHOP */}
        <div className="flex flex-col gap-4">
          <h4 className="mb-2 text-gray-900">SHOP</h4>
          {['BESTSELLERS', 'SUBSCRIBE AND SAVE', 'REWARDS', 'REFER A FRIEND', 'GIFT CARDS', 'FIND A STORE', 'EVENTS'].map(link => (
            <Link key={link} href="#" className="text-gray-600 hover:text-gray-900 transition">{link}</Link>
          ))}
        </div>

        {/* Column 2: HELP */}
        <div className="flex flex-col gap-4">
          <h4 className="mb-2 text-gray-900">HELP</h4>
          {['MY ACCOUNT', 'FIND MY SHADE', 'HELP CENTER', 'TRACK PACKAGE', 'START A RETURN', 'CONTACT US'].map(link => (
            <Link key={link} href="#" className="text-gray-600 hover:text-gray-900 transition">{link}</Link>
          ))}
        </div>

        {/* Column 3: ABOUT */}
        <div className="flex flex-col gap-4">
          <h4 className="mb-2 text-gray-900">ABOUT</h4>
          {['ABOUT US', 'RECYCLING', 'CAREERS', 'AFFILIATES', 'CHILLYMANGO ICONS', 'CLEAN AT CHILLYMANGO'].map(link => (
            <Link key={link} href="#" className="text-gray-600 hover:text-gray-900 transition">{link}</Link>
          ))}
        </div>

        {/* Column 4: PROMOTION DETAILS */}
        <div className="flex flex-col gap-4">
          <h4 className="mb-2 text-gray-900">*PROMOTION DETAILS</h4>
          {['CHILLYMANGO PROMOTIONS', 'STUDENT DISCOUNTS', 'TEACHER DISCOUNTS'].map(link => (
            <Link key={link} href="#" className="text-gray-600 hover:text-gray-900 transition">{link}</Link>
          ))}
        </div>

        {/* Column 5: COMMITMENTS */}
        <div className="flex flex-col gap-6">
          <h4 className="mb-2 text-gray-900">COMMITMENTS</h4>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg leading-none">1%</div>
            <span className="text-[10px] leading-tight">FOR THE<br/>PLANET</span>
          </div>
          <div className="flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            <span className="text-[10px] leading-tight">LEAPING<br/>BUNNY<br/>CERTIFIED</span>
          </div>
          <div className="flex items-center gap-3">
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <span className="text-[10px] leading-tight">ACCESSIBILITY</span>
          </div>
        </div>

        {/* Column 6: Newsletter */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          <h4 className="mb-2 text-gray-900">15% OFF YOUR FIRST ORDER</h4>
          <p className="text-[10px] normal-case tracking-normal font-light text-gray-600 mb-2">
            Be the first to hear about product launches, exclusive sales, and more news.
          </p>
          <div className="flex border-b border-gray-900 pb-2 mb-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-transparent focus:outline-none placeholder-gray-500 normal-case tracking-normal font-light"
            />
            <button className="text-[10px] tracking-widest-ilia font-bold text-gray-900 whitespace-nowrap ml-2">SEND →</button>
          </div>
          <div className="flex gap-4 mb-6">
            {['Instagram', 'Facebook', 'TikTok', 'YouTube', 'Pinterest', 'Twitter'].map(social => (
              <a href="#" key={social} className="hover:text-gray-500">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 cursor-pointer w-fit text-xs border-b border-gray-300 pb-1">
            <span className="text-lg">🇺🇸</span> $US <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto text-[9px] text-gray-500 font-light normal-case tracking-normal">
        ©2026 ChillyMango All rights reserved
      </div>
    </footer>
  );
}
