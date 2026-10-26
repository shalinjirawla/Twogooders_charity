import { Playfair_Display, Nunito } from "next/font/google";

// Fonts for the redesigned marketing pages (serif headings, rounded sans body)
export const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"], style: ["normal", "italic"], variable: "--font-playfair-display" });
export const nunito = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-nunito" });

export const premiumFontClass = `${playfairDisplay.variable} ${nunito.variable}`;
