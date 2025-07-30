import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderSection from "@/sections/Shared/HeaderSection";
import ImageProduct from "@/assets/images/product.avif";

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
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
    <section
      ref={sectionRef}
      className="bg-black text-white min-h-screen relative"
    >
      <div className="relative z-10 max-w-1440 px-4 md:px-6 mx-auto min-h-screen flex flex-col">
        <HeaderSection
          theme="dark"
          title="VISION"
          headline={
            <h1 className="text-3xl md:text-4xl lg:text-7xl max-w-10/12 font-helvetica-light leading-tight">
              We’re Here to Revolutionize the World of Local Shipping
            </h1>
          }
          triggerRef={triggerRef}
          lineRef={lineRef}
          textRef={textRef}
        />

        <div className="flex flex-col md:flex-row justify-between md:items-end gap-10 md:gap-0 mt-14 md:mt-auto">
          <div className="text-white text-md md:text-md leading-relaxed max-w-[400px] md:pb-20 lg:pb-32">
            <p>
              This is the space to introduce visitors to the business or brand.
              Briefly explain who's behind it, what it does and what makes it
              unique. Share its core values and what this site has to offer.
            </p>
          </div>
          <div className="w-full md:min-w-96 md:w-1/2 flex justify-center md:justify-end">
            <img
              src={ImageProduct}
              alt="Illustration"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
