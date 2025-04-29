import type { Metadata } from "next";
import "../globals.css";
import { archivo, fontVariables } from "@/lib/fonts";
import StyleProvider from "@/lib/contexts/StyleProvider";
// Removed the import for StyleProvider due to the error
export const metadata: Metadata = {
  title: "Website Preview - One Click Design",
  description: "Preview your website design",
};

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyleProvider>
      <html lang="en" className={fontVariables}>
        <body className={archivo.className}>
          {children}
        </body>
      </html>
    </StyleProvider>
  );
} 