// PinnedPanels.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PinnedPanels = () => {
  const panelsRef = useRef([]);

  useEffect(() => {
    panelsRef.current.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        endTrigger: ".end-pin",
        end: "top top",
        pin: true,
        pinSpacing: false,
        id: `panel-${i}`,
      });
    });
  }, []);

  return (
    <div>
      <section
        className="panel pinned bg-red-500 text-white h-screen flex items-center justify-center text-4xl font-bold"
        ref={(el) => (panelsRef.current[0] = el)}
      >
        Slide 1
      </section>
      <section
        className="panel pinned bg-blue-500 text-white h-screen flex items-center justify-center text-4xl font-bold"
        ref={(el) => (panelsRef.current[1] = el)}
      >
        Slide 2
      </section>
      <section
        className="panel pinned bg-green-500 text-white h-screen flex items-center justify-center text-4xl font-bold"
        ref={(el) => (panelsRef.current[2] = el)}
      >
        Slide 3
      </section>

      <div className="end-pin h-[200vh] bg-black text-white flex items-center justify-center text-2xl">
        End Pin Section
      </div>
    </div>
  );
};

export default PinnedPanels;
