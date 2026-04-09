"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import ColorPicker from "./components/ColorPicker";
import WatchDisplay, { watches } from "./components/WatchDisplay";
import CookieConsentPopup from "./components/CookieConsentPopup";

const watchIds = watches.map((w) => w.id);

export default function Home() {
  const [selectedId, setSelectedId] = useState(watchIds[0]);

  function navigate(dir) {
    const current = watchIds.indexOf(selectedId);
    const next = (current + dir + watchIds.length) % watchIds.length;
    setSelectedId(watchIds[next]);
  }

  function handleColorChange(watch) {
    setSelectedId(watch.id);
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#b0bfd4" }}
    >
      <Navbar />

      <main className="flex flex-1 items-center justify-between px-16 py-10 relative">
        {/* Tekst */}
        <div className="flex flex-col">
          <h1
            style={{
              width: "680px",
              maxHeight: "258px",
              fontSize: "64px",
              lineHeight: "1.2",
              marginBottom: "82px",
            }}
            className="font-bold text-white"
          >
            The Perfect Moment
            <span className="font-light block">Between Past And</span>
            <span className="font-light block">Future.</span>
          </h1>
          <button className="border-2 border-white text-white rounded-full px-10 py-3 w-fit text-sm">
            Buy Now
          </button>
        </div>

        {/* Ur */}
        <div className="flex-1 flex justify-center">
          <WatchDisplay selectedId={selectedId} onColorChange={handleColorChange} />
        </div>

        {/* Farver */}
        <div className="flex flex-col justify-center">
          <ColorPicker selectedId={selectedId} onColorChange={handleColorChange} />
        </div>

        {/* Navigation */}
        <div className="absolute bottom-8 left-16 flex items-center gap-3 text-white text-sm">
          <span className="cursor-pointer" onClick={() => navigate(-1)}>←</span>
          <span>{watchIds.indexOf(selectedId) + 1}</span>
          <span className="cursor-pointer" onClick={() => navigate(1)}>→</span>
        </div>
      </main>

      <div className="fixed bottom-10 right-10 z-50">
        <CookieConsentPopup />
      </div>
    </div>
  );
}
