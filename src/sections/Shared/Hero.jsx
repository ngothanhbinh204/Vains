import React from "react";
// import heroImage from "@/assets/images/bg_hero_tech.avif";
import TitlePageTech from "@/sections/Technology/TitlePageTech";

const Hero = (props) => {
  var title = props.title || "ABOUT VAINS";
  var description =
    props.description ||
    "Learn about our core values, our story, and how we balance work, life and everything in between.";
  return (
    <section className="relative h-auto w-full overflow-hidden bg-[rgba(4, 16, 14, 1)]">
      <TitlePageTech title={title} description={description} />
    </section>
  );
};

export default Hero;
