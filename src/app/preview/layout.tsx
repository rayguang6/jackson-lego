import type { Metadata } from "next";
import "../globals.css";
import { archivo, fontVariables } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Website Preview - Jackson Lego",
  description: "Preview your website design",
};

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables}>
      <body className={archivo.className}>
        {children}
      </body>
    </html>
  );
} 