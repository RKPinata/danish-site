import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const skModernist = localFont({ src: "./sk-modernist.otf" });
export const wildWorld = localFont({ src: "./wild-world.otf" });
