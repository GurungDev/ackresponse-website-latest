
import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';
import { Toaster } from "react-hot-toast";
import Loading from "./loading";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/footer"), {ssr: false});
const ScrollToTopButton = dynamic(() => import("@/components/goToTop"), {ssr: false});
const Navbar = dynamic(() => import("@/components/navbar"), {ssr: false});
 
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
