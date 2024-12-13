import React, { useRef, useEffect, useState } from 'react';
import uxdesign from "../../../assets/uxdesign.jpg";
import axiosInstance from "../../../axiosInstance";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

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

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === freelancer.length - 3 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="px-4 py-12">
            <div className="mx-auto max-w-[90%]">
                <div className="mb-12 text-center">
                    <h1 className="font-bold text-[40px] attractive-font">
                    Trusted Freelancers
                    </h1>
                </div>

                <div className="relative p-[10px] overflow-hidden">
                    <div
                        className="flex mb-[10px] transition-transform duration-500 ease-in-out"
                    >

                    </div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={0}
                        pagination={{
                            clickable: true,
                        }}
                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        // }}
                        modules={[Autoplay]}
                        className="pt-[3px] mySwiper"
                        breakpoints={{
                            992:{
                                slidesPerView: 3
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            576:{
                                slidesPerView: 1,
                            },
                            320:{
                                slidesPerView: 1
                            }
                        }}
                    >
                        {freelancer.map((card) => (
                            <SwiperSlide>
                                <div key={card.id} className="mx-auto w-[90%]">
                                    <div className="flex items-center bg-white custom-shadow p-[13px] rounded-lg overflow-hidden">
                                        <div className="aspect-w-4 aspect-h-3">
                                            <img
                                                src={uxdesign}
                                                alt={card.name}
                                                className="rounded-[60px] w-[90px] h-[72px] object-cover"
                                            />
                                        </div>
                                        <div className="flex justify-between items-center p-6 card-div">
                                            <div>
                                                <h3 className="mb-2 font-semibold text-xl">{card.name}</h3>
                                                <p className="text-gray-600">{card.roleType}</p>
                                            </div>
                                            <div className="flex justify-end">
                                                <button className="bg-blue-600 px-[13px] py-[6px] rounded-[40px] text-[21px] text-white hover:text-blue-600 transition-colors">
                                                    →
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


            </div>
        </div>
    );
};
export default Section5;