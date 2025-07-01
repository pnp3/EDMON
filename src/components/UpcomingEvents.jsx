import React from "react";

function CalendarIcon() {
  return (
    <svg className="w-8 h-8 text-[#F18825] mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="3" y="5" width="18" height="16" rx="3" fill="#F18825" opacity="0.15" />
      <rect x="3" y="5" width="18" height="16" rx="3" stroke="#F18825" strokeWidth="2" />
      <path stroke="#F18825" strokeWidth="2" strokeLinecap="round" d="M16 3v4M8 3v4" />
      <line x1="3" y1="9" x2="21" y2="9" stroke="#F18825" strokeWidth="2" />
    </svg>
  );
}

const events = [
  {
    title: "Science Fair",
    date: "April 5, 2025 - 12:00 pm",
  },
  {
    title: "Science Fair",
    date: "August 20, 2025 - 2:00 pm",
  },
  {
    title: "Community Service Day",
    date: "November 13, 2025 - 10:00 am",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-[#620073] to-[#F07702]">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="kranky-font text-white text-5xl md:text-6xl text-center">Upcoming Events</h2>
        <p className="font-sans text-white text-lg text-center mt-2 mb-8">Stay connected with our vibrant school community</p>
        <div className="w-full flex flex-col space-y-4 mb-10">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between">
              <div className="flex items-center mb-2 sm:mb-0">
                <CalendarIcon />
                <div>
                  <div className="font-semibold text-[#620073] text-lg font-sans">{event.title}</div>
                  <div className="text-gray-600 text-sm font-sans">{event.date}</div>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-white text-[#620073] border border-[#620073] rounded-full px-4 py-1 font-sans text-sm font-medium hover:bg-[#F18825]/10 transition" aria-label={`Learn more about ${event.title}`}>Learn more</button>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-white text-[#620073] rounded-lg px-6 py-2 font-sans font-medium shadow hover:bg-[#F18825]/10 transition" aria-label="View all events">View all events</button>
      </div>
    </section>
  );
} 