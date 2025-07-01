import React from "react";

const cards = [
  {
    icon: (
      <svg className="w-8 h-8 text-[#620073]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
      </svg>
    ),
    title: "Requirements",
    desc: "See what you need to enroll your child at Edmon Preschool."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#620073]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21v-2a4 4 0 00-8 0v2" />
        <circle cx="12" cy="7" r="4" stroke="#620073" strokeWidth="2" />
      </svg>
    ),
    title: "Apply Now",
    desc: "Start your application online and join our vibrant community."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#620073]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6" />
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="#620073" strokeWidth="2" />
      </svg>
    ),
    title: "FAQ",
    desc: "Find answers to common questions about Edmon Preschool."
  }
];

export default function StartJourney() {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-[60px] bg-gradient-to-b from-[#F18825] to-[#620073]"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="kranky-font text-white text-5xl md:text-6xl text-center">Start your Journey</h2>
        <p className="font-sans text-white text-lg text-center mt-2 mb-10">Everything you need to begin your child's education at Edmon Preschool</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-gradient-to-b from-[#3a0050] to-[#620073]/80 rounded-xl shadow-md px-6 py-8 flex flex-col items-center text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow">
                {card.icon}
              </div>
              <div className="font-sans font-bold text-xl text-white mt-4 mb-2">{card.title}</div>
              <div className="font-sans text-md text-gray-200">{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 