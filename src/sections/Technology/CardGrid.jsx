import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import CardItem from "@/sections/Technology/CardItem";

gsap.registerPlugin(ScrollTrigger);
const items = [
  {
    title: "ON THE ROAD SAFETY",
    content:
      "This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer. Consider adding an image or video to show off the product and entice visitors to make a purchase.",
  },
  {
    title: "LOW EMISSIONS & EFFICIENCY",
    content:
      "This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer. Consider adding an image or video to show off the product and entice visitors to make a purchase.",
  },
];
const CardGrid = () => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    if (window.innerWidth < 768) {
      itemRefs.current.forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: true,
          markers: false,
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative md:grid md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          ref={(el) => (itemRefs.current[index] = el)}
          className="min-h-screen flex items-center py-10 md:p-0 bg-white"
        >
          <CardItem
            title={item.title}
            content={item.content}
            className={`stack-item transition-all duration-300 ease-in-out ${
              index % 2 === 1 ? "sm:mt-20" : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
