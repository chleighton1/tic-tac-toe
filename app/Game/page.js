"use client";

import { useSearchParams } from "next/navigation";
import Board from "../components/Board";

export default function Home() {
  const serachParams = useSearchParams();
  const opponant = serachParams.get("opponant");

  return (
    <div className="flex flex-col gap-4 justify-center items-center sm:w-screen sm:h-screen pt-2">
      <Board opponant={opponant} />
    </div>
  );
}
