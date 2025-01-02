
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/goToTop";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { Suspense } from "react";
import Script from 'next/script';

// import "swiper/css/effect-fade" --> this css module seems to have a bug

import { Toaster } from "react-hot-toast";
import Loading from "./loading";

import "../style/background_images.css";
import "../style/button_animation.css";
import "../style/globals.css";
import "../style/insight_animation.css";
import "../style/text_animation.css";
  import "swiper/css";
  import "swiper/css/effect-creative";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
// Define your metadata
export const metadata: Metadata = {
  title: "ackresponse",
  description: "Company Description",
};

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Google Analytics Scripts */}
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
      <body className={`${inter.className} antialiased`}>
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
