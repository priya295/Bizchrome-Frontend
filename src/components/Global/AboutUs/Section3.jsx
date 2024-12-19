import React from "react";
import {
  RiShieldCheckLine,
  RiMoneyDollarCircleLine,
  RiMedalLine,
} from "react-icons/ri";
import about7 from "../../../assets/about7.jpg";

const Section3 = () => {
  const features = [
    {
      icon: RiMedalLine,
      title: "Integrity",
      description:
        "We build trust through transparency, honesty, and clear communication.",
    },
    {
      icon: RiMoneyDollarCircleLine,
      title: "Community",
      description:
        "We foster an inclusive community for freelancers and clients to collaborate and succeed.",
    },
    {
      icon: RiShieldCheckLine,
      title: "Excellence",
      description:
        "We prioritize excellence in our freelancers and user experience.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <h1 className="text-4xl attractive-font md:text-5xl font-semibold leading-tight">
            Our Values
          </h1>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-[500px]">
          <img className="rounded-lg object-cover w-full h-full" src={about7} />
        </div>
      </div>
    </div>
  );
};

export default Section3;
