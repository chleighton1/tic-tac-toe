"use client";

export default function Square({ value, onSquareClick }) {
  const textColor = value == "x" ? "text-light-blue" : "text-light-yellow";
  return (
    <button
      onClick={onSquareClick}
      className={`rounded shadow-box font-black text-5xl bg-semi-dark-navy min-h-20 max-h-24 min-w-20 max-w-24 ${textColor}`}
    >
      {value?.toUpperCase()}
    </button>
  );
}
