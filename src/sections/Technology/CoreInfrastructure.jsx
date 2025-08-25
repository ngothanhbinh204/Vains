import React from "react";

// Import tất cả logo SVG
import ReactLogo from "@/assets/icons/Logo/react.svg";
import NextLogo from "@/assets/icons/Logo/Nextjs.svg";
import DotNetLogo from "@/assets/icons/Logo/dot-net.svg";
import AWSLogo from "@/assets/icons/Logo/aws.svg";
import AzureLogo from "@/assets/icons/Logo/Microsoft_Azure-Logo.svg";
import GCloudLogo from "@/assets/icons/Logo/gg-cloud.svg";
import PineconeLogo from "@/assets/icons/Logo/pinecone.svg";
import MilvusLogo from "@/assets/icons/Logo/milvus.svg";
import RetellLogo from "@/assets/icons/Logo/retellai.svg";
import RagLogo from "@/assets/icons/Logo/rag.svg";
import ILMLogo from "@/assets/icons/Logo/llm.svg";
import N8NLogo from "@/assets/icons/Logo/n8n.svg";
import TTSLogo from "@/assets/icons/Logo/text-to-speech.svg";
import AILogo from "@/assets/icons/Logo/ai.svg";
import W from "@/assets/icons/Logo/w.svg";

// Hàng 1
const Row1 = [
  { src: ReactLogo, alt: "React" },
  { src: NextLogo, alt: "Next.js" },
  { src: DotNetLogo, alt: ".NET" },
  { src: AILogo, alt: "AI" },
  { src: RagLogo, alt: "RAG" },
  { src: ILMLogo, alt: "ILM" },
];

// Hàng 2
const Row2 = [
  { src: AzureLogo, alt: "Azure" },
  { src: N8NLogo, alt: "n8n" },
  { src: RetellLogo, alt: "Retell AI" },
  { src: TTSLogo, alt: "Text to Speech" },
  { src: AWSLogo, alt: "AWS" },
];

// Hàng 3
const Row3 = [
  { src: GCloudLogo, alt: "Google Cloud" },
  { src: PineconeLogo, alt: "Pinecone" },
  { src: W, alt: "w" },

  { src: MilvusLogo, alt: "Milvus" },
];

// helper: render 1 hàng marquee
const renderMarqueeRow = (data, direction, index, speed = 20) => (
  <div
    key={index}
    className={`flex gap-8 lg:gap-16 pr-16 ${
      direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
    }`}
    style={{ animationDuration: `${speed}s` }} // tốc độ custom cho từng hàng
  >
    {Array(4)
      .fill(0)
      .flatMap(() => data)
      .map(({ src, alt }, j) => (
        <img
          key={`${alt}-${index}-${j}`}
          src={src}
          alt={alt}
          className="h-[30px] lg:h-[8vh] w-auto flex-none"
        />
      ))}
  </div>
);

const CoreInfrastructure = () => {
  return (
    <section className="relative min-h-[50vh] text-white px-4 md:px-8 pb-16 overflow-hidden bg-zinc-950">
      {/* Heading */}
      <div className="flex flex-col gap-2 items-center text-center mb-12 text-white">
        <p className="text-sm font-medium text-primary tracking-wider uppercase">
          TECHNOLOGY
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          AI & Machine Learning Capabilities
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div
        className="flex flex-col gap-12 relative overflow-hidden 
        before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-zinc-950 before:to-transparent
        after:absolute after:right-0 after:top-0 after:h-full after:w-20 after:bg-gradient-to-l after:from-zinc-950 after:to-transparent"
      >
        {renderMarqueeRow(Row1, "left", 1, 20)}
        {renderMarqueeRow(Row2, "right", 2, 20)}
        {renderMarqueeRow(Row3, "left", 3, 20)}
      </div>
    </section>
  );
};

export default CoreInfrastructure;
