import React from "react";
import logoImg from '../assets/School logo.png';
import { Heart } from 'lucide-react';

const testimonials = [
  {
    feedback: "Edmon Preschool has been a wonderful place for my child to grow and learn. The teachers are caring and the environment is nurturing.",
    parent: "— Mrs. Adebayo, Parent of Grade 3 Student"
  },
  {
    feedback: "We love the community spirit at Edmon. My son looks forward to school every day!",
    parent: "— Mr. Okafor, Parent of Grade 1 Student"
  },
  {
    feedback: "The academic and social development my daughter has experienced is outstanding. Highly recommend!",
    parent: "— Mrs. Mensah, Parent of Grade 2 Student"
  }
];

function StarRating() {
  return (
    <div className="flex mb-2">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-[#F18825]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
      ))}
    </div>
  );
}

const footerLinks = [
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Admissions", href: "#admissions" },
  { label: "Events", href: "#events" },
];

const Footer = () => {
  const quickLinks = ['About Us', 'Programs', 'Admissions', 'Events'];

  return (
    <footer className="bg-edmon-purple" style={{ backgroundColor: '#4B006E' }}>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Name & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-kranky text-white"><b>Edmon</b></h3>
            <p className="text-purple-200 font-inter text-sm leading-relaxed">
              Nurturing young minds with excellence, creativity, and community for over a decade.
            </p>
          </div>
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-inter font-bold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-purple-200 hover:text-white font-inter transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-inter font-bold text-lg">Contact Info</h4>
            <div className="space-y-2 text-purple-200 font-inter">
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@edmonpreschool.edu</p>
              <p>📍 123 Learning Lane<br />Education City, EC 12345</p>
            </div>
          </div>
          {/* Mission & Donate */}
          <div className="space-y-4">
            <h4 className="text-white font-inter font-bold text-lg">Support Our Mission</h4>
            <p className="text-purple-200 font-inter text-sm leading-relaxed">
              Help us continue providing exceptional early childhood education to more families in our community.
            </p>
            <button className="bg-edmon-orange text-white hover:bg-orange-600 rounded-full px-6 py-3 font-inter font-medium transition-all duration-200 hover:scale-105 flex items-center">
              <Heart className="mr-2 h-4 w-4" />
              Donate Now
            </button>
          </div>
        </div>
        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-purple-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-purple-200 font-inter text-sm">
              © 2025 Edmon Preschool. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-purple-200 hover:text-white font-inter text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-purple-200 hover:text-white font-inter text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 