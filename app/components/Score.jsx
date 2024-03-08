import React from "react";

export default function Score({ outcome, totalScore, color }) {
  return (
    <div
      className={`rounded shadow-box font-dark-navy text-center flex flex-col gap-1 justify-center text-xl ${color} h-14 min-w-20 max-w-24`}
    >
      <p className="text-xs leading-4">{outcome}</p>
      <p className="font-bold text-lg leading-4">{totalScore}</p>
    </div>
  );
}
