import type { Metadata } from "next";
import { Manrope, Archivo } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: '--font-manrope',
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: '--font-archivo',
});

export const metadata: Metadata = {
  title: "Jackson Lego - Web Design Generator",
  description: "Quickly create beautiful web designs with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${archivo.variable}`}>
      <body className={archivo.className}>{children}</body>
    </html>
  );
}
