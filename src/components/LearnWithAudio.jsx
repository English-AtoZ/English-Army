import React, { useState, useEffect } from 'react';
import './LearnWithAudio.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import TopBannerAd from "./TopBannerAd";
import BottomAdBanner from "./BottomAdBanner";
import Footer from '../Nav-Head/Footer';

const LearnWithAudio = () => {
  const [englishTranslation, setEnglishTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [lang, setLang] = useState('hi-IN');

  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition, isMicrophoneAvailable } = useSpeechRecognition();

  useEffect(() => {
    if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
      setError('Requires HTTPS on mobile. Deploy to secure server.');
    }

    if (!browserSupportsSpeechRecognition) {
      setError('Speech recognition not supported. Try Chrome/Samsung Internet on Android.');
    }
  }, []);

  useEffect(() => {
    if (transcript) translateToEnglish(transcript);
  }, [transcript]);

  const translateToEnglish = async (text) => {
    if (!text) return;
    setIsLoading(true);
    try {
      // const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=hi&tl=en&dt=t&q=${encodeURIComponent(text)}`;
            const BASE_URL = import.meta.env.VITE_TRANSLATE_API_URLH;
      const url = `${BASE_URL}?client=gtx&sl=hi&tl=en&dt=t&q=${encodeURIComponent(text)}`;
      const response = await fetch(url);
      const data = await response.json();
      const translated = data[0][0][0];
      setEnglishTranslation(translated);
      speakEnglish(translated);
    } catch (error) {
      setEnglishTranslation("Translation failed.");
      setError("Translation error. Check internet.");
    } finally { setIsLoading(false); }
  };

  const speakEnglish = (text) => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = 'en-US';
      msg.rate = 0.9;
      window.speechSynthesis.speak(msg);
    } else {
      setError("Speech synthesis not supported.");
    }
  };

  const startListening = () => {
    resetTranscript();
    setEnglishTranslation('');
    setError('');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(() => {
          SpeechRecognition.startListening({ language: lang, continuous: false });
        })
        .catch((err) => {
          setError("Microphone denied. Allow in browser settings.");
        });
    } else {
      SpeechRecognition.startListening({ language: lang, continuous: false });
    }
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  return (
   <div>
         <div style={{height:'100%'}} className="container">
      <div  className="innerWrap">

        <TopBannerAd />

        <div className=" displayArea">
          <div className="resultBox">
            <small>{lang === 'hi-IN' ? 'Hindi Input' : 'English Input'}:</small>
            <p className="hindiText">{transcript || "..."}</p>
          </div>

          <div className="resultBox" style={{ borderLeft: '5px solid #2e7d32', backgroundColor: '#e8f5e9' }}>
            <small>English Translation:</small>
            <p className="engText">{isLoading ? "Translating..." : englishTranslation || "..."}</p>
          </div>
        </div>

        <div className="inputWrapper">
          <button style={{color:'green', marginRight: '60px'}} onClick={startListening} disabled={listening || isLoading} className="micBtn">Click Speak</button>

          <button onClick={stopListening} disabled={!listening} className="micBtn" style={{ marginLeft: '60px', color: 'red' }}>Stop</button>

          <p className="status">{listening ? "Listening... Speak now!" : "Tap Start to Begin"}</p>
          {error && <p className="error">{error}</p>}

          <div style={{ marginTop: '5px' }}>
            <button onClick={() => setLang('hi-IN')} className="langBtn">Hindi</button>
            <button onClick={() => setLang('en-US')} className="langBtn">English</button>
          </div>

          
        </div>
        

      </div>
      
    </div>
    <div><BottomAdBanner /><BottomAdBanner /></div>
    
   </div>





  );
};

export default LearnWithAudio;
