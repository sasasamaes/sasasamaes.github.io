"use client";
import { useEffect, useRef } from "react";

export default function AdBanner({ slot, format = "fluid", layout = "in-article" }) {
  const adRef = useRef(null);
  const pushed = useRef(false);

  const isPlaceholder = !slot || slot.startsWith("YOUR_");

  useEffect(() => {
    if (isPlaceholder || pushed.current) return;
    try {
      if (typeof window !== "undefined" && adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      }
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, [isPlaceholder]);

  if (isPlaceholder) return null;

  return (
    <div style={{ margin: "2rem 0", textAlign: "center" }}>
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
