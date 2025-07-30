import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderSection from "@/sections/Shared/HeaderSection";
import ContentImage from "@/sections/Home/ContentImage";
import Image from "@/assets/images/bg_why.avif";
import ReadMoreButton from "@/components/ui/ReadMoreButton";

gsap.registerPlugin(ScrollTrigger);

const WhyVains = () => {
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
          //   markers: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" bg-black
      flex items-center box-border overflow-hidden flex-col md:h-full md:mb-0 md:pb-0 relative gap-10"
    >
      <div className="md:p-8">
        <div className="relative z-10 max-w-1440 px-4 md:px-6 md:pb-14 mx-auto h-auto flex flex-col">
          <HeaderSection
            title="WHY VOLASO"
            headline={
              <h1 className="text-3xl md:text-4xl lg:text-7xl max-w-10/12 font-helvetica-light leading-tight">
                A Different Approach, Using a New Method of Manufacturing
              </h1>
            }
            triggerRef={triggerRef}
            lineRef={lineRef}
            textRef={textRef}
          />
          <div className="mt-20 max-w-full md:max-w-2/5 ml-auto">
            <p className="text-white leading-[1.4] text-md">
              Use this space to promote the business, its products or its
              services. Help people become familiar with the business and its
              offerings, creating a sense of connection and trust. Focus on what
              makes the business unique and how users can benefit from choosing
              it.
            </p>
            <ReadMoreButton
              variant="white"
              className=" mt-5 hover:text-white"
            />
          </div>
        </div>
      </div>

      <div className="w-full">
        <img className="w-full h-auto object-cover" src={Image} alt="" />
      </div>
    </section>
  );
};

export default WhyVains;
