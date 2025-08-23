import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/sections/Shared/Hero";
import ListTech from "@/sections/Technology/ListTech";
import DigitalProduct from "@/sections/Technology/DigitalProduct";
export default function Technology() {
  return (
    <>
      <HeroSection
        title="TECHNOLOGY"
        description="Learn about our core values, our story, and how we balance work, life and everything in between."
      />

      <ListTech></ListTech>
      <DigitalProduct></DigitalProduct>
    </>
  );
}
