import React from "react";

export default function Modal({ open, onQuit, onNextRound, winner }) {
  if (!open) return null;
  let textColor;
  if (winner == "x") {
    textColor = "light-yellow";
  } else {
    textColor = "light-blue";
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-semi-dark-navy w-full h-44 flex flex-col justify-center items-center text-silver">
        <h4 className="mb-2">OH NO YOU LOST</h4>
        <h2 className={`text-xl text-${textColor} mb-3 font-semibold`}>
          {winner?.toUpperCase()} TAKES THE ROUND
        </h2>
        <div>
          <button
            className="rounded font-semibold shadow-box-silver bg-silver outline-none hover:bg-silver-hover text-dark-navy px-3 py-1 mr-2"
            onClick={onQuit}
          >
            QUIT
          </button>
          <button
            className="rounded font-semibold shadow-box-yellow bg-light-yellow outline-none hover:bg-light-yellow-hover text-dark-navy px-3 py-1"
            onClick={onNextRound}
          >
            NEXT ROUND
          </button>
        </div>
      </div>
    </div>
  );
}
