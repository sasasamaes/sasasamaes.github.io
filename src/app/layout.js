import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Headermain from "@/header";
import { Socialicons } from "@/components/socialicons";
import ThemeProvider from "@/components/themetoggle/ThemeProvider";
import AnimatedCursorWrapper from "@/components/AnimatedCursorWrapper";
import Script from "next/script";

export const metadata = {
  title: "Francisco Campos Diaz",
  description: "I'm a Full Stack Developer in love with Programming, Desing and Swim.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700&family=Marcellus&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>
          <AnimatedCursorWrapper />
          <Headermain />
          <div className="s_c">
            {children}
            <Socialicons />
          </div>
        </ThemeProvider>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
