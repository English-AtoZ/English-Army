import { useState, useEffect } from "react";
import "./App.css"; 
import LearnWithAudio from "./components/LearnWithAudio";
import LearnWithAudioEnglish from "./components/LearnWithAudioEnglish";
import Audios3Bolkar from "./components/Audios3Bolkar";
import HindiToSansikritAudio from "./components/HindiToSansikritAudio";
import About from './Nav-Head/About'
import Contact from './Nav-Head/Contact'
import PrivacyPolicy from './Nav-Head/PrivacyPolicy'
import Terms from './Nav-Head/Terms'

import TopBannerAd from "./components/TopBannerAd";
import BottomAdBanner from "./components/BottomAdBanner";
import Footer from "./Nav-Head/Footer";

const AD_URL = "https://www.effectivegatecpm.com/ynr4zqfyc?key=47c7532215e22f2958124a99aa5ab73e";

function Home() {
  const [activePage, setActivePage] = useState(null);
  const [adShown, setAdShown] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Pages that should skip ads/timer
  const skipAdPages = ["about", "contact", "privacypolicy", "terms"];

  const handleOpen = (pageName) => {
    if (skipAdPages.includes(pageName)) {
      // Directly open the page without ad/timer
      setActivePage(pageName);
      return;
    }

    if (adShown) {
      setActivePage(pageName);
      return;
    }

    // Show ad in new tab
    window.open(AD_URL, "_blank");
    setAdShown(true);
    setActivePage(pageName);
    setTimer(5);
  };

  // Countdown screen for ad pages
  if (timer > 0) {
    return (
      <div className="countdown-screen">
        <h2>Ad opened in new tab</h2>
        <p>Opening page in {timer} seconds...</p>
      </div>
    );
  }

  return (
    <>
      <div className="app-container">
        <TopBannerAd />

        {!activePage && (
          <div className="home-buttons">
            <div className="container">
              <div className="row">
                {/* First Column */}
                <div className="col-md-6 mb-3">
                  <button
                    className="btn btn-primary w-100 mb-2"
                    onClick={() => handleOpen("hindiToEnglish")}
                  >
                    Hindi → English Practice
                  </button>

                  <button
                    className="btn btn-primary w-100 mb-2"
                    onClick={() => handleOpen("englishToHindi")}
                  >
                    English → Hindi Practice
                  </button>

                  <button
                    className="btn btn-primary w-100 mb-2"
                    onClick={() => handleOpen("hindiToSansikrit")}
                  >
                    Hindi → Sanskirit
                  </button>

                  <button
                    className="btn btn-primary w-100 mb-2"
                    onClick={() => handleOpen("audios3Bolkar")}
                  >
                    Words Pronunciation
                  </button>
                </div>

                {/* Second Column */}
                <div className="col-md-6 mb-3">
                  <button
                    className="btn btn-secondary w-100 mb-2"
                    onClick={() => handleOpen("about")}
                  >
                    About
                  </button>

                  <button
                    className="btn btn-secondary w-100 mb-2"
                    onClick={() => handleOpen("contact")}
                  >
                    Contact
                  </button>

                  <button
                    className="btn btn-secondary w-100 mb-2"
                    onClick={() => handleOpen("privacypolicy")}
                  >
                    Privacy Policy
                  </button>

                  <button
                    className="btn btn-secondary w-100 mb-2"
                    onClick={() => handleOpen("terms")}
                  >
                    Terms
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content Pages */}
        {activePage === "hindiToEnglish" && <LearnWithAudio />}
        {activePage === "englishToHindi" && <LearnWithAudioEnglish />}
        {activePage === "audios3Bolkar" && <Audios3Bolkar />}
        {activePage === "hindiToSansikrit" && <HindiToSansikritAudio />}

        {activePage === "about" && <About />}
        {activePage === "contact" && <Contact />}
        {activePage === "privacypolicy" && <PrivacyPolicy />}
        {activePage === "terms" && <Terms />}

        <BottomAdBanner />
        <Footer />
      </div>
    </>
  );
}

export default Home;
