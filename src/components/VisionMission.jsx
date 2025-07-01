import React from "react";
import heroImg from '../assets/NewHeroBanner.png';

export default function VisionMission() {
  return (
    <section className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 gap-x-6 items-center py-16 px-4 md:px-12" style={{ background: 'linear-gradient(90deg, #F18825 0%, #620073 100%)' }}>
      {/* Left: Text Content */}
      <div className="space-y-6 flex flex-col items-start justify-center max-w-xl">
        <h2 className="kranky-font text-white text-5xl md:text-6xl leading-tight">Our Vision & Mission</h2>
        <p className="font-sans text-white text-lg md:text-xl leading-relaxed max-w-xl text-left">
          At Edmon Preschool, we believe education extends beyond the classroom. Our mission is to provide absolute care in child development, cultivating compassionate leaders who make meaningful contributions to their communities while achieving academic excellence.
        </p>
        <p className="font-sans text-white text-lg md:text-xl leading-relaxed max-w-xl text-left">
          We envision a world where our students become catalysts for positive change, combining traditional values with innovative thinking to solve tomorrow's challenges.
        </p>
        <button
          className="bg-[#620073] text-white font-sans rounded-md px-6 py-2 shadow hover:scale-105 hover:brightness-110 transition-transform transition duration-200 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Read more about our vision and mission"
        >
          Read more
        </button>
      </div>
      {/* Right: Image */}
      <div className="relative w-full flex justify-center items-center">
        <img
          src={heroImg}
          alt="Teacher reading to children"
          className="w-full max-w-[620px] rounded-xl object-cover"
        />
        {/* Badge Overlay */}
        <div className="absolute left-4 bottom-4 bg-[#F18825] text-white font-sans font-bold rounded-xl px-4 py-2 text-sm shadow">
          10+<br />Years of Excellence
        </div>
      </div>
    </section>
  );
} 