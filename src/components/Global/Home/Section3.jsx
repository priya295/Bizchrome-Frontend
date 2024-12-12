import React from "react";
import freelancergirl from "../../../assets/freelancergirl.jpg";

const Section3 = () => {
  return (
    <div className=" bg-white">
      <main className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="absolute -top-10 left-0 rounded-lg bg-white p-4 shadow-lg">
              <div className="text-center">
                <span className="block text-4xl font-bold text-blue-500">
                  500+
                </span>
                <span className="text-gray-500">freelancers</span>
              </div>
            </div>
            <img
              className="rounded-tr-[16px] rounded-bl-[16px]"
              src={freelancergirl}
            />
            <div className="absolute -bottom-10 right-0 rounded-lg bg-white p-4 shadow-lg">
              <div className="text-center">
                <span className="block text-4xl font-bold text-blue-500">
                  300+
                </span>
                <span className="text-gray-500">freelance work Posted</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="mb-1 text-[40px] attractive-font text-[#3c82f6] font-medium ">
              Work with Top Clients
            </h1>
            <p className="text-[24px]  mb-4 font-medium">
              Find freelance projects that match your skills.
            </p>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-500">
              500+ Freelancers on Board Join a growing community of
              professionals.   300+ Jobs Posted
              Work with trusted clients and grow your career.
            </p>
         
          </div>
        </div>
      </main>
    </div>
  );
};

export default Section3;
