import React, { useState } from "react";
import { Mail, User, Building, MessageCircle, Send, Check } from "lucide-react";
import Button from "@/components/ui/Button";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    inquiryType: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const inquiryTypes = [
    "General Inquiry",
    "Support Request",
    "Partnership",
    "Sales Question",
    "Technical Issue",
    "Feedback",
    "Other",
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = "Please select an inquiry type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          organization: "",
          inquiryType: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-32 bg-gradient-to-br py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Message Sent!
            </h2>
            <p className="text-baseGray mb-6">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-green-600 h-1 rounded-full animate-pulse"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br px-4 sm:px-6 lg:px-8 mb-12">
      <div className="max-w-[830px] ml-auto">
        <div className="bg-white overflow-hidden">
          <div className="px-8 py-10 sm:px-12">
            <div className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-md text-baseGray"
                  >
                    First name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full pt-2 pr-0.5 pb-2 pl-3 border border-black rounded-lg focus:outline-none transition-all duration-200 ${
                        errors.firstName
                          ? "border-red-300 bg-red-50"
                          : "border-black hover:border-black"
                      }`}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-sm text-red-600">{errors.firstName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-md text-baseGray"
                  >
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full pt-2 pr-0.5 pb-2 pl-3 border border-black rounded-lg focus:outline-none transition-all duration-200 ${
                        errors.lastName
                          ? "border-red-300 bg-red-50"
                          : "border-black hover:border-black"
                      }`}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="text-sm text-red-600">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-md text-baseGray">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pt-2 pr-0.5 pb-2 pl-3 border border-black rounded-lg focus:outline-none transition-all duration-200 ${
                      errors.email
                        ? "border-red-300 bg-red-50"
                        : "border-black hover:border-black"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Organization */}
              <div className="space-y-2">
                <label
                  htmlFor="organization"
                  className="block text-md text-baseGray"
                >
                  Organization
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full pt-2 pr-0.5 pb-2 pl-3 border border-black rounded-lg focus:outline-none  transition-all duration-200"
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div className="space-y-2">
                <label
                  htmlFor="inquiryType"
                  className="block text-md text-baseGray"
                >
                  Type of inquiry <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full pt-2 pr-0.5 pb-2 pl-3 border border-black rounded-lg focus:outline-none  transition-all duration-200"
                />
                {errors.inquiryType && (
                  <p className="text-sm text-red-600">{errors.inquiryType}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-md text-baseGray"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full pt-2 pr-0.5 pb-2 pl-3 border border-black rounded-lg focus:outline-none transition-all duration-200 resize-none ${
                      errors.message
                        ? "border-red-300 bg-red-50"
                        : "border-black hover:border-black"
                    }`}
                  />
                </div>
                {errors.message && (
                  <p className="text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {/* <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button> */}

              <Button
                className="max-w-fit"
                variant="fill"
                as="a"
                size="md"
                href="/contact"
              >
                SEND MESSAGE
              </Button>
            </div>
          </div>

          {/* <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 sm:px-12">
            <p className="text-sm text-baseGray text-center">
              We respect your privacy and will never share your information with
              third parties.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
