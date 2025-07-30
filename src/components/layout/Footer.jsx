"use client";

import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import LightSpot from "@/sections/Shared/LightSpot";
import ButtonLinear from "../ui/ButtonLinear";
import Logo from "@/assets/images/VainsLogoWhite.svg";

const Footer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <footer className="bg-gradient-to-br z-50 bg-black  text-white relative">
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="overflow-hidden md:overflow-visible max-w-1440 relative mx-auto px-4 pt-16">
          {/* <LightSpot size={850} top="-40%" left="-20%" /> */}
          <LightSpot
            size={850}
            top="-40%"
            left="-20%"
            className="!w-lg lg:!w-[850px] md:left-[-10%] sm:left-[-5%] sm:top-[-20%]"
          />

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-helvetica-light leading-tight">
                  We are always ready
                  <br />
                  to help you and
                  <br />
                  answer your
                  <br />
                  questions
                </h2>
                <p className="text-slate-300 text-sm lg:text-base max-w-md">
                  Pacific hake false trevally queen parrotfish black prickleback
                  mosshead warbonnet sweeper! Greening sleeper.
                </p>
              </div>

              <div className="flex flex-wrap gap-y-8 gap-x-17">
                <div className="space-y-3 min-w-56">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    Our phone number
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 hover:text-primary transition-colors">
                      {/* <span className="text-lg"></span> */}
                      <span>(+1) 61 5741 6190</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-primary transition-colors">
                      {/* <span className="text-lg">🇻🇳</span> */}
                      <span>(+84) 7 5585 7899</span>
                    </div>
                  </div>
                </div>
                {/* Location */}
                <div className="space-y-3 min-w-56">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    Our location
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">
                        <svg
                          width="24"
                          height="16"
                          viewBox="0 0 24 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_63_270)">
                            <path d="M0 0H24V16H0V0Z" fill="white" />
                            <path
                              d="M0 0H24V1.23041H0V0ZM0 2.46082H24V3.69123H0V2.46082ZM0 4.92164H24V6.15205H0V4.92164ZM0 7.38246H24V8.61287H0V7.38246ZM0 9.84795H24V11.0784H0V9.84795ZM0 12.3088H24V13.5392H0V12.3088ZM0 14.7696H24V16H0V14.7696Z"
                              fill="#D80027"
                            />
                            <path d="M0 0H12V8.61287H0V0Z" fill="#2E52B2" />
                            <path
                              d="M2.23626 6.49827L2.04913 5.89944L1.84328 6.49827H1.22574L1.72632 6.8585L1.53919 7.45733L2.04913 7.08774L2.54504 7.45733L2.35322 6.8585L2.86317 6.49827H2.23626ZM4.87018 6.49827L4.67837 5.89944L4.48188 6.49827H3.86433L4.36492 6.8585L4.17779 7.45733L4.67837 7.08774L5.18363 7.45733L4.9965 6.8585L5.49708 6.49827H4.87018ZM7.51346 6.49827L7.31229 5.89944L7.12515 6.49827H6.49358L7.00819 6.8585L6.8117 7.45733L7.31229 7.08774L7.82691 7.45733L7.63042 6.8585L8.131 6.49827H7.51346ZM10.1427 6.49827L9.95556 5.89944L9.75907 6.49827H9.13685L9.64211 6.8585L9.45498 7.45733L9.95556 7.08774L10.4608 7.45733L10.2597 6.8585L10.7743 6.49827H10.1427ZM4.67837 3.52283L4.48188 4.12166H3.86433L4.36492 4.49125L4.17779 5.08072L4.67837 4.71581L5.18363 5.08072L4.9965 4.49125L5.49708 4.12166H4.87018L4.67837 3.52283ZM2.04913 3.52283L1.84328 4.12166H1.22574L1.72632 4.49125L1.53919 5.08072L2.04913 4.71581L2.54504 5.08072L2.35322 4.49125L2.86317 4.12166H2.23626L2.04913 3.52283ZM7.31229 3.52283L7.12515 4.12166H6.49358L7.00819 4.49125L6.8117 5.08072L7.31229 4.71581L7.82691 5.08072L7.63042 4.49125L8.131 4.12166H7.51346L7.31229 3.52283ZM9.95556 3.52283L9.75907 4.12166H9.13685L9.64211 4.49125L9.45498 5.08072L9.95556 4.71581L10.4608 5.08072L10.2597 4.49125L10.7743 4.12166H10.1427L9.95556 3.52283ZM2.04913 1.15558L1.84328 1.74505H1.22574L1.72632 2.11464L1.53919 2.7088L2.04913 2.3392L2.54504 2.7088L2.35322 2.11464L2.86317 1.74505H2.23626L2.04913 1.15558ZM4.67837 1.15558L4.48188 1.74505H3.86433L4.36492 2.11464L4.17779 2.7088L4.67837 2.3392L5.18363 2.7088L4.9965 2.11464L5.49708 1.74505H4.87018L4.67837 1.15558ZM7.31229 1.15558L7.12515 1.74505H6.49358L7.00819 2.11464L6.8117 2.7088L7.31229 2.3392L7.82691 2.7088L7.63042 2.11464L8.131 1.74505H7.51346L7.31229 1.15558ZM9.95556 1.15558L9.75907 1.74505H9.13685L9.64211 2.11464L9.45498 2.7088L9.95556 2.3392L10.4608 2.7088L10.2597 2.11464L10.7743 1.74505H10.1427L9.95556 1.15558Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_63_270">
                              <rect width="24" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span>1620 S Chadwick street Philadelphia PA 19145</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">
                        <svg
                          width="24"
                          height="16"
                          viewBox="0 0 24 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_63_267)">
                            <path
                              d="M9.21755 0.000488281H0V16.0002H24V0.000488281H9.21755Z"
                              fill="#D80027"
                            />
                            <path
                              d="M12 3.3725L13.0623 6.64189H16.5L13.7188 8.66249L14.7812 11.932L12 9.91133L9.21881 11.932L10.2812 8.66249L7.5 6.64189H10.9377L12 3.3725Z"
                              fill="#FFDA44"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_63_267">
                              <rect width="24" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span>
                        132/6 Khu Phố 8, Phường Đa Vinh, Tỉnh Khánh Hòa
                      </span>
                    </div>
                  </div>
                </div>
                {/* Email */}
                <div className="space-y-3 min-w-56">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    Email
                  </h3>
                  <a
                    href="mailto:meomeovatns@gmail.com"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    meomeovatns@gmail.com
                  </a>
                </div>
                {/* Work Schedule */}
                <div className="space-y-3 min-w-56">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    Work schedule
                  </h3>
                  <div className="text-sm space-y-1">
                    <p>Monday - Sunday</p>
                    <p>08:30 - 17:00</p>
                  </div>
                </div>
                <div className="space-y-3 min-w-56">
                  <h3 className="text-lg font-semibold">Social</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: Facebook, href: "#" },
                      { icon: Instagram, href: "#" },
                      { icon: Linkedin, href: "#" },
                      { icon: Youtube, href: "#" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-all duration-300 hover:scale-110"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:col-span-4">
              <div className="bg-white backdrop-blur-sm rounded-2xl p-4 md:py-6 md:px-8 lg:py-10 lg:px-12 w-full lg:max-w-[500px] ml-auto">
                <h3 className="text-2xl lg:text-[36px] font-bold mb-6 text-slate-800">
                  Get in Touch
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-5 py-2.5 bg-white/80 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-slate-800 font-helvetica-light placeholder-[rgba(173,173,173,1);
]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-5 py-2.5 bg-white/80 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-slate-800 font-helvetica-light placeholder-[rgba(173,173,173,1);
]"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-5 py-2.5 bg-white/80 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-slate-800 font-helvetica-light placeholder-[rgba(173,173,173,1)]"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-5 py-2.5 bg-white/80 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none text-slate-800 font-helvetica-light placeholder-[rgba(173,173,173,1)]"
                  />

                  <ButtonLinear
                    variant="rainbow"
                    className="!text-black"
                    onClick={() => alert("Button clicked!")}
                  >
                    Seen message
                  </ButtonLinear>

                  {/* <a href="#" class="gradient-button">
                    <span>Button Text</span>
                  </a> */}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="">
          <div className="max-w-1440 mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3
                  className="text-2xl lg:text-3xl font-helvetica-light bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #FCB236 0%, #9BFFF9 42.85%, #42C3D5 100%)",
                  }}
                >
                  It’s blow your mind! <br />
                  Meet Neural Networks
                </h3>
              </div>

              <ButtonLinear
                variant="rainbow"
                className="!text-white !bg-black"
                onClick={() => alert("Button clicked!")}
              >
                Get Quote
              </ButtonLinear>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t relative border-slate-700 overflow-hidden">
          <div className="container max-w-1440 mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              {/* Left Side - Logo and Copyright */}
              <div className="space-y-6">
                <div className="flex flex-col items-start gap-4">
                  <div className=" font-semibold text-lg flex items-center gap-2">
                    <img src={Logo} alt="Logo" className="h-8 lg:h-[42px]" />
                  </div>
                  <div className="flex gap-4">
                    {[
                      { icon: Facebook, href: "#" },
                      { icon: Instagram, href: "#" },
                      { icon: Linkedin, href: "#" },
                      { icon: Youtube, href: "#" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-all duration-300 hover:scale-110"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                <h2 className="text-6xl lg:text-[80px] font-helvetica-light gradient-text">
                  SINCE 2025
                </h2>
              </div>

              {/* Right Side - Links */}
              <div className="grid relative grid-cols-2 gap-8 lg:gap-16">
                <LightSpot size={900} top="-200%" left="-200%" />

                <div>
                  <h4 className="font-semibold mb-4">Company</h4>
                  <ul className="space-y-2 text-sm">
                    {["Home", "About us", "Pricing", "Blog"].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-slate-300 hover:text-primary transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Services</h4>
                  <ul className="space-y-2 text-sm">
                    {["Home", "About us", "Pricing", "Blog"].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-slate-300 hover:text-primary transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-row gap-6 justify-between items-end">
              <p className="text-sm text-baseGray">
                VAINS 2025. All rights reserved.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-end mt-8 pt-6">
                <a
                  href="#"
                  className="text-sm text-baseGray hover:text-primary transition-colors"
                >
                  Terms of use
                </a>
                <a
                  href="#"
                  className="text-sm text-baseGray hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
