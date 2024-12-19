import React, { useEffect, useState } from "react";
import axiosInstance from "../../../axiosInstance";

const Section3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [category, setCategory] = useState([]);

  async function fetchcategory() {
    try {
      const response = await axiosInstance.get("/category/categories");
      console.log(response?.data);
      setCategory(
        response.data
      );
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchcategory();
  }, []);

  const cards = [
    {
      id: 1,
      name: "Bunny.design",
      role: "UI/UX Designer",
    },
 
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === category.length - 3 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" py-12 px-4">
      <div className="max-w-[90%] mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-[40px] attractive-font font-bold">
            Top <span className="text-blue-500">Catogories</span>
          </h1>
       
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out mb-[10px]"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {category.map((card) => (
              <div key={card.id} className="min-w-[33.333%] px-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-cs">
                  <div className="aspect-w-4 aspect-h-3">
                 
                  </div>
                  <div className="p-6 ">

                    <h3 className="text-xl font-semibold mb-2">{card.name}</h3>
                    <p className="text-gray-600">{card.roleType}</p>
               
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
export default Section3;






