// src/hooks/useStackedPin.jsx
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useStackedPin(panelRef, index) {
  useEffect(() => {
    if (!panelRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: panelRef.current,
      start: "top top",
      endTrigger: ".end-pin",
      end: "top top",
      pin: true,
      pinSpacing: false,
      id: index + 1,
    });

    return () => trigger.kill();
  }, [panelRef, index]);
}
