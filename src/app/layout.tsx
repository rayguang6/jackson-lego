import type { Metadata } from "next";
import "./globals.css";
import { DesignProvider } from "@/lib/contexts/DesignContext";
import { archivo, fontVariables } from "@/lib/fonts";

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
    <html lang="en" className={fontVariables}>
      <body className={archivo.className}>
        <DesignProvider>
          {children}
        </DesignProvider>
      </body>
    </html>
  );
}
