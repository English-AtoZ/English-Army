import React from "react";
import { Link } from "react-router-dom";
import BottomAdBanner from "../components/BottomAdBanner";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-8 md:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Effective Date: January 2026
        </p>

        <hr className="mb-6" />

        <section className="space-y-4 text-gray-700">
          <div>
            <h4 className="text-lg font-semibold mb-1">
              1. Information We Collect
            </h4>
            <p>
              Hum koi bhi personal data (jaise password) store nahi karte. Voice
              data sirf translation process ke liye use hota hai.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-1">
              2. Third-Party Ads
            </h4>
            <p>
              Humari site par Adsterra ya anya third-party ad networks ke ads
              dikhaye ja sakte hain. Ye networks cookies ka use kar sakte hain
              taaki aapko relevant ads dikhein.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-1">
              3. External Links
            </h4>
            <p>
              Humari website par dusri sites ke links ho sakte hain. Hum unki
              privacy practices ke liye zimmedar nahi hain.
            </p>
          </div>
        </section>


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

export default PrivacyPolicy;
