import React, { useEffect, useState } from 'react';
import cartoon from "../../../assets/cartoon.jpeg";
import words from "../../../assets/words.jpeg";
import mobile from "../../../assets/mobile.jpeg";
import videoediting from "../../../assets/videoediting.jpeg";
import arcticle from "../../../assets/arcticle.jpeg";
import books from "../../../assets/books.jpeg";
import raticle from "../../../assets/raticle.jpeg";
import pen from "../../../assets/pen.jpeg";
import dice from "../../../assets/dice.jpg";
import axiosInstance from '../../../axiosInstance.js';

const Section4 = () => {
  const [showAll, setShowAll] = useState(false); // To toggle between showing limited and all categories.

  // Fetch categories (existing integration, unchanged)
  async function fetchCategory() {
    try {
      const response = await axiosInstance.get('/category/categories');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  // Categories array
  const categories = [
    { title: "Graphics and Designs", image: words },
    { title: "Video Animations", image: cartoon },
    { title: "Digital Marketing", image: raticle },
    { title: "Data", image: books },
    { title: "Development", image: mobile },
    { title: "Writing and Translations", image: pen },
    { title: "Businesses", image: arcticle },
    { title: "Programming and Tech", image: videoediting },
    { title: "Music and Audio", image: videoediting },
    { title: "Photography", image: dice },
    { title: "Finance & Accounting", image: pen },
    { title: "Content Writing", image: videoediting },
    { title: "Lifestyle", image: dice },
    { title: "Design and Creative", image: videoediting },
  ];

  // Determine categories to show
  const displayedCategories = showAll ? categories : categories.slice(0, 8);

  return (
    <div className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-center attractive-font text-[30px] font-bold tracking-tight md:text-[40px]">
          Choose Different <span className="text-blue-500">Category</span>
        </h1>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {displayedCategories.map((category, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer rounded-[20px]"
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-[100%] w-[100%] transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3 className="text-center text-[20px] text-white attractive-font font-semibold">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Button to show more categories */}
        <div className="mt-12 text-center">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="rounded-full bg-blue-500 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-600"
            >
              More Categories
            </button>
          ) : (
            <button
              onClick={() => setShowAll(false)}
              className="rounded-full bg-blue-500 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-600"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section4;
