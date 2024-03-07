"use client";

import { useState } from "react";
import Board from "./components/Board";
import Logo from "./components/Logo";

export default function Game() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center sm:w-screen sm:h-screen">
      {/* <Board /> */}
      <Logo width="w-fit" />
      <button className="w-64 text-sm py-1 font-semibold text-dark-navy rounded shadow-box-yellow bg-light-yellow hover:bg-light-yellow-hover">
        NEW GAME VS CPU
      </button>
      <button className="w-64 text-sm py-1 font-semibold text-dark-navy rounded shadow-box-blue bg-light-blue hover:bg-light-blue-hover">
        NEW GAME VS PLAYER
      </button>
    </div>
  );
}
