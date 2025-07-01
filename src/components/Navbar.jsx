import React from "react";
import logoImg from '../assets/School logo.png';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-8 py-4 flex justify-between items-center shadow-md backdrop-blur-sm">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logoImg} alt="Edmon School Logo" className="h-12 w-auto object-contain" />
      </div>
      {/* Nav links */}
      <ul className="flex gap-8 text-white font-sans text-base md:text-lg">
        <li><a href="#about" className="hover:underline hover:text-orange-400 transition">About</a></li>
        <li><a href="#admission" className="hover:underline hover:text-orange-400 transition">Admission</a></li>
        <li><a href="#curriculum" className="hover:underline hover:text-orange-400 transition">Curriculum</a></li>
        <li><a href="#contact" className="hover:underline hover:text-orange-400 transition">Contact us</a></li>
      </ul>
    </nav>
  );
} 