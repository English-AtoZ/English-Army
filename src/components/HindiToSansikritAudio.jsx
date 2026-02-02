import React, { useState, useEffect, useRef } from 'react';
import './HindiToSansikritAudio.css';
import TopBannerAd from "./TopBannerAd";
import BottomAdBanner from "./BottomAdBanner";
import Footer from '../Nav-Head/Footer';

const HindiToSansikritAudio = () => {
  const [isListening, setIsListening] = useState(false);
  const [hindiText, setHindiText] = useState('');
  const [sanskritTranslation, setSanskritTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = 'hi-IN';
      recognitionRef.current.continuous = false;

      recognitionRef.current.onresult = async (event) => {
        const text = event.results[0][0].transcript;
        setHindiText(text);
        await translateToSanskrit(text);
      };

      recognitionRef.current.onend = () => setIsListening(false);
      recognitionRef.current.onerror = () => setIsListening(false);
    }
  }, []);

  const translateToSanskrit = async (text) => {
    if (!text) return;
    setIsLoading(true);
    try {
      // const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=hi&tl=sa&dt=t&q=${encodeURIComponent(text)}`;
      const BASE_URL = import.meta.env.VITE_TRANSLATE_API_URLS;
      const url = `${BASE_URL}?client=gtx&sl=hi&tl=sa&dt=t&q=${encodeURIComponent(text)}`;
      const response = await fetch(url);
      const data = await response.json();
      const translated = data[0][0][0];
      setSanskritTranslation(translated);
      speakSanskrit(translated);
    } catch {
      setSanskritTranslation("Anuvada viphala (Translation failed).");
    } finally { setIsLoading(false); }
  };

  const speakSanskrit = (text) => {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'hi-IN';
    msg.rate = 0.8;
    window.speechSynthesis.speak(msg);
  };

  const startListening = () => {
    setHindiText('');
    setSanskritTranslation('');
    setIsListening(true);
    recognitionRef.current.start();
  };

  return (




   <div>
          <div className="header">
        <h3>🎙️ Hindi to Sanskrit Audio Tutor</h3>
        <p>Developed by P K (Sanskrit Version)</p>
      </div>
      <div className="">


      <TopBannerAd />

      <div className="card">
        <div className="displayArea">
          <div className="resultBox">
            <small>Aapne kaha (Hindi):</small>
            <p className="hindiText">{hindiText || "..."}</p>
          </div>

          <div className="resultBox" style={{ borderLeft: '5px solid #673ab7', backgroundColor: '#f3e5f5' }}>
            <small>Sanskrit Anuvada (Audio):</small>
            <p className="sanskritText">{isLoading ? "Anuvadam karoti..." : sanskritTranslation || "..."}</p>
            {sanskritTranslation && (
              <button onClick={() => speakSanskrit(sanskritTranslation)} className="speakBtn">
                🔊 Punah Shravanam (Re-play)
              </button>
            )}
          </div>
        </div>

        <div className="inputWrapper">
          <button
            onClick={startListening}
            disabled={isListening || isLoading}
            className="micBtn"
            style={{ backgroundColor: isListening ? '#ff4b2b' : '#673ab7' }}
          >
            {isListening ? '🛑' : '🎤'}
          </button>
          <p className="status">{isListening ? "Shrunvantu... (Listening in Hindi)" : "Tap the mic to speak Hindi"}</p>
        </div>
      </div>

 
    </div>
    <div><BottomAdBanner /><BottomAdBanner /></div>
   
   </div>



  );
};

export default HindiToSansikritAudio;
