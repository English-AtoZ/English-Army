// TopBannerAd.jsx
import React, { useEffect, useRef } from "react";

const TopBannerAd = () => {
  const adRef = useRef(null);

  useEffect(() => {
    if (!adRef.current) return;

    // create a unique script to avoid overwriting other ads
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;

    // IIFE to safely set window.atOptions and invoke ad
    script.innerHTML = `
      (function() {
        window.atOptions = {
          key: "b08bb8c33e3d7563562686618ec84848",
          format: "iframe",
          height: 90,
          width: 728,
          params: {}
        };
        var d = document, s = d.createElement('script');
        s.type = 'text/javascript';
        s.src = 'https://www.highperformanceformat.com/b08bb8c33e3d7563562686618ec84848/invoke.js';
        s.async = true;
        d.getElementsByTagName('head')[0].appendChild(s);
      })();
    `;

    adRef.current.appendChild(script);

    // cleanup function
    return () => {
      if (adRef.current) {
        adRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div ref={adRef}></div>;
};

export default TopBannerAd;
