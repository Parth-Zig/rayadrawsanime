import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raya's Website",
  description: "raya is my brother lol",
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
        <Navbar />
        {children}

        {/* <div className="fixed bottom-0 right-0 w-20 h-20 bg-pink-600 sm:bg-blue-600 md:bg-amber-200 lg:bg-green-600 xl:bg-amber-600">Responsive Box</div> */}

        <Footer />
      </body>
    </html>
  );
}
