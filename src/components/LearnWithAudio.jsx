import React, { useState, useEffect, useRef } from 'react';
import './LearnWithAudio.css';
import TopBannerAd from "./TopBannerAd";
import BottomAdBanner from "./BottomAdBanner";
import Footer from '../Nav-Head/Footer';
import { Link } from 'react-router-dom';

const LearnWithAudio = () => {
  const [isListening, setIsListening] = useState(false);
  const [hindiText, setHindiText] = useState('');
  const [englishTranslation, setEnglishTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const recognitionRef = useRef(null);

  // Initialize microphone like Sanskrit page
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = 'hi-IN';
      recognitionRef.current.continuous = false;

      recognitionRef.current.onresult = async (event) => {
        const text = event.results[0][0].transcript;
        setHindiText(text);
        await translateToEnglish(text);
      };

      recognitionRef.current.onend = () => setIsListening(false);
      recognitionRef.current.onerror = () => setIsListening(false);
    } else {
      setError(
        'Speech recognition not supported. Use Chrome/Samsung Internet on Android.'
      );
    }
  }, []);

  const translateToEnglish = async (text) => {
    if (!text) return;
    setIsLoading(true);
    try {
      const BASE_URL = import.meta.env.VITE_TRANSLATE_API_URLH;
      const url = `${BASE_URL}?client=gtx&sl=hi&tl=en&dt=t&q=${encodeURIComponent(
        text
      )}`;
      const response = await fetch(url);
      const data = await response.json();
      const translated = data[0][0][0];
      setEnglishTranslation(translated);
      speakEnglish(translated);
    } catch {
      setEnglishTranslation('Translation failed.');
      setError('Translation error. Check internet.');
    } finally {
      setIsLoading(false);
    }
  };

  const speakEnglish = (text) => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = 'en-US';
      msg.rate = 0.9;
      window.speechSynthesis.speak(msg);
    } else {
      setError('Speech synthesis not supported.');
    }
  };

  const startListening = () => {
    setHindiText('');
    setEnglishTranslation('');
    setError('');
    setIsListening(true);
    recognitionRef.current.start();
  };

  const stopListening = () => {
    recognitionRef.current.stop();
    setIsListening(false);
  };

  return (
    <div>
      <div className="header">
        <h3>🎙️ Hindi to English Audio Tutor</h3>
        <p>Developed by P K</p>
      </div>

      <TopBannerAd />

      <div className="card">
        <div className="displayArea">
          {/* Hindi Input */}
          <div
            className="resultBox"
            style={{ borderLeft: '5px solid red', backgroundColor: '#ffe5e5' }}
          >
            <small>Hindi Input:</small>
            <p className="hindiText">{hindiText || '...'}</p>
          </div>

          {/* English Output */}
          <div
            className="resultBox"
            style={{ borderLeft: '5px solid blue', backgroundColor: '#e5f0ff' }}
          >
            <small>English Translation:</small>
            <p className="engText">
              {isLoading ? 'Translating...' : englishTranslation || '...'}
            </p>
            {englishTranslation && (
              <button onClick={() => speakEnglish(englishTranslation)} className="speakBtn">
                🔊 Re-play
              </button>
            )}
          </div>
        </div>

        {/* Microphone */}
        <div className="inputWrapper">
          <button
            onClick={startListening}
            disabled={isListening || isLoading}
            className="micBtn"
            style={{ backgroundColor: isListening ? '#ff4b2b' : '#673ab7' }}
          >
            {isListening ? '🛑' : '🎤'}
          </button>
          <p className="status">{isListening ? 'Listening... Speak now!' : 'Tap the mic to speak Hindi'}</p>
          {error && <p className="error">{error}</p>}
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

export default LearnWithAudio;
