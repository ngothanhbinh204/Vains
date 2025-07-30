import React from "react";
import heroVideo from "@/assets/images/video_hero.mp4";

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('src/assets/images/bg_images_hero_home.avif')",
      }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
      <div className="absolute inset-0" />

      <div className="relative z-10 max-w-1440 mx-auto flex flex-col-reverse md:flex-row items-center justify-between h-full px-6 py-16">
        <div className="w-full text-left">
          <h1 className="text-4xl mb-5 md:mb-7 md:text-5xl lg:text-[82px] font-helvetica-light leading-tight lg:mb-12">
            The Future of <br /> Delivery Is Here
          </h1>
          <p className="text-sm lg:text-md text-white tracking-wide uppercase font-grotesk lg:max-w-96">
            Discover a greener, faster self-driving delivery solution with
            Volaso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
