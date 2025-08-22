import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const timelineRef = useRef(null);
  const progressLineRef = useRef(null);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the progress line
      gsap.fromTo(
        progressLineRef.current,
        {
          scaleY: 0,
          transformOrigin: "top center",
        },
        {
          scaleY: 1,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      // Animate timeline items
      timelineData.forEach((_, index) => {
        const dot = `.timeline-dot-${index}`;
        const title = `.timeline-title-${index}`;
        const content = `.timeline-content-${index}`;

        // Animate dots
        gsap.fromTo(
          dot,
          {
            backgroundColor: "rgba(66, 195, 213, 1)",
            scale: 1,
          },
          {
            backgroundColor: "rgba(66, 195, 213, 1)",
            scale: 1.2,
            duration: 0.3,
            scrollTrigger: {
              trigger: `.timeline-item-${index}`,
              start: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Animate horizontal connectors
        const connector =
          timelineData[index].titleSide === "left"
            ? `.timeline-connector-left-${index}`
            : `.timeline-connector-right-${index}`;

        gsap.fromTo(
          connector,
          {
            scaleX: 0,
            transformOrigin:
              timelineData[index].titleSide === "left"
                ? "right center"
                : "left center",
          },
          {
            scaleX: 1,
            duration: 0.4,
            delay: 0.1,
            scrollTrigger: {
              trigger: `.timeline-item-${index}`,
              start: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Animate title
        gsap.fromTo(
          title,
          {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: `.timeline-item-${index}`,
              start: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Animate content
        gsap.fromTo(
          content,
          {
            opacity: 0,
            x: index % 2 === 0 ? 50 : -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: 0.2,
            scrollTrigger: {
              trigger: `.timeline-item-${index}`,
              start: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen  text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Timeline Section */}
          <div className="lg:col-span-7">
            <div ref={timelineRef} className="relative">
              {/* Main vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[rgba(22,69,75,1)]"></div>

              {/* Progress line */}
              <div
                ref={progressLineRef}
                className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-primary z-10"
              ></div>

              {/* Timeline Items */}
              <div className="space-y-16">
                {timelineData.map((item, index) => (
                  <div
                    key={item.id}
                    className={`timeline-item-${index} relative`}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`timeline-dot-${index} absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-slate-800 bg-gray-600 z-20`}
                    ></div>

                    {/* Horizontal Connector */}
                    {item.titleSide === "left" ? (
                      <div
                        className={`timeline-connector-left-${index} absolute left-1/2 top-2 w-8 h-0.5 
                bg-gradient-to-l from-primary to-primary transform -translate-x-full z-10`}
                      ></div>
                    ) : (
                      <div
                        className={`timeline-connector-right-${index} absolute left-1/2 top-2 w-8 h-0.5 
                bg-gradient-to-r from-primary to-primary z-10`}
                      ></div>
                    )}

                    {/* Grid Layout for Title and Content */}
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
                        <p className=" leading-relaxed text-sm">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="text-primary text-sm font-medium mb-4 tracking-wider uppercase">
                Our Values
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Who We Are
              </h2>
              <p className=" text-lg leading-relaxed">
                This is the space to introduce the team and what makes it
                special. Describe the team culture and work philosophy. To help
                site visitors connect with the team, add details about team
                members' experience and skills.
              </p>
              <div className="flex flex-col mt-4 md:mt-6 space-y-4">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 p-0.5 bg-[rgba(155,255,249,0.2)] rounded-full text-[rgba(155,255,249,1)] mt-0.5 flex-shrink-0" />
                  <span className=" text-sm leading-relaxed">
                    <strong>Innovation First</strong> – Constantly exploring new
                    technologies to deliver impactful solutions.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 p-0.5 bg-[rgba(155,255,249,0.2)] rounded-full text-[rgba(155,255,249,1)] mt-0.5 flex-shrink-0" />
                  <span className=" text-sm leading-relaxed">
                    <strong>Customer-Centric</strong> – Every product is built
                    with our customers’ needs at the heart.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 p-0.5 bg-[rgba(155,255,249,0.2)] rounded-full text-[rgba(155,255,249,1)] mt-0.5 flex-shrink-0" />
                  <span className=" text-sm leading-relaxed">
                    <strong>Collaboration</strong> – Working together to achieve
                    excellence.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
