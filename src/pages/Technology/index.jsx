import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/sections/About/Hero";
import ListTech from "@/sections/Technology/ListTech";
import DigitalProduct from "@/sections/Technology/DigitalProduct";

import { useHeaderTheme } from "@/context/HeaderThemeContext";
import { useEffect } from "react";
export default function Technology() {
  const { setIsLightBackground } = useHeaderTheme();

  useEffect(() => {
    setIsLightBackground(true);
    return () => setIsLightBackground(false);
  }, []);
  return (
    <>
      <HeroSection />
      <ListTech></ListTech>
      <DigitalProduct></DigitalProduct>
    </>
  );
}
