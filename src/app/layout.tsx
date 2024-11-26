// src/app/layout.tsx
'use client';


import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full bg-white text-blue-600 border-blue-400 border-4 font-serif font-bold flex items-center justify-between px-4 md:px-8 z-50 rounded-t-lg">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={20}
              height={20}
              className="w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-4" /> {/* Replace with actual logo path */}
            <h1 className="text-lg md:text-2xl hover:text-green-500 hover:scale-125">My Blog Post</h1>
          </div>

          {/* Navigation */}
          
<div className="sm:hidden relative">
  {/* Hamburger Button */}
  <button
    className="p-2 rounded-md text-blue-300 border border-blue-400 hover:bg-blue-600 hover:text-white focus:outline-none"
    onClick={() => setMenuOpen(!menuOpen)} // This toggles the menu
  >
    {/* Icon for Hamburger */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5"
      />
    </svg>
  </button>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="absolute right-0 top-10 bg-white text-blue-600 rounded-md shadow-lg w-48">
      <ul className="flex flex-col p-4 space-y-2">
        <li>
          <Link href="/">
            <span className="text-sm underline hover:text-pink-500">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/About">
            <span className="text-sm underline hover:text-pink-500">About</span>
          </Link>
        </li>
        <li>
          <Link href="/Contact">
            <span className="text-sm underline hover:text-pink-500">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  )}
</div>

{/* Large Screen Navigation */}
<nav className="hidden sm:flex flex-wrap gap-x-4 md:gap-x-20">
  <Link href="/">
    <h1 className="text-sm md:text-lg underline hover:text-pink-500 hover:scale-125">Home</h1>
  </Link>
  <Link href="/About">
    <h1 className="text-sm md:text-lg underline hover:text-pink-500 hover:scale-125">About</h1>
  </Link>
  <Link href="/Contact">
    <h1 className="text-sm md:text-lg underline hover:text-pink-500 hover:scale-125">Contact</h1>
  </Link>
</nav>

        </header>

        {/* Main Content */}
        <main className="mt-[80px] mb-[60px] w-full px-4 md:w-[800px] lg:w-[1200px] h-auto mx-auto">
          {children}
        </main>

        {/* Footer */}
        <footer className="fixed bottom-0 left-0 w-full bg-white text-gray-800 border-blue-400 border-2 font-serif font-bold z-50 rounded-b-lg">
          <div className="flex flex-wrap gap-x-4 md:gap-x-40 justify-center text-xs md:text-sm font-bold p-2">
            <p className="hover:text-blue-600 hover:scale-125">Copy Right © 2024</p>
            <p className="hover:text-blue-600 hover:scale-125">My Blog Post</p>
            <p className="hover:text-blue-600 hover:scale-125">Author: Azmat Ali</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
