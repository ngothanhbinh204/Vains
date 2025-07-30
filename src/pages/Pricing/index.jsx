import MainLayout from "@/components/layout/MainLayout";
import Banner from "@/sections/Pricing/Banner";
import PricingSlider from "@/sections/Pricing/PricingSlider";

import { useHeaderTheme } from "@/context/HeaderThemeContext";
import { useEffect } from "react";
export default function Pricing() {
  //   const { setIsLightBackground } = useHeaderTheme();

  //   useEffect(() => {
  //     setIsLightBackground(true);
  //     return () => setIsLightBackground(false);
  //   }, []);
  return (
    <>
      <Banner />
      <PricingSlider></PricingSlider>
    </>
  );
}
