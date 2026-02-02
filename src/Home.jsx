import { useState, useEffect } from "react";
import "./App.css"; // Add this
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

  const handleOpen = (pageName) => {
    if (adShown) {
      setActivePage(pageName);
      return;
    }
    window.open(AD_URL, "_blank");
    setAdShown(true);
    setActivePage(pageName);
    setTimer(5);
  };

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
          <button onClick={() => handleOpen("hindiToEnglish")}>
            Hindi → English Practice
          </button>

          <button onClick={() => handleOpen("englishToHindi")}>
            English → Hindi Practice
          </button>

          <button onClick={() => handleOpen("hindiToSansikrit")}>
            Hindi → Sanskirit 
          </button>

          <button onClick={() => handleOpen("audios3Bolkar")}>
            Words Pronounciation
          </button>
               {/* ==========Pages for Web============= */}
          {/* <button onClick={() => handleOpen("about")}>
           about
          </button>

          <button onClick={() => handleOpen("contact")}>
            contact
          </button>

          <button onClick={() => handleOpen("privacypolicy")}>
           privacypolicy
          </button>

          <button onClick={() => handleOpen("terms")}>
            terms
          </button> */}
        </div>
      )}

      {activePage === "hindiToEnglish" && <LearnWithAudio />}
      {activePage === "englishToHindi" && <LearnWithAudioEnglish />}
      {activePage === "audios3Bolkar" && <Audios3Bolkar />}
      {activePage === "hindiToSansikrit" && <HindiToSansikritAudio />}



      {activePage === "about" && <About />}
      {activePage === "contact" && <Contact />}
      {activePage === "privacypolicy" && <PrivacyPolicy />}
      {activePage === "terms" && <Terms />}

 <div>     <BottomAdBanner /></div>

      <BottomAdBanner />
      <div><Footer /></div>



    </div>
</>

  );
}

export default Home;
