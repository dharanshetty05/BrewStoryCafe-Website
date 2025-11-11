import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The BrewStory Café | Where Stories Brew",
  description: "A cozy café serving handcrafted coffees, artisanal pastries, and heartwarming stories.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-[#FFF9F5] text-[#3E2E26] overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
