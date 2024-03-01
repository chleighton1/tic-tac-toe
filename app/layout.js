import { Outfit } from "next/font/google";

import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Tic-Tac-Toe",
  description: "Online Tic-Tac-Toe Game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-dark-navy h-screen`}>
        {children}
      </body>
    </html>
  );
}
