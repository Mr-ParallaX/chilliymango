import Link from 'next/link';

export default function CartPage() {
  return (
    <div className="max-w-[800px] mx-auto px-6 py-24 min-h-[60vh]">
      <h1 className="text-4xl lg:text-5xl font-sans font-light tracking-tight mb-8">Your Bag</h1>
      
      <div className="border-t border-b border-gray-200 py-12 text-center flex flex-col items-center">
        <p className="text-gray-500 mb-6 font-light">Your bag is currently empty.</p>
        <Link href="/collections/all" className="bg-gray-900 text-white text-xs tracking-widest-ilia font-bold uppercase py-4 px-8 hover:bg-gray-800 transition inline-block">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
