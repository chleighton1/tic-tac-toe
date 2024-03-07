import React from "react";

export default function Modal({ open, onQuit, onNextRound, winner }) {
  if (!open) return null;
  console.log(winner);
  const textColor = winner == "x" ? "text-light-blue" : "text-light-yellow";
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-semi-dark-navy w-full h-44 flex flex-col gap-2 justify-center items-center text-silver">
        {winner == "tie" ? (
          <h2 className={`text-3xl mb-3 font-semibold flex items-center`}>
            ROUND TIED
          </h2>
        ) : (
          <h2
            className={`text-3xl ${textColor} mb-3 font-semibold flex items-center`}
          >
            <span className="text-4xl font-extrabold mr-2">
              {winner?.toUpperCase()}
            </span>
            TAKES THE ROUND
          </h2>
        )}
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
