import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XmortForm",
  description: "A very xmort survey form",
  authors: {
    name: "JerichoFletcher",
    url: "https://github.com/JerichoFletcher",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
