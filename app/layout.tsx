import type { Metadata } from "next";
import "./globals.css";

const geistSans = {
  variable: "--font-geist-sans",
  style: { fontFamily: 'system-ui, sans-serif' }
};

const geistMono = {
  variable: "--font-geist-mono",
  style: { fontFamily: 'monospace' }
};

export const metadata: Metadata = {
  title: "GYM Opt-in Page",
  description: "Join GYM and transform your fitness journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
