import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/sections/Home/Hero";
import OurProduct from "@/sections/Home/OurProduct";
import Vision from "@/sections/Home/Vision";
import Company from "@/sections/Home/Company";
import Banner from "@/sections/Shared/Banner";

import StackedCards from "@/sections/Home/StackedCards";
import Collaboration from "@/sections/Home/Collaboration";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Vision />
      <OurProduct />
      <StackedCards />
      {/* <WhyVains></WhyVains> */}
      <Company />
      <Collaboration />
    </>
  );
}
