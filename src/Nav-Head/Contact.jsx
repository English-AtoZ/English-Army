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
            Have a question, suggestion, or feedback? We’d love to hear from you.
          </p>

          {/* 👇 FORM AREA (REPLACED CONTENT ONLY) */}
          <form className="space-y-4">
            <div className="border rounded-lg p-4 bg-gray-50">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                📧 Email
              </h3>
              <p className="text-gray-600 break-all">
                <a
                  href="mailto:myenglisharmy@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                 😎 myenglisharmy@gmail.com
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Feel free to email us anytime. We usually respond within 24–48 hours.
              </p>
            </div>

            <div className="border rounded-lg p-4 bg-gray-50">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                📨 Telegram
              </h3>
              <p className="text-gray-600 break-all">
                <a
                  href="https://t.me/+OytRNZmAK_QyYTk1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  😎 Telegram 
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Connect with us on Telegram for quick support and updates.
              </p>
            </div>

            <div className="rounded-lg bg-blue-50 border border-blue-200 p-3 text-sm text-blue-700">
              💡 Your feedback helps us improve and deliver a better experience for everyone.
            </div>
          </form>
          {/* 👆 FORM AREA END */}

          <div className="text-center mt-4">
            <Link
              to="/"  onClick={() => setOpen(false)}
              className="text-sm text-blue-600 hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div><BottomAdBanner /></div>
      <div><BottomAdBanner /></div>
    </div>
  );
};

export default Contact;
