import type { Metadata } from "next";
import "./globals.css";
import { archivo, fontVariables } from "@/lib/fonts";
export const metadata: Metadata = {
  title: "One Click Design - by Yew Brothers",
  description: "Quickly create beautiful web designs with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables} style={{ backgroundColor: '#F5F5F5', height: '100vh' }}>
      <body className={archivo.className}>
            {children}
      </body>
    </html>
  );
}
