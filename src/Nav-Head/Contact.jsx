import React from "react";
import { Link } from "react-router-dom";
import BottomAdBanner from "../components/BottomAdBanner";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-center mb-2">
            Contact Us
          </h2>

          <p className="text-center text-gray-500 mb-6">
            Aapka koi sawal ya feedback hai? Humein batayein!
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Apna naam likhein"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Apna message yahan likhein..."
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>

          <div className="text-center mt-4">
            <Link
              to="/"
              className="text-sm text-blue-600 hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
      <div><BottomAdBanner /></div>
      <div><BottomAdBanner /></div>
      <Footer />
    </div>
  );
};

export default Contact;
