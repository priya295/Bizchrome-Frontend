import React from "react";
import { FaUser } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa";

const Section2 = () => {
  const steps = [
    {
      icon: <FaUser className="mb-4 w-8 h-8 text-blue-500" />,
      title: "Explore Categories",
      description: "Browse through skill-specific categories to find experts for your project needs.",
    },
    {
      icon: <FaUserCheck className="mb-4 w-8 h-8 text-green-500" />,
      title: "View Verified Profiles",
      description: "Access profiles with verified credentials and ensure reliable partnerships.",
    },
    {
      icon: <FiMessageCircle className="mb-4 w-8 h-8 text-yellow-500" />,
      title: "Choose a Plan",
      description: "Select credit-based plans for smooth connections with clients and freelancers.",
    },
    {
      icon: <FaBriefcase className="mb-4 w-8 h-8 text-purple-500" />,
      title: "Start Collaborating",
      description: "Use the chat feature to discuss ideas, plan projects, and work seamlessly together.",
    },
  ];

  return (
    <div className="mx-auto px-4 py-8 container">
      <h1 className="mb-8 font-bold attractive-font text-[26px] md:text-[32px] text-center">
        Meet the Freelancers Behind Your Projects!
      </h1>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-cs p-6 rounded-lg text-center transition-transform duration-300 hover:scale-105"
          >
            {step.icon}
            <h2 className="mb-2 font-semibold text-xl">{step.title}</h2>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
