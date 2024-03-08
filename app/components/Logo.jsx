"use client";

import React from "react";

export default function Logo({ width }) {
  return (
    <div className={width}>
      <span className="text-light-blue font-black text-4xl ml-1 mr-1">X</span>
      <span className="text-light-yellow font-black text-4xl">O</span>
    </div>
  );
}
