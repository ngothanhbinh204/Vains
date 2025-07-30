import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderSection from "@/sections/Shared/HeaderSection";
import ImageProduct from "@/assets/images/product.avif";

gsap.registerPlugin(ScrollTrigger);

const OurProduct = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const textRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const lineElement = lineRef.current;

    if (!textElement || !lineElement || !sectionRef.current) return;

    textElement.style.display = "inline-block";
    textElement.style.whiteSpace = "nowrap";
    const stopPosition = textElement.offsetWidth;

    gsap.fromTo(
      lineElement,
      { width: 0 },
      {
        width: stopPosition,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top center",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className=" bg-white relative z-10">
      <div className="relative z-10 max-w-1440 px-4 md:px-6 md:pb-14 mx-auto h-auto flex flex-col">
        <HeaderSection
          theme="light"
          title="Our Product"
          headline={
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-helvetica-light leading-tight">
              Fully Autonomous, Uncompromisingly Sustainable
            </h1>
          }
          triggerRef={triggerRef}
          lineRef={lineRef}
          textRef={textRef}
        />
      </div>
    </section>
  );
};

export default OurProduct;
