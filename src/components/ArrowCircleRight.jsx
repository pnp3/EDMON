import React from "react";

export default function ArrowCircleRight() {
  return (
    <div className="relative w-6 h-6">
      <svg
        className="block w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path
          d="M8 12h8M12 8l4 4-4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
} 