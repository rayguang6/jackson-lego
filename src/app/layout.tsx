import type { Metadata } from "next";
import { Manrope, Archivo, Inter, Montserrat, Merriweather } from "next/font/google";
import "./globals.css";
import { DesignProvider } from "@/lib/contexts/DesignContext";

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: '--font-manrope',
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: '--font-archivo',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
});

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-merriweather',
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
    <html lang="en" className={`${manrope.variable} ${archivo.variable} ${inter.variable} ${montserrat.variable} ${merriweather.variable}`}>
      <body className={archivo.className}>
        <DesignProvider>
          {children}
        </DesignProvider>
      </body>
    </html>
  );
}
