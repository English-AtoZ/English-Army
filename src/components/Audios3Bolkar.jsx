import React, { useState } from 'react';
import './Audios3Bolkar.css';
import TopBannerAd from "./TopBannerAd";
import BottomAdBanner from "./BottomAdBanner";
import Footer from '../Nav-Head/Footer';


const Audios3Bolkar = () => {
  const [paragraph, setParagraph] = useState('');
  const [clickedWord, setClickedWord] = useState('');
  const [translation, setTranslation] = useState('');
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);




  const speakHindi = (text) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hi-IN';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const speakEnglish = (e, word) => {
    e.stopPropagation();
    window.speechSynthesis.cancel();
    const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
    const utterance = new SpeechSynthesisUtterance(cleanWord);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) { alert("Browser not supported"); return; }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setParagraph((prev) => prev + (prev ? " " : "") + transcript);
      setIsListening(false);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  const translateWord = async (word) => {
    const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
    if (!cleanWord) return;
    setClickedWord(cleanWord);
    setLoading(true);
    setTranslation('...');
    try {

      const BASE_URL = import.meta.env.VITE_TRANSLATE_API_URLP;
      const url = `${BASE_URL}?client=gtx&sl=en&tl=hi&dt=t&q=${encodeURIComponent(cleanWord)}`;
      const response = await fetch(url);
      const data = await response.json();
      setTranslation(data[0][0][0]);
      speakHindi(data[0][0][0]);
    } catch { setTranslation("N/A"); }
    finally { setLoading(false); }
  };

  const words = paragraph.split(/\s+/).filter(w => w !== "");

  return (




   <div>
            <div className="audios-container">
      <div className="textarea-section">
        <textarea
          rows="5"
          placeholder="Type karein ya Mic button par click karke boleinn..."
          value={paragraph}
          onChange={(e) => setParagraph(e.target.value)}
        />
        <button
          onClick={startListening}
          className="mic-button"
          style={{ background: isListening ? '#ff4b2b' : '#007bff', color: 'white' }}
        >
          {isListening ? '🛑' : '🎤'}
        </button>
        {isListening && <p style={{ color: '#ff4b2b', fontSize: '20px', marginTop: '5px' }}>Listening... Please speak in English</p>}
      </div>

      <div className="paragraph-display">
        {words.length > 0 ? words.map((word, index) => (
          <span key={index}>
            <span
              onClick={() => translateWord(word)}
              style={{ cursor: 'pointer', padding: '2px 6px', borderRadius: '6px', color: '#2c3e50', backgroundColor: '#f1f3f4', fontWeight: '500' }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#d1e7ff'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#f1f3f4'}
            >
              {word}
            </span>
            <button onClick={(e) => speakEnglish(e, word)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', padding: '0 2px', color: '#007bff', marginLeft: '4px' }}>🔈</button>
          </span>
        )) : <p style={{ color: '#999', textAlign: 'center' }}>Aapka text yahan clickable words mein dikhega...</p>}
      </div>

      {clickedWord && (
        <div className="result-card">
          <div style={{ fontSize: '20px', color: '#555' }}>Word: <span style={{ color: '#1b5e20', fontWeight: 'bold' }}>{clickedWord}</span></div>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#2e7d32', marginTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
            {loading ? '...' : translation}
            {!loading && <button onClick={() => speakHindi(translation)} style={{ background: 'none', border: 'none', fontSize: '28px', cursor: 'pointer' }}>🔊</button>}
          </div>
        </div>
      )}


    </div>
    <div><BottomAdBanner /><BottomAdBanner /></div>
   
   </div>
  );
};

export default Audios3Bolkar;
