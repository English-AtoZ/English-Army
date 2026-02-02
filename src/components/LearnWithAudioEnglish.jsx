import React, { useState, useEffect, useRef } from 'react';
import './LearnWithAudioEnglish.css';
import TopBannerAd from "./TopBannerAd";
import BottomAdBanner from "./BottomAdBanner";
import Footer from '../Nav-Head/Footer';
import { Link } from 'react-router-dom';

const LearnWithAudioEnglish = () => {
  const [isListening, setIsListening] = useState(false);
  const [englishText, setEnglishText] = useState('');
  const [hindiTranslation, setHindiTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.continuous = false;

      recognitionRef.current.onresult = async (event) => {
        const text = event.results[0][0].transcript;
        setEnglishText(text);
        await translateToHindi(text);
      };

      recognitionRef.current.onend = () => setIsListening(false);
      recognitionRef.current.onerror = () => setIsListening(false);
    }
  }, []);

  const translateToHindi = async (text) => {
    if (!text) return;
    setIsLoading(true);
    try {
      const BASE_URL = import.meta.env.VITE_TRANSLATE_API_URLE;
      const url = `${BASE_URL}?client=gtx&sl=en&tl=hi&dt=t&q=${encodeURIComponent(text)}`;
      const response = await fetch(url);
      const data = await response.json();
      const translated = data[0][0][0];
      setHindiTranslation(translated);
      speakHindi(translated);
    } catch {
      setHindiTranslation("Translation failed. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const speakHindi = (text) => {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'hi-IN';
    msg.rate = 0.9;
    window.speechSynthesis.speak(msg);
  };

  const startListening = () => {
    setEnglishText('');
    setHindiTranslation('');
    setIsListening(true);
    recognitionRef.current.start();
  };

  return (
    <div>
      {/* Header same style as Sanskrit */}
      <div className="header">
        <h3>🎙️ English to Hindi Audio Tutor</h3>
        <p>Developed by P K</p>
      </div>

      <TopBannerAd />

      {/* Card layout same as Sanskrit */}
      <div className="card">
        <div className="displayArea">

          {/* English input */}
          <div
            className="resultBox"
            style={{ borderLeft: '5px solid blue', backgroundColor: '#e5f0ff' }}
          >
            <small>English (What you said):</small>
            <p className="engText">{englishText || "..."}</p>
          </div>

          {/* Hindi output */}
          <div
            className="resultBox"
            style={{ borderLeft: '5px solid red', backgroundColor: '#ffe5e5' }}
          >
            <small>Hindi Translation (Audio):</small>
            <p className="hindiText">
              {isLoading ? "Translating..." : hindiTranslation || "..."}
            </p>

            {hindiTranslation && (
              <button
                onClick={() => speakHindi(hindiTranslation)}
                className="speakBtn"
              >
                🔊 Re-play
              </button>
            )}
          </div>

        </div>

        {/* Mic section same as Sanskrit */}
        <div className="inputWrapper">
          <button
            onClick={startListening}
            disabled={isListening || isLoading}
            className="micBtn"
            style={{ backgroundColor: isListening ? '#ff4b2b' : '#673ab7' }}
          >
            {isListening ? '🛑' : '🎤'}
          </button>

          <p className="status">
            {isListening
              ? "Listening... Speak in English"
              : "Tap the mic to speak English"}
          </p>
        </div>
      </div>

      <div className="text-center mt-4">
        <Link to="/"  onClick={() => setOpen(false)} className="text-sm text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>

      <BottomAdBanner />
      <Footer />
    </div>
  );
};

export default LearnWithAudioEnglish;
