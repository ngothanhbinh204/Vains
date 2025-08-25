import React from "react";
import BuildingImage from "@/assets/images/building.png";
import LightSpot from "@/sections/Shared/LightSpot";
import Mascot from "@/components/ui/Mascot";

const ImageTextMascot = () => {
  return (
    <div>
      <section className="relative min-h-[50vh] text-white px-4 md:px-8 py-12 lg:py-20 overflow-x-clip ">
        <LightSpot
          className="top-0 left-0 md:-top-[40%] md:left-[60%]"
          size={800}
        />
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="order-1 lg:order-1 col-span-8 lg:col-span-6">
              {/* Mission header */}
              <div className="flex flex-col gap-2 text-white">
                <p className="text-sm font-medium text-primary tracking-wider uppercase">
                  TECHNOLOGY
                </p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  AI & Machine Learning Capabilities
                </h2>
                <div className="group_content mt-6">
                  <ul className="list-disc list-outside pl-6 leading-relaxed text-sm md:text-md">
                    <li>
                      <strong>Visa AI Chatbot:</strong> Multilingual,
                      context-aware, and capable of answering complex
                      immigration questions.
                    </li>
                    <li>
                      <strong>Voice Agent:</strong> Speak naturally with
                      VAINS.io via phone or browser — powered by real-time
                      STT/TTS.
                    </li>
                    <li>
                      <strong>RAG (Retrieval-Augmented Generation):</strong>{" "}
                      Access up-to-date legal regulations, government policies,
                      and case-specific data.
                    </li>
                    <li>
                      <strong>Domain-Specific AzI Models:</strong> Trained on
                      immigration data for higher accuracy and relevance.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="order-3 lg:order-2 col-span-12 lg:col-span-4">
              <div className="relative w-full mx-auto lg:mx-0">
                <img
                  src={BuildingImage}
                  alt="Mission illustration"
                  className="rounded-xl mx-auto object-cover"
                />
              </div>
            </div>
            <div className="relative order-2 lg:order-3 col-span-4 lg:col-span-2">
              <Mascot />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageTextMascot;
