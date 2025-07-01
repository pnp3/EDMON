import React from "react";
import classroomImg from '../assets/NewHeroBanner.png';

export default function OurStoryImpact() {
  return (
    <section className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-8 py-16 px-4 md:px-12 bg-gradient-to-r from-[#620073] to-[#F18825]">
      {/* Image */}
      <div className="flex justify-center items-center h-full">
        <img
          src={classroomImg}
          alt="Classroom"
          className="w-full max-w-[520px] rounded-xl object-cover"
        />
      </div>
      {/* Content */}
      <div className="flex flex-col justify-center h-full md:pr-8">
        <div>
          <h2 className="kranky-font text-white text-4xl md:text-5xl leading-snug">Our Story & Impact</h2>
          <p className="text-white mt-4 leading-relaxed text-lg">
            For over a decade, Edmon Preschool has been a cornerstone of early childhood education in our community. We've watched countless children grow from curious toddlers into confident learners, ready to take on new challenges.
          </p>
        </div>
        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <div className="bg-white px-8 py-6 rounded-xl shadow text-center w-full sm:w-auto">
            <h3 className="text-[#F18825] text-2xl font-bold">98%</h3>
            <p className="text-gray-700 mt-1">Graduation Rate</p>
          </div>
          <div className="bg-white px-8 py-6 rounded-xl shadow text-center w-full sm:w-auto">
            <h3 className="text-[#F18825] text-2xl font-bold">25+</h3>
            <p className="text-gray-700 mt-1">Community Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
} 