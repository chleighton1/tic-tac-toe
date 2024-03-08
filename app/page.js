import Logo from "./components/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-screen h-screen">
      {/* <Board /> */}
      <Logo width="w-fit" />
      <Link
        href={{
          pathname: "/Game",
          query: {
            opponant: "CPU",
          },
        }}
      >
        <button className="text-base w-80 py-3 font-semibold text-dark-navy rounded-md shadow-box-yellow bg-light-yellow hover:bg-light-yellow-hover">
          NEW GAME VS CPU
        </button>
      </Link>
      <Link
        href={{
          pathname: "/Game",
          query: {
            opponant: "Player 2",
          },
        }}
      >
        <button className="text-base w-80 py-3 font-semibold text-dark-navy rounded-md shadow-box-blue bg-light-blue hover:bg-light-blue-hover">
          NEW GAME VS PLAYER
        </button>
      </Link>
    </div>
  );
}
