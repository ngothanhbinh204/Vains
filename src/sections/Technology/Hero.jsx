import React from "react";
import heroImage from "@/assets/images/hero_tech.avif";

const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-cover bg-center text-white">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={heroImage}
        alt=""
      />
      <div className="relative z-10 max-w-1440 mx-auto flex flex-col-reverse md:flex-row items-center justify-between h-full px-6 py-16">
        <div className="w-full text-left">
          <h1 className="text-4xl mb-5 md:mb-7 md:text-5xl lg:text-[82px] font-helvetica-light leading-tight lg:mb-12">
            It’s Time for Volaso <br /> to Do the Driving
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
