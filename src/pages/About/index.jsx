import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/sections/About/Hero";
import OutMission from "@/sections/About/OutMission";
import WhoWeAre from "@/sections/About/WhoWeAre";

import { useHeaderTheme } from "@/context/HeaderThemeContext";
import { useEffect } from "react";
export default function About() {
  const { setIsLightBackground } = useHeaderTheme();

  useEffect(() => {
    setIsLightBackground(true);
    return () => setIsLightBackground(false);
  }, []);
  return (
    <>
      <HeroSection />
      <OutMission></OutMission>
      <WhoWeAre></WhoWeAre>
    </>
  );
}
