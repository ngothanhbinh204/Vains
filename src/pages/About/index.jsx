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
import MissionImage from "@/assets/images/mission_member.png";
import Avatar from "@/assets/images/avt_member.png";
export default function About() {
  const { setIsLightBackground } = useHeaderTheme();

  // useEffect(() => {
  //   setIsLightBackground(true);
  //   return () => setIsLightBackground(false);
  // }, []);
  return (
    <>
      <HeroSection />
      <MissionSection
        image={MissionImage}
        sectionLabel="OUR MISSION"
        title="Driving a Sustainable Future"
        description={[
          <>
            At <span className="font-bold text-primary">VAINS.io</span>,
            technology is not just a tool — it’s the backbone that ensures
            speed, accuracy, and trust in every visa consultation.
          </>,
          <>
            We combine cutting-edge AI, robust automation, and secure cloud
            infrastructure to deliver a seamless and scalable solution for
            individuals and businesses worldwide.
          </>,
        ]}
        quote="These tools may offer email tracking features that notify you when recipients open your emails or click on links within them."
        authorImage={Avatar}
        authorName="Leo"
        authorRole="Co-founder"
      />
      <TextStatistic />
      <Timeline />
      <WhoWeAre />
      <TestimonialSection />
      {/* <OutMission /> */}
    </>
  );
}
