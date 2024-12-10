import React, { useEffect, useState } from "react";
import axiosInstance from "../../../axiosInstance";
import UserImage from "../../../assets/userimage.jpg";
import { motion } from "framer-motion"; // Importing framer-motion for animations

const FeaturedFreelancers = () => {
  const [freelancers, setFreelancers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const freelancersPerSlide = 4;

  useEffect(() => {
    const fetchFreelancers = async () => {
      try {
        const response = await axiosInstance.get('/users/user');
        setFreelancers(response.data.users);
      } catch (error) {
        console.error("Error fetching freelancers:", error);
      }
    };

    fetchFreelancers();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Math.ceil(freelancers.length / freelancersPerSlide) - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [freelancers]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(freelancers.length / freelancersPerSlide) - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(freelancers.length / freelancersPerSlide) - 1 ? 0 : prevIndex + 1
    );
  };

  const displayedFreelancers = freelancers.slice(currentIndex * freelancersPerSlide, (currentIndex + 1) * freelancersPerSlide);

  return (
    <div className="bg-blue-50 py-10 rounded-3xl w-[98%] mx-auto relative mt-[-20px]">
      <div className="container mx-auto px-5">
        <h2 className="text-[30px] font-bold text-gray-800 text-center mb-6">Our Users & Supporters</h2>
        <div className="relative">
          <div className="flex overflow-hidden transition-transform duration-300">
            {displayedFreelancers.map((freelancer) => (
              <motion.div
                key={freelancer._id}
                className="w-1/4 p-2"
                whileHover={{ scale: 1.05 }} // Scale up on hover
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white rounded-lg shadow-lg p-5 transform transition-all duration-300 hover:shadow-xl h-[150px]">
                  <div className="flex items-center mb-4">
                    <img
                      src={freelancer.avatar || UserImage}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{freelancer.name}</h3>
                      <p className="text-sm text-gray-500">{freelancer.roleType}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="text-gray-700 ml-1">{freelancer.rating}</span>
                    </div>
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                      ${freelancer.rate}/hr
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <motion.button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform duration-200"
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }} // Scale on hover
          >
            ❮
          </motion.button>
          <motion.button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform duration-200"
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
          >
            ❯
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFreelancers;
