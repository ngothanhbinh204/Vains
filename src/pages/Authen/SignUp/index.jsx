import React, { useState } from "react";
import User from "@/assets/icons/User.svg";
import Lock from "@/assets/icons/Lock.svg";
import Eye from "@/assets/icons/Eye.svg";
import EyeClosed from "@/assets/icons/EyeClosed.svg";
import { Check } from "lucide-react";

import BackgroundPattern from "@/assets/images/partent_login.svg";
import Mascot from "@/components/ui/Mascot";
import LightSpot from "@/sections/Shared/LightSpot";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import InputCheckBox from "@/components/ui/InputCheckbox";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    let formIsValid = true;

    if (!formData.username.trim()) {
      newErrors.username = "Username cannot be empty!";
      formIsValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password cannot be empty!";
      formIsValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long!";
      formIsValid = false;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password cannot be empty!";
      formIsValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password does not match!";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Registration successful:", formData);
      // Send form data to server or process further
    } else {
      console.log("Registration failed: Please check your information again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pb-18 pt-22 lg:pt-22 relative overflow-hidden">
      <LightSpot size={700} top="-42%" left="-22%" />

      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <img
          className="w-full h-full object-cover"
          src={BackgroundPattern}
          alt="Background pattern"
        />
      </div>

      <div className="w-full max-w-[820px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-16 items-center relative z-10">
        <LightSpot
          className="top-0 left-0 md:-top-[40%] md:left-[60%]"
          size={850}
        />
        <LightSpot
          className="top-0 left-0 md:-top-[0%] md:-left-[30%]"
          size={700}
        />

        {/* Left Side - SignUp Form */}
        <div className="lg:col-span-2 w-full text-white item-border-linear bg-none backdrop-blur-[2px] mx-auto p-6 md:p-8 lg:p-12 lg:mx-0">
          {/* Header */}
          <div className="text-center mb-8 ">
            <h1 className="text-white text-2xl md:text-3xl font-bold leading-tight">
              <span className="text-gradient-custom">Join us and unlock</span>
              <br />
              the power of seamless connection
              <br />
              with <span className="text-primary">VAINS</span>
            </h1>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Input */}
            <div className="relative">
              <Input
                style={{
                  backgroundColor: "rgba(105, 201, 215, 0.2)",
                  backdropFilter: "blur(4px)",
                }}
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="User name"
                leftIcon={<img src={User} alt="User" className="h-5 w-5" />}
                required
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-4">{errors.username}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="relative">
              <Input
                style={{
                  backgroundColor: "rgba(105, 201, 215, 0.2)",
                  backdropFilter: "blur(4px)",
                }}
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                leftIcon={<img src={Lock} alt="Lock" className="h-5 w-5" />}
                rightIcon={
                  showPassword ? (
                    <img
                      src={EyeClosed}
                      alt="Hide password"
                      className="h-5 w-5"
                    />
                  ) : (
                    <img src={Eye} alt="Show password" className="h-5 w-5" />
                  )
                }
                onRightIconClick={() => setShowPassword(!showPassword)}
                required
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-4">{errors.password}</p>
              )}
            </div>

            {/* Comfirm Password  */}
            <div className="relative">
              <Input
                style={{
                  backgroundColor: "rgba(105, 201, 215, 0.2)",
                  backdropFilter: "blur(4px)",
                }}
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                leftIcon={<img src={Lock} alt="Lock" className="h-5 w-5" />}
                rightIcon={
                  showConfirmPassword ? (
                    <img
                      src={EyeClosed}
                      alt="Hide password"
                      className="h-5 w-5"
                    />
                  ) : (
                    <img src={Eye} alt="Show password" className="h-5 w-5" />
                  )
                }
                onRightIconClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                required
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-4">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm ">
              <InputCheckBox
                checked={formData.rememberMe}
                onChange={handleInputChange}
                label="Remember me"
                name="rememberMe"
              />
              <a
                href="#"
                className="hover:text-primary transition-colors duration-200"
              >
                Forgot password?
              </a>
            </div>
            <Button className="w-full" variant={"fill"} size="md" type="submit">
              Sign Up
            </Button>

            {/* Sign Up Link */}
            <div className="text-center text-sm">
              You have an account?{" "}
              <a
                href="sign-in"
                className="text-primary hover:text-teal-300 transition-colors duration-200 font-medium"
              >
                Sign In
              </a>
            </div>
          </form>
        </div>

        {/* Right Side - Mascot */}
        <div className="lg:col-span-1 flex justify-center lg:justify-start items-center">
          <div className="relative">
            <Mascot
              size="200px"
              shadowWidth="160px"
              shadowHeight="20px"
              className="transform transition-transform duration-300"
            />

            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 w-4 h-4 bg-primary rounded-full animate-pulse opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
            <div className="absolute top-1/2 -right-12 w-2 h-2 bg-teal-300 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
