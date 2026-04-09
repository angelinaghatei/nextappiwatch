"use client";

import { useState } from "react";

const colors = [
  { id: "navy", bg: "#3d4a6b", label: "Midnight Navy" },
  { id: "teal", bg: "#4ecdc4", label: "Sea Green" },
  { id: "rose", bg: "#f4b8a8", label: "Rose Gold" },
];

export default function ColorPicker({ onColorChange }) {
  const [selected, setSelected] = useState("navy");

  function handleSelect(color) {
    setSelected(color.id);
    if (onColorChange) onColorChange(color);
  }

  return (
    <div className="flex flex-col gap-3">
      {colors.map((color) => (
        <button
          key={color.id}
          aria-label={color.label}
          onClick={() => handleSelect(color)}
          className="w-4 h-4 rounded-full transition-transform hover:scale-125"
          style={{
            backgroundColor: color.bg,
            outline: selected === color.id ? "2px solid white" : "none",
            outlineOffset: "2px",
          }}
        />
      ))}
    </div>
  );
}
