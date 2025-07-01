import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VisionMission from "./components/VisionMission";
import UpcomingEvents from "./components/UpcomingEvents";
import StartJourney from "./components/StartJourney";
import OurStoryImpact from "./components/OurStoryImpact";
import TestimonialsFooter from "./components/TestimonialsFooter";

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] relative">
      <Navbar />
      <Hero />
      <VisionMission />
      <UpcomingEvents />
      <StartJourney />
      <OurStoryImpact />
      <TestimonialsFooter />
    </div>
  );
}

export default App;
