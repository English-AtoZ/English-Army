import React, { useState, useEffect, useRef } from 'react';
import './LearnWithAudioEnglish.css';
import TopBannerAd from "./TopBannerAd";
import BottomAdBanner from "./BottomAdBanner";
import Footer from '../Nav-Head/Footer';

const LearnWithAudioEnglish = () => {
  const [isListening, setIsListening] = useState(false);
  const [englishText, setEnglishText] = useState('');
  const [hindiTranslation, setHindiTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
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
      // const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q=${encodeURIComponent(text)}`;
            const BASE_URL = import.meta.env.VITE_TRANSLATE_API_URLE;
      const url = `${BASE_URL}?client=gtx&sl=en&tl=hi&dt=t&q=${encodeURIComponent(text)}`;
      const response = await fetch(url);
      const data = await response.json();
      const translated = data[0][0][0];
      setHindiTranslation(translated);
      speakHindi(translated);
    } catch (error) {
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
        <div style={{height:'100%'}} className="container">
      <div className="innerWrap">

        <TopBannerAd />

        <div className="displayArea">
          <div className="resultBox">
            <small>English Sentences (What you said):</small>
            <p className="engText">{englishText || "..."}</p>
          </div>

          <div className="resultBox" style={{ borderLeft: '5px solid #2e7d32', backgroundColor: '#e8f5e9' }}>
            <small>Hindi Translation:</small>
            <p className="hindiText">{isLoading ? "Translating..." : hindiTranslation || "..."}</p>
          </div>
        </div>

        <div className="inputWrapper">
          <button style={{color:'red', margin:'50px'}} onClick={startListening} disabled={isListening || isLoading} className="micBtn">
            {isListening ? 'Listening...' : 'Click Speak'}
          </button>
          <p className="status">{isListening ? "Listening... Speak in English" : "English to Hindi Practice"}</p>
        </div>

      </div>
    </div>
    <div><BottomAdBanner /><BottomAdBanner /></div>
    
   </div>



  );
};

export default LearnWithAudioEnglish;
