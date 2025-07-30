import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StackedScrollContainer = ({ children }) => {
  const containerRef = useRef();
  const sectionsRef = useRef([]);

  useEffect(() => {
    if (window.innerWidth >= 768) return; // Chỉ áp dụng khi < 768px

    const sections = sectionsRef.current.filter(Boolean);

    sections.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: i * 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
            scrub: true,
          },
          duration: 1,
          ease: "power2.out",
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [children]);

  return (
    <div ref={containerRef}>
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className="stack-card mb-8"
          style={{
            position: "relative",
            zIndex: index + 1,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default StackedScrollContainer;
