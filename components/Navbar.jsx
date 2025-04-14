'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          NoCap
        </Link>
        
        <div className="flex gap-8">
          <Link href="/" className="text-gray-400 hover:text-pink-400 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-400 hover:text-purple-400 transition-colors">
            About
          </Link>
          <Link href="/contactus" className="text-gray-400 hover:text-purple-400 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}