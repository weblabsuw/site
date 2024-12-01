import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const unbounded = localFont({
  src: "./fonts/UnboundedVF.ttf",
  variable: "--font-unbounded",
  weight: "200 900",
});

export const metadata: Metadata = {
  title: "WebLabs @ UW",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} antialiased bg-surface text-onSurface`}
      >
        {children}
      </body>
    </html>
  );
}
