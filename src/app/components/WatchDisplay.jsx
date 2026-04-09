"use client";

import Image from "next/image";

export const watches = [
  {
    id: "navy",
    color: "#3d4a6b",
    bg: "rgba(80, 90, 115, 0.55)",
    label: "Midnight Navy",
    imageSrc: "/watches/blackwatch.webp",
  },
  {
    id: "teal",
    color: "#4ecdc4",
    bg: "rgba(78, 205, 196, 0.55)",
    label: "Sea Green",
    imageSrc: "/watches/bluewatch.webp",
  },
  {
    id: "rose",
    color: "#f4b8a8",
    bg: "rgba(244, 184, 168, 0.55)",
    label: "Rose Gold",
    imageSrc: "/watches/pinkwatch.webp",
  },
];

export default function WatchDisplay({ selectedId, onColorChange }) {
  const selected = watches.find((w) => w.id === selectedId) ?? watches[0];

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {/* Hovedbillede */}
      <div className="relative w-80 h-80 flex items-center justify-center">
        <Image
          src={selected.imageSrc}
          alt={selected.label}
          width={320}
          height={320}
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-6 items-center">
        {watches.map((watch) => (
          <div
            key={watch.id}
            onClick={() => onColorChange?.(watch)}
            style={{
              width: "140px",
              height: "100px",
              backgroundColor: watch.bg,
              outline: selectedId === watch.id ? "3px solid white" : "none",
            }}
            className="relative flex items-center justify-center rounded-2xl overflow-hidden cursor-pointer"
          >
            <Image
              src={watch.imageSrc}
              alt={watch.label}
              width={110}
              height={90}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
