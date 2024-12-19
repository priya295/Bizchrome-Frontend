import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import about5 from "../../../assets/about5.jpg";

const Section2 = () => {
  return (
    <div className=" bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 py-10 lg:flex-row lg:items-center ">
          {/* Left column - Images */}
          <div className="relative flex-1 space-y-4">
            <div className="relative  overflow-hidden rounded-2xl">
              <img className="h-[100%] w-[100%]" src={about5} />
            </div>
          </div>

          {/* Right column - Content */}
          <div className="flex-1 space-y-8 lg:pl-12">
            <h1 className="text-4xl font-bold attractive-font text-gray-900 sm:text-5xl lg:text-6xl">
              Our Story
            </h1>

            <p className="text-lg leading-relaxed text-gray-600">
              Bizchrome was established with a vision to revolutionize the
              freelance marketplace. Recognizing the growing demand for
              freelance services and the need for a trustworthy platform,
              Pallavi Sangle embarked on a journey to create a space where both
              freelancers and clients could thrive. With a background in [insert
              relevant background or experience], Pallavi understood the
              challenges faced by both parties and aimed to address these
              through Bizchrome.
            </p>

        

            <button className="group inline-flex items-center gap-2 rounded-full border-2 border-blue-500 bg-blue-500 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-800 hover:border-blue-800">
              Get Started
              <GoArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
