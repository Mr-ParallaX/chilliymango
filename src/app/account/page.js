import Link from 'next/link';

export default function AccountPage() {
  return (
    <div className="max-w-[500px] mx-auto px-6 py-24 min-h-[60vh] flex flex-col items-center">
      <h1 className="text-4xl lg:text-5xl font-sans font-light tracking-tight mb-8">Sign In</h1>
      
      <form className="w-full flex flex-col gap-4 mb-8">
        <input 
          type="email" 
          placeholder="Email Address" 
          className="w-full border-b border-gray-300 py-3 px-2 text-sm focus:outline-none focus:border-gray-900 transition"
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full border-b border-gray-300 py-3 px-2 text-sm focus:outline-none focus:border-gray-900 transition"
        />
        
        <Link href="#" className="text-xs text-gray-500 underline mt-2 text-right">
          Forgot your password?
        </Link>
        
        <button type="button" className="w-full bg-gray-900 text-white text-xs tracking-widest-ilia font-bold uppercase py-4 mt-4 hover:bg-gray-800 transition">
          Sign In
        </button>
      </form>
      
      <div className="w-full text-center border-t border-gray-200 pt-8">
        <h2 className="text-xl font-light mb-4">New to ILIA?</h2>
        <button type="button" className="w-full border border-gray-900 text-gray-900 text-xs tracking-widest-ilia font-bold uppercase py-4 hover:bg-gray-50 transition">
          Create Account
        </button>
      </div>
    </div>
  );
}
