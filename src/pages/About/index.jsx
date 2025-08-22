import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/sections/About/Hero";
import OutMission from "@/sections/About/OutMission";
import MissionSection from "@/sections/Shared/MissionSection";
import TestimonialSection from "@/sections/About/TestimonialSection";
import WhoWeAre from "@/sections/About/WhoWeAre";
import TextStatistic from "@/sections/About/TextStatistic";
import { useHeaderTheme } from "@/context/HeaderThemeContext";
import { useEffect } from "react";
import Timeline from "@/sections/About/TimeLine";
export default function About() {
  const { setIsLightBackground } = useHeaderTheme();

  // useEffect(() => {
  //   setIsLightBackground(true);
  //   return () => setIsLightBackground(false);
  // }, []);
  return (
    <>
      <HeroSection />
      <MissionSection />
      <Timeline />
      <TestimonialSection />
      <OutMission />
      <WhoWeAre />
    </>
  );
}
