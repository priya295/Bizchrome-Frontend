import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../../../axiosInstance';
import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaStar } from "react-icons/fa";





const Section4 = () => {
    const [showAllCategories, setShowAllCategories] = useState([]);
    const [showAllSubCategories, setShowAllSubCategories] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    console.log(showAllSubCategories)

    async function fetchCategory() {
        try {
            const response = await axiosInstance.get('/category/categories');
            setShowAllCategories(response.data);
            fetchSubCategory(response.data[0]?._id);

        } catch (error) {
            console.error(error);
        }
    }
    async function fetchSubCategory(id) {
        try {
            const response = await axiosInstance.get('/subcategory/subcategories/category/'+id);
            setShowAllSubCategories(response?.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchCategory();
    }, [])
    return (
        <div className='flex flex-col justify-between items-center gap-[20px] bg-[#fafafa] mx-auto px-4 py-8 rounded-md container'>
            <div className=''>
                <h3 className='mb-2 font-bold text-3xl text-center'>Popular Categories</h3>
                <p className='text-center text-gray-600'>Most viewed and all-time top-selling categories</p>
            </div>

            <div className='m-auto py-2 w-full md:w-[80%] categorytab'>
                    <div className="flex gap-5 py-[14px] overflow-x-scroll tab">
                        {showAllCategories?.map((category,index) => (
                            <div onClick={() => {
                                setActiveTab(index)
                                fetchSubCategory(category?._id)
                            }} className={`hover:border-[#1f47bb]   hover:bg-[#1f47bb] px-[30px] py-[10px] border rounded-full  text-center hover:text-white whitespace-nowrap transition-all cursor-pointer ${index == activeTab ? "bg-[#1f47ba] text-white" : "bg-white"}`}>{category?.name}</div>
                        ))}
                    </div>



                        <div className="mx-auto px-4 py-8">
                            <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                {showAllSubCategories.map((category, index) => (
                                    <div
                                        className="relative bg-white shadow-md hover:shadow-lg rounded-lg transform transition-all hover:-translate-y-1 duration-300 overflow-hidden ease-in-out"
                                    >
                                        <div className="p-6 h-[200px]">
                                            <h2 className="mb-2 font-semibold text-gray-800 text-xl">{category.name}</h2>
                                            <p className='flex items-center gap-[10px]'><FaStar className='text-yellow-400'/>4.8 Average Rating</p>
                                            <p className="text-gray-600">
                                            </p>
                                        </div>
                                        <div className="bottom-0 absolute bg-gray-50 px-6 py-4 w-full">
                                            <a
                                                href="#"
                                                className="font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300"
                                            >
                                                Learn more →
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default Section4