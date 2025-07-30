"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import { Spin as Hamburger } from "hamburger-react";
import Logo from "@/assets/images/VainsLogo.svg";

import { useHeaderTheme } from "@/context/HeaderThemeContext";
const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isLightBackground } = useHeaderTheme();
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY || currentScrollY < 50);
      setIsScrolled(currentScrollY > 100);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Animation variants
  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      x: 50,
      opacity: 0,
    },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    }),
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{
          y: showHeader ? 0 : -100,
          backgroundColor: isScrolled
            ? isLightBackground
              ? "rgba(255, 255, 255, 0.8)" // Header nền trắng
              : "rgba(0, 0, 0, 0.8)" // Header nền đen
            : "rgba(0, 0, 0, 0)", // Khi chưa scroll
        }}
        transition={{ type: "tween", stiffness: 300, damping: 30 }}
        className={`fixed top-0 left-0 w-full z-[100] ${
          isScrolled ? "backdrop-blur" : ""
        } ${isLightBackground ? "text-black" : "text-white"}`}
      >
        <div className="max-w-1440 mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <motion.div
            className=" font-semibold text-xl flex items-center gap-2 z-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/" className="cursor-pointer">
              <img src={Logo} alt="Logo" className="h-8 lg:h-[42px]" />
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 items-center font-medium">
            {[
              { label: "Technology", to: "/technology" },
              { label: "Pricing", to: "/Pricing" },
              { label: "About", to: "/about" },
            ].map((item) => (
              <motion.div key={item.to}>
                <Link
                  to={item.to}
                  className="relative inline-block group transition-all duration-200"
                >
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[1px] w-full scale-x-0 ${
                      isLightBackground ? "bg-black" : "bg-white"
                    }  transform origin-left transition-transform duration-300 group-hover:scale-x-100`}
                  />
                </Link>
              </motion.div>
            ))}

            <motion.div>
              <Button
                className="col-span-12 md:col-span-6"
                variant="fill_white"
                as="a"
                size="sm"
                href="/contact"
              >
                CONTACT
              </Button>
            </motion.div>
          </nav>

          {/* Animated Hamburger Menu */}
          <div className="md:hidden text-white z-60 relative ">
            <Hamburger
              toggled={isMobileMenuOpen}
              toggle={setIsMobileMenuOpen}
              size={24}
              color={isLightBackground ? "#000000" : "#FFFFFF"}
              duration={0.5}
              distance="lg"
              rounded
            />
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={`fixed inset-0 z-[110] md:hidden top-0 left-0 w-full ${
              isScrolled ? "backdrop-blur" : ""
            } ${isLightBackground ? "text-black" : "text-white"}`}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Animated Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              variants={backdropVariants}
              onClick={closeMobileMenu}
            />

            <motion.div
              className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] z-10 shadow-2xl
  ${
    isLightBackground
      ? "bg-gradient-to-br from-white via-gray-100 to-gray-200"
      : "bg-gradient-to-br from-gray-900 via-black to-gray-800"
  }`}
              variants={menuVariants}
            >
              <motion.div
                className="flex items-center justify-between p-6 border-b border-gray-700/50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <a
                  href="/"
                  className=" cursor-pointer font-semibold text-lg flex items-center gap-2"
                >
                  <img src={Logo} alt="Logo" className="h-5" />
                </a>
                <div className="md:hidden text-white z-60 relative ">
                  <Hamburger
                    toggled={isMobileMenuOpen}
                    toggle={setIsMobileMenuOpen}
                    size={24}
                    color={isLightBackground ? "#000000" : "#FFFFFF"}
                    duration={0.5}
                    distance="lg"
                    rounded
                  />
                </div>
              </motion.div>

              <nav className="flex flex-col p-6 space-y-1">
                {[
                  {
                    to: "/technology",
                    label: "Technology",
                    color: "bg-blue-400",
                  },
                  {
                    to: "/pricing",
                    label: "Pricing",
                    color: "bg-blue-400",
                  },
                  { to: "/about", label: "About", color: "bg-green-400" },
                ].map((item, i) => (
                  <motion.div
                    key={item.to}
                    custom={i}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    whileHover={{ x: 10, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={item.to}
                      onClick={closeMobileMenu}
                      className={`group flex items-center px-4 py-4 rounded-xl font-medium ${
                        isLightBackground
                          ? "text-black hover:bg-black/10"
                          : "text-white hover:bg-white/10"
                      } transition-all duration-200 border border-transparent hover:border-white/20`}
                    >
                      <span className="flex items-center gap-3">
                        {item.label}
                      </span>
                      <motion.svg
                        className="ml-auto w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </motion.svg>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  className="pt-4"
                  custom={2}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                >
                  <Button
                    className="w-full"
                    variant={isLightBackground ? "fill" : "fill_white"}
                    as="a"
                    size="sm"
                    href="/contact"
                    onClick={closeMobileMenu}
                  >
                    CONTACT
                  </Button>
                </motion.div>
              </nav>

              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div
                  className={`text-sm text-center ${
                    isLightBackground ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  © 2025 Vanins. All rights reserved.
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
