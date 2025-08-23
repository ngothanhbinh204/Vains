import React from "react";
import LightSpot from "@/sections/Shared/LightSpot";

const MissionSection = ({
  image, // ảnh bên trái
  sectionLabel, // ví dụ "OUR MISSION"
  title, // tiêu đề chính
  description, // đoạn mô tả (string hoặc array)
  quote, // trích dẫn nổi bật
  authorImage, // avatar
  authorName, // tên tác giả
  authorRole, // vai trò
}) => {
  return (
    <section className="relative text-white px-4 md:px-8 py-12 lg:py-20 overflow-x-clip 3xl:overflow-x-visible">
      <LightSpot size={900} top="-60%" left="70%" />

      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full mx-auto lg:mx-0">
              <img
                src={image}
                alt="Mission illustration"
                className="rounded-xl mx-auto object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Mission header */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-primary tracking-wider uppercase">
                {sectionLabel}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                {title}
              </h2>
            </div>

            {/* Mission description */}
            {Array.isArray(description) ? (
              description.map((p, idx) => (
                <p key={idx} className="leading-relaxed">
                  {p}
                </p>
              ))
            ) : (
              <p className="leading-relaxed">{description}</p>
            )}

            {/* Quote */}
            {quote && (
              <div className="relative mt-10">
                <div className="absolute -top-4">
                  {" "}
                  <svg
                    width="26"
                    height="19"
                    viewBox="0 0 26 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path
                      d="M14.9372 18.6089V11.1672C14.9372 4.04352 18.3496 1.11772 24.8524 0.608887L25.6894 3.91631C21.762 4.61596 19.8948 6.58769 20.1523 9.8315H23.5003V18.6089H14.9372ZM0 18.6089V11.1672C0 4.04352 3.41238 1.11772 9.91521 0.608887L10.7522 3.91631C6.82475 4.61596 4.9576 6.58769 5.27953 9.8315H8.56314V18.6089H0Z"
                      fill="#42C3D5"
                      fill-opacity="0.5"
                    />{" "}
                  </svg>{" "}
                </div>
                <blockquote
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #BAF8FF 0%, #42C3D5 100%)",
                  }}
                  className="text-lg md:text-xl px-12 pr-8 bg-clip-text text-transparent mx-auto"
                >
                  {quote}
                </blockquote>
                <div className=" text-6xl absolute -bottom-8 right-0 rotate-180">
                  {" "}
                  <svg
                    width="26"
                    height="19"
                    viewBox="0 0 26 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path
                      d="M14.9372 18.6089V11.1672C14.9372 4.04352 18.3496 1.11772 24.8524 0.608887L25.6894 3.91631C21.762 4.61596 19.8948 6.58769 20.1523 9.8315H23.5003V18.6089H14.9372ZM0 18.6089V11.1672C0 4.04352 3.41238 1.11772 9.91521 0.608887L10.7522 3.91631C6.82475 4.61596 4.9576 6.58769 5.27953 9.8315H8.56314V18.6089H0Z"
                      fill="#42C3D5"
                      fill-opacity="0.5"
                    />{" "}
                  </svg>{" "}
                </div>
              </div>
            )}

            {/* Author */}
            <div className="flex items-center gap-3 mt-8">
              {authorImage && (
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={authorImage}
                    alt={authorName}
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <p className="font-semibold text-primary">{authorName}</p>
                <p className="text-sm text-white">{authorRole}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
