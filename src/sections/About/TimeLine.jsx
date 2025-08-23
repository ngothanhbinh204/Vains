import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ChevronRight } from "lucide-react";
import ImageBackGround2 from "@/assets/images/background2.svg";
gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const timelineRef = useRef(null);
  const progressLineRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const timelineData = [
    {
      id: 1,
      date: "25 APR 2018",
      title: "Stats Center Beta",
      content:
        "Beef tenderloin boudin kielbasa andouille biltong chuck drumstick. Pancetta venison beef tongue.",
      titleSide: "left",
      contentSide: "right",
    },
    {
      id: 2,
      date: "25 APR 2018",
      title: "Stats Center Beta",
      content:
        "Beef tenderloin boudin kielbasa andouille biltong chuck drumstick. Pancetta venison beef tongue.",
      titleSide: "right",
      contentSide: "left",
    },
    {
      id: 3,
      date: "25 APR 2018",
      title: "Stats Center Beta",
      content:
        "Beef tenderloin boudin kielbasa andouille biltong chuck drumstick. Pancetta venison beef tongue.",
      titleSide: "left",
      contentSide: "right",
    },
    {
      id: 4,
      date: "25 APR 2018",
      title: "Stats Center Beta",
      content:
        "Beef tenderloin boudin kielbasa andouille biltong chuck drumstick. Pancetta venison beef tongue.",
      titleSide: "right",
      contentSide: "left",
    },
    {
      id: 5,
      date: "25 APR 2018",
      title: "Stats Center Beta",
      content:
        "Beef tenderloin boudin kielbasa andouille biltong chuck drumstick. Pancetta venison beef tongue.",
      titleSide: "left",
      contentSide: "right",
    },
    {
      id: 6,
      date: "25 APR 2018",
      title: "Stats Center Beta",
      content:
        "Beef tenderloin boudin kielbasa andouille biltong chuck drumstick. Pancetta venison beef tongue.",
      titleSide: "right",
      contentSide: "left",
    },
  ];

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Small delay to ensure DOM is ready and isMobile state is set
    const initAnimations = () => {
      const ctx = gsap.context(() => {
        // Kill any existing ScrollTriggers to prevent conflicts
        ScrollTrigger.getAll().forEach((trigger) => {
          if (
            trigger.trigger &&
            trigger.trigger.closest(
              ".timeline-item-0, .timeline-item-1, .timeline-item-2, .timeline-item-3, .timeline-item-4, .timeline-item-5"
            )
          ) {
            trigger.kill();
          }
        });

        // Animate the progress line with responsive triggers
        const progressTl = gsap.timeline({
          scrollTrigger: {
            trigger: timelineRef.current,
            start: isMobile ? "top 70%" : "top center", // Mobile: bắt đầu muộn hơn
            end: "bottom center",
            scrub: true,
          },
        });

        progressTl.fromTo(
          progressLineRef.current,
          {
            scaleY: 0,
            transformOrigin: "top center",
          },
          {
            scaleY: 1,
            duration: 1,
            ease: "none",
          }
        );

        // Animate timeline items with responsive logic
        timelineData.forEach((item, index) => {
          const dot = `.timeline-dot-${index}`;
          const title = `.timeline-title-${index}`;
          const content = `.timeline-content-${index}`;

          // Calculate when progress line reaches this dot (based on item position in timeline)
          const dotTriggerStart = isMobile ? "top 70%" : "top 50%"; // Khôi phục PC trigger

          // Animate dots - synchronized with progress line
          gsap.fromTo(
            dot,
            {
              backgroundColor: "rgba(66, 195, 213, 1)",
              scale: 1,
            },
            {
              backgroundColor: "rgba(6, 214, 160, 1)",
              scale: 1.2,
              duration: 0.3,
              scrollTrigger: {
                trigger: `.timeline-item-${index}`,
                start: dotTriggerStart,
                toggleActions: "play none none reverse",
              },
            }
          );

          // Animate horizontal connectors - FIX: Synchronized timing for mobile
          if (isMobile) {
            // Mobile: Always connect to the right side - ONLY animate right connectors
            const connector = `.timeline-connector-right-${index}`;
            gsap.fromTo(
              connector,
              {
                scaleX: 0,
                transformOrigin: "left center",
              },
              {
                scaleX: 1,
                duration: 0.4,
                delay: 0.1,
                scrollTrigger: {
                  trigger: `.timeline-item-${index}`,
                  start: dotTriggerStart, // Same as dot trigger
                  toggleActions: "play none none reverse",
                },
              }
            );
          } else {
            // Desktop: Original alternating logic
            const connectorLeft = `.timeline-connector-left-${index}`;
            const connectorRight = `.timeline-connector-right-${index}`;

            if (item.titleSide === "left") {
              gsap.fromTo(
                connectorLeft,
                {
                  scaleX: 0,
                  transformOrigin: "right center",
                },
                {
                  scaleX: 1,
                  duration: 0.4,
                  delay: 0.1,
                  scrollTrigger: {
                    trigger: `.timeline-item-${index}`,
                    start: dotTriggerStart,
                    toggleActions: "play none none reverse",
                  },
                }
              );
            } else {
              gsap.fromTo(
                connectorRight,
                {
                  scaleX: 0,
                  transformOrigin: "left center",
                },
                {
                  scaleX: 1,
                  duration: 0.4,
                  delay: 0.1,
                  scrollTrigger: {
                    trigger: `.timeline-item-${index}`,
                    start: dotTriggerStart,
                    toggleActions: "play none none reverse",
                  },
                }
              );
            }
          }

          // Animate title - responsive animation direction
          gsap.fromTo(
            title,
            {
              opacity: 0,
              x: isMobile ? 30 : index % 2 === 0 ? -50 : 50, // Mobile: từ phải sang (30), Desktop: xen kẽ
              y: 0, // Mobile: không dịch chuyển theo y
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.5,
              scrollTrigger: {
                trigger: `.timeline-item-${index}`,
                start: dotTriggerStart,
                toggleActions: "play none none reverse",
              },
            }
          );

          // Animate content - responsive animation direction
          gsap.fromTo(
            content,
            {
              opacity: 0,
              x: isMobile ? 30 : index % 2 === 0 ? 50 : -50, // Mobile: từ phải sang (30), Desktop: xen kẽ
              y: 0, // Mobile: không dịch chuyển theo y
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.5,
              delay: 0.2,
              scrollTrigger: {
                trigger: `.timeline-item-${index}`,
                start: dotTriggerStart,
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        // Refresh ScrollTrigger after setup
        ScrollTrigger.refresh();
      }, timelineRef);

      return ctx;
    };

    // Wait for next tick to ensure isMobile state is properly set
    const timeoutId = setTimeout(() => {
      const ctx = initAnimations();
      return () => ctx.revert();
    }, 50);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMobile]); // Re-run when screen size changes

  return (
    <section className="overflow-hidden relative min-h-screen flex justify-center items-center text-white py-12 px-4 lg:py-20">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Timeline Section */}
          <div className="lg:col-span-7">
            <div ref={timelineRef} className="relative">
              {/* Main vertical line - responsive positioning */}
              <div
                className={`absolute ${isMobile ? "left-8" : "left-1/2"} ${
                  isMobile ? "" : "transform -translate-x-1/2"
                } w-0.5 h-full bg-[rgba(22,69,75,1)]`}
              ></div>

              {/* Progress line - responsive positioning */}
              <div
                ref={progressLineRef}
                className={`absolute ${isMobile ? "left-8" : "left-1/2"} ${
                  isMobile ? "" : "transform -translate-x-1/2"
                } w-0.5 h-full bg-gradient-to-b from-primary to-primary z-10`}
              ></div>

              {/* Timeline Items */}
              <div className="space-y-16">
                {timelineData.map((item, index) => (
                  <div
                    key={item.id}
                    className={`timeline-item-${index} relative`}
                  >
                    {/* Timeline Dot - responsive positioning */}
                    <div
                      className={`timeline-dot-${index} absolute ${
                        isMobile ? "left-8" : "left-1/2"
                      } ${
                        isMobile
                          ? "transform -translate-x-1/2"
                          : "transform -translate-x-1/2"
                      } w-4 h-4 rounded-full border-4 border-slate-800 bg-gray-600 z-20`}
                    ></div>

                    {/* Horizontal Connector - FIX: Render only needed connectors */}
                    {isMobile ? (
                      // Mobile: Always render ONLY right connector
                      <div
                        className={`timeline-connector-right-${index} absolute left-8 top-2 w-8 h-0.5 bg-gradient-to-r from-primary to-primary z-10`}
                      ></div>
                    ) : (
                      // Desktop: Render both but only show the needed one
                      <>
                        <div
                          className={`timeline-connector-left-${index} absolute left-1/2 top-2 w-8 h-0.5 bg-gradient-to-l from-primary to-primary transform -translate-x-full z-10 ${
                            item.titleSide === "left" ? "" : "opacity-0"
                          }`}
                        ></div>
                        <div
                          className={`timeline-connector-right-${index} absolute left-1/2 top-2 w-8 h-0.5 bg-gradient-to-r from-primary to-primary z-10 ${
                            item.titleSide === "right" ? "" : "opacity-0"
                          }`}
                        ></div>
                      </>
                    )}

                    {/* Content Layout - responsive structure */}
                    {isMobile ? (
                      // Mobile Layout: Timeline left, content right (stacked)
                      <div className="ml-20">
                        <div className={`timeline-title-${index} mb-4`}>
                          <div className="text-primary text-sm font-medium mb-2 tracking-wider">
                            {item.date}
                          </div>
                          <h3 className="text-xl font-bold text-white">
                            {item.title}
                          </h3>
                        </div>
                        <div className={`timeline-content-${index}`}>
                          <p className="text-gray-300 leading-relaxed text-sm">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    ) : (
                      // Desktop Layout: Original grid system
                      <div className="grid grid-cols-2 gap-8 items-center">
                        {/* Title Side */}
                        <div
                          className={`timeline-title-${index} ${
                            item.titleSide === "left"
                              ? "order-1 text-right pr-8"
                              : "order-2 text-left pl-8"
                          }`}
                        >
                          <div className="text-primary text-sm font-medium mb-2 tracking-wider">
                            {item.date}
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            {item.title}
                          </h3>
                        </div>

                        {/* Content Side */}
                        <div
                          className={`timeline-content-${index} ${
                            item.contentSide === "left"
                              ? "order-1 text-right pr-8"
                              : "order-2 text-left pl-8"
                          }`}
                        >
                          <p className="text-gray-300 leading-relaxed text-sm">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="">
              <div className="text-primary text-sm font-medium mb-4 tracking-wider uppercase">
                Our Values
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Who We Are
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                This is the space to introduce the team and what makes it
                special. Describe the team culture and work philosophy. To help
                site visitors connect with the team, add details about team
                members' experience and skills.
              </p>
              <div className="flex flex-col mt-4 md:mt-6 space-y-4">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 p-0.5 bg-[rgba(155,255,249,0.2)] rounded-full text-[rgba(155,255,249,1)] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm leading-relaxed">
                    <strong>Innovation First</strong> – Constantly exploring new
                    technologies to deliver impactful solutions.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 p-0.5 bg-[rgba(155,255,249,0.2)] rounded-full text-[rgba(155,255,249,1)] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm leading-relaxed">
                    <strong>Customer-Centric</strong> – Every product is built
                    with our customers' needs at the heart.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 p-0.5 bg-[rgba(155,255,249,0.2)] rounded-full text-[rgba(155,255,249,1)] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm leading-relaxed">
                    <strong>Collaboration</strong> – Working together to achieve
                    excellence.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute h-auto w-full lg:w-[40%] right-0 top-1/2 transform -translate-y-1/2 -z-10"
        src={ImageBackGround2}
        alt=""
      />
    </section>
  );
};

export default Timeline;
