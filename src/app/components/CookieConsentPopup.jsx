"use client";

import { useState } from "react";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoIosClose } from "react-icons/io";

const CookieConsentPopup = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <section className="flex flex-col justify-between p-6 text-white bg-black w-72 h-80 rounded-3xl">
      <header className="flex justify-between">
        <LiaCookieBiteSolid size={50} />
        <IoIosClose className="cursor-pointer" size={25} onClick={() => setVisible(false)} />
      </header>
      <footer className="flex flex-col">
        <p className="leading-8 text-[25px] mb-4">
          We use cookies to improve your user experience!
        </p>
        <button
          className="p-3 text-lg text-black bg-slate-50 rounded-lg h-15 cursor-pointer"
          onClick={() => setVisible(false)}
        >
          I like Cookies
        </button>
      </footer>
    </section>
  );
};

export default CookieConsentPopup;
