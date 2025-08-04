import MainLayout from "@/components/layout/MainLayout";
import Title from "@/sections/Shared/Title";
import ContactForm from "@/sections/Contact/ContactForm";
import { useHeaderTheme } from "@/context/HeaderThemeContext";
import { useEffect } from "react";
export default function Pricing() {
  const { setIsLightBackground } = useHeaderTheme();

  useEffect(() => {
    setIsLightBackground(true);
    return () => setIsLightBackground(false);
  }, []);
  return (
    <>
      <div className="max-w-1440 mt-20 lg:mt-24 mx-auto px-4 lg:px-6 bg-white ">
        <Title
          theme="light"
          headline={
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-helvetica-light leading-tight">
              Get in Touch
            </h1>
          }
        />
        <div className="header mr-auto max-w-[80vw] lg:max-w-[500px] my-8 md:my-14 lg:my-18 text-black font-grotesk text-md leading-[1.4]">
          <p>
            REACH OUT, SHARE A QUESTION OR PROVIDE FEEDBACK ON OUR PRODUCTS.
            FILL OUT THE FORM AND WE’LL RESPOND AS SOON AS POSSIBLE.
          </p>
        </div>
        <ContactForm></ContactForm>
      </div>
    </>
  );
}
