import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StackedScrollContainer from "./StackedScrollContainer";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import WhyVains from "./WhyVains";

gsap.registerPlugin(ScrollTrigger);

const StackedCards = () => {
  return (
    <div>
      <StackedScrollContainer>
        <Section1 />
        <Section1 />
        <Section1 />
        <WhyVains />
      </StackedScrollContainer>
    </div>
  );
};

export default StackedCards;
