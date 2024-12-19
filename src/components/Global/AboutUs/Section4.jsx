import React from "react";
import ingrity from "../../../assets/ingrity.png";
import communitys from "../../../assets/Communitys.png";
import excellenc from "../../../assets/excellenc.png";


const Section4 = () => {
  const values = [
    {
      Image: ingrity,
      title: "Wide Range of Services",
      description:
        "Whether you need web development, graphic design, content writing, digital marketing, or any other freelance service, Bizchrome has you covered. Our platform hosts a wide range of talented freelancers ready to meet your needs of all sizes and complexities.",
    },
    {
      Image: communitys,
      title: "Easy Navigation and Search",
      description:
        "Our user-friendly interface makes it easy for clients to search for freelancers based on their specific needs. Advanced filters and categories help you find the perfect freelancer for your project quickly and efficiently.",
    },
    {
      Image: excellenc,
      title: "Quality Assurance",
      description:
        "At Bizchrome, quality is paramount. We carefully vet freelancers to ensure that they meet our high standards of professionalism and expertise. Clients can read freelancer profiles, ratings, and feedback to make informed decisions.",
    },
  ];
  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl attractive-font font-bold text-center mb-12">
        What We <span className="text-blue-600">Offer</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div 
            key={index}
            className="bg-blue-600 rounded-2xl card-freelencer cursor-pointer p-8 text-center text-white flex flex-col items-center"
          >
            <img className="h-[100px]" src={value.Image} />
            <h2 className="text-2xl font-semibold mb-4">{value.title}</h2>
            <p className="text-lg leading-relaxed text-white/90">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;