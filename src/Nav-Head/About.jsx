import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import BottomAdBanner from "../components/BottomAdBanner";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl">
        
        <div className="p-2 bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
          
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            About Us
          </h2>

          <p className="text-gray-700 mb-4">
            Welcome to <span className="font-semibold">Smart Translator</span>,
            developed by <span className="font-semibold">P K</span>. Humara
            maqsad hai language barriers ko khatam karna aur translation ko
            aasan banana.
          </p>

          <p className="text-gray-700 mb-2">
            Humari website par aapko milta hai:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>English to Hindi & Hindi to English & Hindi to Sanskirit Translation</li>
            <li>Smart Voice Recognition (Mic se bol kar translate karein)</li>
            <li>
              Click-to-Speak feature jo aapki pronunciation sudharne mein madad
              karta hai
            </li>
          </ul>

          <p className="text-gray-700 mb-6">
            Hum hamesha apne tools ko behtar banane ki koshish karte hain taaki
            aapko best experience mile.
          </p>


        </div>

      </div>
          <div className="text-center mt-4">
            <Link
              to="/"
              className="text-sm text-blue-600 hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
          <div><BottomAdBanner /></div>
          <div><BottomAdBanner /></div>
          <Footer />
    </div>
  );
};

export default About;
