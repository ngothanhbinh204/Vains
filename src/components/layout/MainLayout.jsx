import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import React, { useEffect } from "react";

import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function MainLayout({ children }) {
  // useEffect(() => {
  //   ScrollSmoother.create({
  //     wrapper: "#smooth-wrapper",
  //     content: "#smooth-content",
  //     smooth: 1.1,
  //     effects: true,
  //     normalizeScroll: true,
  //     ignoreMobileResize: true,
  //   });
  // }, []);
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}
