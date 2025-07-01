import React from "react";
import ArrowCircleRight from "./ArrowCircleRight";
import heroImg from '../assets/NewHeroBanner.png';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover z-0"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-4">
        <h1 className="kranky-font text-white text-5xl md:text-7xl text-center mb-8 drop-shadow-lg">Welcome to Edmon</h1>
        <div className="flex gap-4 justify-center mt-6">
          <button className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded-lg shadow hover:bg-gray-100 transition">
            Explore now
            <span className="ml-2"><ArrowCircleRight /></span>
          </button>
          <button className="flex items-center gap-2 px-8 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition">
            Apply now
            <span className="ml-2"><ArrowCircleRight /></span>
          </button>
        </div>
      </div>
    </section>
  );
} 