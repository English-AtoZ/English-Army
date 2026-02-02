import React from "react";
import { Link } from "react-router-dom";
import BottomAdBanner from "../components/BottomAdBanner";
import Footer from "./Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Terms & Conditions
        </h2>

        <hr className="mb-4" />

        <p className="text-gray-700 mb-3">
          Smart Translator ka upyog karke aap in rules ko maante hain:
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            Is tool ka use sirf personal aur educational purposes ke liye karein.
          </li>
          <li>
            Hum guarantee nahi dete ki har translation 100% sahi hogi.
          </li>
          <li>
            Aap is website ke code ko bina permission copy nahi kar sakte.
          </li>
          <li>
            Hum kisi bhi waqt website ki service change ya stop kar sakte hain.
          </li>
        </ul>

        <p className="text-gray-700 mb-6">
          Agar aapko ye terms pasand nahi hain, toh kripya site ka use na karein.
        </p>

  
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

export default Terms;
