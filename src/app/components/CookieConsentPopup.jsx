"use client";

import { useState } from "react";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoIosClose } from "react-icons/io";

const CookieConsentPopup = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <section className="cookie-consent-popup">
      <header className="cookie-consent-popup-header">
        <LiaCookieBiteSolid size={50} />
        <IoIosClose className="pointer" size={25} onClick={() => setVisible(false)} />
      </header>
      <footer className="cookie-consent-popup-footer">
        <p className="cookie-consent-popup-paragraph">
          We use cookies to improve your user experience!
        </p>
        <button className="cookie-consent-popup-cta pointer" onClick={() => setVisible(false)}>
          I like Cookies
        </button>
      </footer>
    </section>
  );
};

export default CookieConsentPopup;
