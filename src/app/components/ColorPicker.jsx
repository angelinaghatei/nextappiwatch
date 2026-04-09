"use client";

import { watches } from "./WatchDisplay";

export default function ColorPicker({ selectedId, onColorChange }) {
  return (
    <div className="flex flex-col gap-3">
      {watches.map((watch) => (
        <button
          key={watch.id}
          aria-label={watch.label}
          onClick={() => onColorChange?.(watch)}
          className="w-4 h-4 rounded-full transition-transform hover:scale-125"
          style={{
            backgroundColor: watch.color,
            outline: selectedId === watch.id ? "2px solid white" : "none",
            outlineOffset: "2px",
          }}
        />
      ))}
    </div>
  );
}
