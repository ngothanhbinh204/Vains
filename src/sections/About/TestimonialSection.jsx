import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Star, ArrowRight } from "lucide-react";
import TestimonialCard from "@/sections/About/TestimonialCard";
import ButtonLinear from "@/components/ui/ButtonLinear";
const TestimonialSection = () => {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer. Consider adding an image or video to show off the product and entice visitors to make a purchase.",
      author: "Thomas Lewis",
      role: "Crypto Blogger, BlockSavvy",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
    {
      id: 2,
      rating: 5,
      text: "This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer. Consider adding an image or video to show off the product and entice visitors to make a purchase.",
      author: "Thomas Lewis",
      role: "Crypto Blogger, BlockSavvy",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
    {
      id: 3,
      rating: 5,
      text: "This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer. Consider adding an image or video to show off the product and entice visitors to make a purchase.",
      author: "Thomas Lewis",
      role: "Crypto Blogger, BlockSavvy",
      avatar:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
    {
      id: 4,
      rating: 5,
      text: "This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer. Consider adding an image or video to show off the product and entice visitors to make a purchase.",
      author: "Thomas Lewis",
      role: "Crypto Blogger, BlockSavvy",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
    {
      id: 5,
      rating: 5,
      text: "This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer. Consider adding an image or video to show off the product and entice visitors to make a purchase.",
      author: "Thomas Lewis",
      role: "Crypto Blogger, BlockSavvy",
      avatar:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
    {
      id: 6,
      rating: 5,
      text: "This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer. Consider adding an image or video to show off the product and entice visitors to make a purchase.",
      author: "Thomas Lewis",
      role: "Crypto Blogger, BlockSavvy",
      avatar:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
  ];

  // Split testimonials into two columns
  const leftColumnTestimonials = testimonials.filter(
    (_, index) => index % 2 === 0
  );
  const rightColumnTestimonials = testimonials.filter(
    (_, index) => index % 2 === 1
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Auto-scroll animation for left column (slower)
      gsap.to(leftColumnRef.current, {
        y: -leftColumnRef.current.scrollHeight / 2,
        duration: 20,
        ease: "none",
        repeat: -1,
      });

      // Auto-scroll animation for right column (slightly faster, opposite direction)
      gsap.to(rightColumnRef.current, {
        y: -rightColumnRef.current.scrollHeight / 2,
        duration: 25,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-screen text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-5 h-full flex items-center justify-center">
            <div className="">
              <div className="text-primary text-sm font-medium mb-2 tracking-wider">
                TESTIMONIAL
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Trusted by People
              </h2>
              <p className="text-md leading-relaxed mb-5">
                This is the space to introduce the team and what makes it
                special. Describe the team culture and work philosophy. To help
                site visitors connect with the team, add details about team
                members' experience and skills.
              </p>

              <div className="flex flex-col">
                <ButtonLinear
                  variant="jade_green"
                  onClick={() => alert("Button clicked!")}
                >
                  Contact Us
                </ButtonLinear>
              </div>
            </div>
          </div>

          {/* Right Testimonials */}
          <div className="lg:col-span-7">
            <div className="relative h-[600px] overflow-hidden">
              {/* Gradient Overlays */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-colorBlackTheme via-colorBlackTheme to-transparent z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-colorBlackTheme via-colorBlackTheme to-transparent z-10 pointer-events-none"></div>

              {/* Two Columns */}
              <div className="flex space-x-6 h-full">
                {/* Left Column */}
                <div className="flex-1">
                  <div ref={leftColumnRef} className="space-y-0">
                    {[...leftColumnTestimonials, ...leftColumnTestimonials].map(
                      (testimonial, index) => (
                        <TestimonialCard
                          key={`left-${testimonial.id}-${index}`}
                          testimonial={testimonial}
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex-1">
                  <div
                    ref={rightColumnRef}
                    className="space-y-0"
                    style={{ transform: "translateY(-100px)" }}
                  >
                    {/* Duplicate testimonials for seamless loop */}
                    {[
                      ...rightColumnTestimonials,
                      ...rightColumnTestimonials,
                    ].map((testimonial, index) => (
                      <TestimonialCard
                        key={`right-${testimonial.id}-${index}`}
                        testimonial={testimonial}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
