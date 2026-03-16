"use client";
import { useEffect, useRef, useState } from "react";

export default function AdBanner({ slot, format = "fluid", layout = "in-article" }) {
  const adRef = useRef(null);
  const pushed = useRef(false);
  const [filled, setFilled] = useState(false);

  const isPlaceholder = !slot || slot.startsWith("YOUR_");

  useEffect(() => {
    if (isPlaceholder || pushed.current) return;
    try {
      if (typeof window !== "undefined" && adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;

        // Check if ad filled after a delay
        const timer = setTimeout(() => {
          if (adRef.current) {
            const ins = adRef.current;
            const hasAd =
              ins.getAttribute("data-ad-status") === "filled" ||
              ins.querySelector("iframe") !== null;
            setFilled(hasAd);
          }
        }, 2000);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, [isPlaceholder]);

  if (isPlaceholder) return null;

  return (
    <div
      style={{
        margin: filled ? "2rem 0" : 0,
        textAlign: "center",
        overflow: "hidden",
        minHeight: filled ? undefined : 0,
      }}
    >
      <ins
        className="adsbygoogle"
        ref={adRef}
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout={layout}
        data-ad-format={format}
        data-ad-client="ca-pub-3451020767524769"
        data-ad-slot={slot}
      />
    </div>
  );
}
