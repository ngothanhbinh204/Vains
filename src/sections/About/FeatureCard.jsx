import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FeatureCard({
  title,
  description1,
  description2,
  imageUrl,
  imageAlt,
  imagePosition = "left",
}) {
  const imageRef = useRef(null);
  const contentOrderClass = imagePosition === "right" ? "md:order-1" : "";
  const imageOrderClass = imagePosition === "right" ? "md:order-2" : "";

  useEffect(() => {
    if (!imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { y: -40 }, // bắt đầu cao hơn
        {
          y: 40, // kết thúc thấp hơn
          scrollTrigger: {
            trigger: imageRef.current,
            scrub: true,
            start: "top bottom",
            end: "bottom top",
          },
          ease: "none",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white md:h-[60vh] overflow-hidden flex flex-col gap-x-8 gap-y-12 md:flex-row max-w-full mx-auto">
      <div className={`w-full md:w-1/2 flex-shrink-0 ${imageOrderClass}`}>
        <div className="w-full h-full rounded-2xl overflow-hidden relative">
          <img
            ref={imageRef}
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover scale-110"
          />
        </div>
      </div>

      <div
        className={`w-full md:w-1/2 lg:p-10 flex flex-col justify-center ${contentOrderClass}`}
      >
        <div className="md:max-w-[390px] mx-auto space-y-6">
          <p className=" text-md leading-relaxed">{description1}</p>
          <p className=" text-md leading-relaxed">{description2}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
