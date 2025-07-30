import React from "react";
import heroImage from "@/assets/images/bg_hero_tech.avif";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover object-center md:object-right-center lg:object-center"
          src={heroImage}
          alt="Volaso autonomous vehicle"
        />
        {/* Responsive gradient overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent md:from-white/20 md:via-transparent"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-1440 mx-auto flex items-baseline justify-start h-full px-6 py-16 lg:pt-18">
        <div className="w-full max-w-2xl lg:max-w-4xl text-left md:mt-4 lg:mt-8">
          <h1 className="text-5xl mb-5 md:mb-7 md:text-5xl lg:text-[82px] font-helvetica-light leading-tight lg:mb-12 text-black">
            Improving Everyday
            <br /> Life With Robotics
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
