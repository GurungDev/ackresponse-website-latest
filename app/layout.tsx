
import "../style/background_images.css";
import "../style/globals.css";
import "../style/button_animation.css";

import "../style/insight_animation.css";
import "../style/text_animation.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";



import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { Suspense } from "react";
import ScrollToTopButton from "@/components/goToTop";
import { Inter } from "next/font/google";

import Script from 'next/script';

// import "swiper/css/effect-fade" --> this css module seems to have a bug

import { Toaster } from "react-hot-toast";
import Loading from "./loading";
// Define your metadata
export const metadata: Metadata = {
  title: "ackresponse",
  description: "Company Description",
};

// Create the Inter font with "latin" subset
const inter = Inter({ subsets: ["latin"] });

// Define the RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" as="style"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" as="style" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" as="style" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" as="style"/>
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" as="style"/>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* Google Analytics Script */}
            <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-JNBK97877Z`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JNBK97877Z');
          `}
        </Script>   
      </head>
      <body className={inter.className}>
        <Suspense fallback={<Loading/>}/>
        <Toaster position="top-center"/> 
        <Navbar />

        {children}
        <ScrollToTopButton />
        <Footer />

      </body>
    </html>
  );
}
