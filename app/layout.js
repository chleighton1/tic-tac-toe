import { Outfit } from "next/font/google";

import "./globals.css";
import { Suspense } from "react";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Tic-Tac-Toe",
  description: "Online Tic-Tac-Toe Game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-dark-navy h-screen`}>
        <Suspense fallback="loading...">{children}</Suspense>
      </body>
    </html>
  );
}
