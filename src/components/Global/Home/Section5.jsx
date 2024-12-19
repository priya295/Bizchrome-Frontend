import React, { useEffect, useState } from "react";
import uxdesign from "../../../assets/uxdesign.jpg";
import axiosInstance from "../../../axiosInstance";

const Section5 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [freelancer, setFreelancer] = useState([]);

  async function fetchfreelancers() {
    try {
      const response = await axiosInstance.get("/users/user");
      console.log(response);
      setFreelancer(
        response.data.users.filter((u) => u.roleType == "freelancer")
      );
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchfreelancers();
  }, []);

  const cards = [
    {
      id: 1,
      name: "Bunny.design",
      role: "UI/UX Designer",
      image: uxdesign,
    },
 
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === freelancer.length - 3 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" py-12 px-4">
      <div className="max-w-[90%] mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-[40px] attractive-font font-bold">
            Checkout The Best <span className="text-blue-500">Portfolios</span>{" "}
            Here
          </h1>
          <p className="text-2xl text-gray-600 mb-4">
            Logos, websites, book covers & more!
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out mb-[10px]"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {freelancer.map((card) => (
              <div key={card.id} className="min-w-[33.333%] px-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                    //   src={card?.profileData?.user_image  }
                    src={uxdesign}
                      alt={card.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{card.name}</h3>
                    <p className="text-gray-600">{card.roleType}</p>
                    <div className="mt-4 flex justify-end">
                      <button className="text-blue-500 hover:text-blue-600 transition-colors">
                        →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </div>
  );
};
export default Section5;






