import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fairyDust = localFont({
  src: './fonts/FairyDustB.ttf',
  variable: '--font-fairy-dust',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mithibai Kshitij",
  description: "Something Spectacular is on the Horizon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fairyDust.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Toaster position="bottom-center" theme="dark" />
      </body>
    </html>
  );
}
