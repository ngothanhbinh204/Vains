import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StackedScrollContainer = ({ children }) => {
  const containerRef = useRef();
  const sectionsRef = useRef([]);
  const finalRef = useRef();

  useEffect(() => {
    const sections = sectionsRef.current.filter(Boolean);
    const lastIndex = sections.length - 1;

    // Pin tất cả sections trừ section cuối cùng
    // End pin chỉ khi section cuối cùng hoàn toàn che phủ
    sections.forEach((el, i) => {
      if (i < lastIndex) {
        ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: () =>
            sections[lastIndex]
              ? `${
                  sections[lastIndex].offsetTop +
                  sections[lastIndex].offsetHeight
                } top`
              : "bottom top",
          pin: true,
          pinSpacing: false,
          endTrigger: sections[lastIndex],
          id: `pin-${i}`,
          // markers: { indent: 150 * i },
        });
      }
    });

    // Tạo trigger đặc biệt cho section cuối cùng
    if (sections[lastIndex]) {
      ScrollTrigger.create({
        trigger: sections[lastIndex],
        start: "top top", // Khi WhyVains chạm top
        end: "bottom top", // Đến khi WhyVains scroll qua hoàn toàn
        onUpdate: (self) => {
          const progress = self.progress;

          // Khi WhyVains chạm top, 3 sections bắt đầu di chuyển lên theo scroll
          sections.forEach((section, i) => {
            if (i < lastIndex) {
              gsap.set(section, {
                y: -progress * window.innerHeight,
              });
            }
          });
        },
        onLeave: () => {
          // Đảm bảo vị trí cuối cùng
          sections.forEach((section, i) => {
            if (i < lastIndex) {
              gsap.set(section, { y: -window.innerHeight });
            }
          });
        },
        onEnterBack: () => {
          // Khi scroll ngược lại, reset vị trí
          sections.forEach((section, i) => {
            if (i < lastIndex) {
              gsap.set(section, { y: 0 });
            }
          });
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [children]);

  return (
    <div ref={containerRef}>
      {React.Children.map(children, (child, index) => {
        const isLast = index === React.Children.count(children) - 1;

        return (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="content"
            style={{
              position: "relative",
              zIndex: index + 1, // Item sau có z-index cao hơn item trước
              backgroundColor: isLast ? "transparent" : undefined,
            }}
          >
            {child}
          </div>
        );
      })}
      <div ref={finalRef} className="final"></div>
    </div>
  );
};

export default StackedScrollContainer;
