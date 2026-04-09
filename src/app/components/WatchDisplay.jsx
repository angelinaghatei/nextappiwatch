"use client";

import { useState } from "react";
import Image from "next/image";

const watches = [
  {
    id: "navy",
    bg: "rgba(80, 90, 115, 0.55)",
    label: "Midnight Navy",
    imageSrc: "/watches/thumb-navy.png",
    thumbSrc: "/watches/thumb-navy.png",
  },
  {
    id: "teal",
    bg: "rgba(78, 205, 196, 0.55)",
    label: "Sea Green",
    imageSrc: "/watches/watch-teal.png",
    thumbSrc: "/watches/watch-teal.png",
  },
  {
    id: "rose",
    bg: "rgba(244, 184, 168, 0.55)",
    label: "Rose Gold",
    imageSrc: "/watches/watch-rose.png",
    thumbSrc: "/watches/watch-rose.png",
  },
];

export default function WatchDisplay() {
  const [selected] = useState(watches[0]);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {/* Main watch image */}
      <div className="relative w-80 h-80 flex items-center justify-center">
        <Image src={selected.imageSrc} alt={selected.label} width={320} height={320} className="object-contain drop-shadow-2xl" priority />
      </div>

      {/* Thumbnail row */}
      <div className="flex gap-6 items-center">
        {watches.map((watch) => (
          <div key={watch.id} style={{ width: "140px", height: "90px" }} className="relative flex items-center justify-center">
            {watch.id === "navy" ? (
              <>
                <div className="absolute inset-1 rounded-2xl" style={{ backgroundColor: "#6b7280" }} />
                <Image src={watch.thumbSrc} alt={watch.label} width={80} height={80} className="object-contain relative z-10 mt-1" />
              </>
            ) : (
              <Image src={watch.thumbSrc} alt={watch.label} width={140} height={100} className="object-contain" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
