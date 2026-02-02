// BottomAdBanner.jsx
import React, { useEffect, useRef } from "react";

const BottomAdBanner = () => {
  const adRef = useRef(null);

  useEffect(() => {
    // ad script ke liye global variable
    window.atOptions = {
      key: "cf112d050bf90b1a1ddf6ab695fbde86",
      format: "iframe",
      height: 250,
      width: 300,
      params: {}
    };

    // script create karke DOM me add karna
    const script = document.createElement("script");
    script.src = "https://www.highperformanceformat.com/cf112d050bf90b1a1ddf6ab695fbde86/invoke.js";
    script.async = true;

    if (adRef.current) {
      adRef.current.appendChild(script);
    }

    // cleanup function
    return () => {
      if (adRef.current) {
        adRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div ref={adRef}></div>;
};

export default BottomAdBanner;
