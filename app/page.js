"use client";

import { useState } from "react";
import Board from "./components/Board";

export default function Game() {
  return (
    <div className="">
      <div className="flex justify-center items-center mt-32">
        <Board />
      </div>
    </div>
  );
}
