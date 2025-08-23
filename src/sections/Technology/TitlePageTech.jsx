import React from "react";
import BannerImage from "@/assets/images/Banner_Pricing_Main.png";
import MemberImg from "@/assets/images/about_people.png";
import ItemValue from "@/sections/Technology/ItemValue";
import ShieldIcon from "@/assets/icons/ShieldUser.svg";
import RocketIcon from "@/assets/icons/Command.svg";
import PeopleIcon from "@/assets/icons/CloudFile.svg";
import LightSpot from "@/sections/Shared/LightSpot";
import PlanetarySystem from "@/sections/Shared/PlanetarySystemBanner";
import TechImage from "@/assets/images/tech_banner.png";
import Avatar from "@/assets/images/avt_member.png";
import MissionSection from "../Shared/MissionSection";
const TitlePageTech = (props) => {
  const values = [
    {
      id: 1,
      icon: ShieldIcon,
      content: "Modern, fast, secure, easy to scale.",
    },
    {
      id: 2,
      icon: RocketIcon,
      content:
        "Combine AI + automation to optimize the visa consulting experience.",
    },
    {
      id: 3,
      icon: PeopleIcon,
      content: "Cloud infrastructure, microservices architecture.",
    },
  ];

  return (
    <section
      className="pricing-banner h-full overflow-hidden pt-48 mb-[70px]"
      style={{ position: "relative", textAlign: "center" }}
    >
      <LightSpot size={700} top="-42%" left="-22%" />
      <LightSpot size={800} top="-30%" left="25%" />
      <LightSpot size={700} top="-40%" left="72%" />

      <div className="banner-content relative z-10 flex flex-col justify-center items-center h-full text-white">
        <div className="flex flex-col max-w-[430px] mx-auto px-4 md:px-6 ">
          <h1
            className="text-4xl lg:text-[64px] font-bold bg-clip-text text-transparent mb-4 mx-auto w-max"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FCB236 0%, #9BFFF9 42.85%, #42C3D5 100%)",
            }}
          >
            {props.title}
          </h1>
          <p className="text-md lg:text-lg font-helvetica-light">
            {props.description}
          </p>
        </div>
        <div className="w-full h-[auto] max-w-[1238px] rounded-xl overflow-hidden mt-[70px] mb-10 z-10 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item) => (
              <ItemValue
                key={item.id}
                icon={item.icon}
                content={item.content}
              />
            ))}
          </div>
        </div>
        <div className="text-start bg-gradient-to-t from-colorBlackTheme to-transparent z-10">
          <MissionSection
            image={TechImage}
            sectionLabel="TECHNOLOGY"
            title="Our Technology Philosophy"
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
            authorName="Darcy"
            authorRole="Developer"
          />
        </div>
        <div className="absolute inset-0 top-[20%] 2xl:top-[10%]">
          <PlanetarySystem />
        </div>
      </div>
    </section>
  );
};

export default TitlePageTech;
