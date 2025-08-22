import React from "react";
// import heroImage from "@/assets/images/bg_hero_tech.avif";
import TitlePage from "@/sections/Shared/TitlePage";

const Hero = () => {
  var title = "ABOUT VAINS";
  var description =
    "Learn about our core values, our story, and how we balance work, life and everything in between.";
  return (
    <section className="relative h-auto w-full overflow-hidden bg-[rgba(4, 16, 14, 1)]">
      <TitlePage title={title} description={description} />
    </section>
  );
};

export default Hero;
