"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "@/assets/images/Battery.avif";
import ReadMoreButton from "@/components/ui/ReadMoreButton";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
  const sectionRef = useRef(null);
  const electricRangeRefs = useRef([]);
  const hrRefs = useRef([]);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    electricRangeRefs.current.forEach((el, index) => {
      if (el) {
        gsap.set(el, {
          y: 30,
          opacity: 0,
        });

        tl.to(
          el,
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          index * 0.5
        );
      }
    });

    hrRefs.current.forEach((hr) => {
      if (hr) {
        // Set initial state
        gsap.set(hr, {
          width: "0%",
          transformOrigin: "left center",
        });

        tl.to(
          hr,
          {
            width: "100%",
            duration: 1.5,
            ease: "power2.inOut",
          },
          0
        );
      }
    });

    if (progressBarRef.current) {
      // Set initial state
      gsap.set(progressBarRef.current, {
        height: "0%",
        transformOrigin: "bottom center",
      });

      // Add to timeline - BẮT ĐẦU CÙNG LÚC (time = 0)
      tl.to(
        progressBarRef.current,
        {
          height: "40%", // 2/5 = 40%
          duration: 1.5,
          ease: "power2.inOut",
        },
        0 // Bắt đầu ngay lập tức
      );
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Helper function to add refs to arrays
  const addToElectricRangeRefs = (el) => {
    if (el && !electricRangeRefs.current.includes(el)) {
      electricRangeRefs.current.push(el);
    }
  };

  const addToHrRefs = (el) => {
    if (el && !hrRefs.current.includes(el)) {
      hrRefs.current.push(el);
    }
  };

  return (
    <div
      ref={sectionRef}
      className="h-screen bg-white flex items-center box-border overflow-hidden relative mb-10 md:flex-col md:h-screen p-4 md:p-8"
    >
      <div className="h-full relative bg-white px-6 py-8 lg:px-12 rounded-2xl shadow-itemCus mx-auto grid md:grid-cols-2 lg:flex-row items-center">
        <div className="flex-shrink-0 space-y-4 relative md:space-y-8 pl-8 md:pl-14 md:px-8 lg:pl-20 lg:px-12">
          <div className="overflow-hidden absolute h-[90%] w-[1px] left-0 top-1/2 -translate-y-1/2">
            <div className="h-full relative bg-gray-200">
              <div
                ref={progressBarRef}
                className="w-full absolute top-1/4 left-0 z-10 bg-black"
              />
            </div>
          </div>

          <h2 className="text-sm md:text-2xl font-grotesk text-black uppercase">
            OPTIMIZED BATTERY EFFICIENCY
          </h2>

          <div className="space-y-4 md:space-y-6">
            <div
              ref={addToElectricRangeRefs}
              className="flex flex-row gap-5 items-center"
            >
              <span className="text-3xl md:text-4xl font-helvetica-light">
                223 Mi
              </span>
              <p className="text-xl text-baseGray">Electric Range</p>
            </div>

            <hr ref={addToHrRefs} className="border-gray-300" />

            <div
              ref={addToElectricRangeRefs}
              className="flex flex-row gap-5 items-center"
            >
              <span className="text-3xl md:text-4xl font-helvetica-light">
                223 Mi
              </span>
              <p className="text-xl text-baseGray">Electric Range</p>
            </div>
          </div>

          <p className="leading-[1.4] text-md">
            This is a space to share more about the business: who's behind it,
            what it does and what this site has to offer. It's an opportunity to
            tell the story behind the business or describe a special service or
            product it offers. You can use this section to share the company
            history or highlight a particular feature that sets it apart from
            competitors.
          </p>

          <ReadMoreButton className="text-baseGray hover:text-black" />
        </div>

        <div className="flex-1 overflow-hidden h-fill-available flex items-center justify-center">
          <img
            className="h-full w-auto object-contain mx-auto"
            src={img || "/placeholder.svg"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
