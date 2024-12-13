import React, { useEffect, useState } from "react";
import section1 from "../../../assets/users1.jpg";
import { FaSearch } from "react-icons/fa";
import userImg from '../../../assets/user.png'
import userImg2 from '../../../assets/girl.jpg'


const HeroSection = () => {
    const [displayedText, setDisplayedText] = useState(""); // Start with an empty string
    const [counts, setCounts] = useState({
        freelancers: 0,
        reviews: 0,
        orders: 0,
        projects: 0,
    });

    const textArray = [
        "EXPLORE BizChrome",
        "Discover Amazing Opportunities",
        "Join the Revolution!",
    ];
    const typingSpeed = 150; // Speed of typing effect
    const erasingSpeed = 100; // Speed of erasing effect
    const pauseDuration = 2000; // Pause duration after each phrase

    useEffect(() => {
        let textIndex = 0; // Index for the current text
        let charIndex = 0; // Index for the current character
        let typingTimeout; // Timeout for typing
        let erasingTimeout; // Timeout for erasing

        const typeText = () => {
            if (charIndex < textArray[textIndex].length) {
                setDisplayedText(textArray[textIndex].substring(0, charIndex + 1)); // Update displayed text
                charIndex++;
                typingTimeout = setTimeout(typeText, typingSpeed); // Continue typing
            } else {
                clearTimeout(typingTimeout);
                setTimeout(() => {
                    eraseText(); // Start erasing after typing is done
                }, pauseDuration);
            }
        };

        const eraseText = () => {
            if (charIndex > 0) {
                setDisplayedText(textArray[textIndex].substring(0, charIndex - 1)); // Update displayed text
                charIndex--;
                erasingTimeout = setTimeout(eraseText, erasingSpeed); // Continue erasing
            } else {
                clearTimeout(erasingTimeout);
                textIndex = (textIndex + 1) % textArray.length; // Move to the next phrase
                charIndex = 0; // Reset charIndex for the next phrase
                setTimeout(typeText, 500); // Pause before starting a new typing cycle
            }
        };

        typeText(); // Start typing

        return () => {
            clearTimeout(typingTimeout);
            clearTimeout(erasingTimeout);
        };
    }, []);

    useEffect(() => {
        // Animation for stats counts
        const targetCounts = {
            freelancers: 960,
            reviews: 850,
            orders: 98,
            projects: 250,
        };
        const duration = 2000; // Animation duration in milliseconds

        const animateCounts = () => {
            const startCounts = { freelancers: 0, reviews: 0, orders: 0, projects: 0 };
            const startTime = performance.now();

            const updateCounts = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1); // Cap progress at 1

                setCounts({
                    freelancers: Math.floor(progress * targetCounts.freelancers),
                    reviews: Math.floor(progress * targetCounts.reviews),
                    orders: Math.floor(progress * targetCounts.orders),
                    projects: Math.floor(progress * targetCounts.projects),
                });

                if (progress < 1) {
                    requestAnimationFrame(updateCounts);
                }
            };

            requestAnimationFrame(updateCounts);
        };

        animateCounts();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const title = document.querySelector(".title");
            const subtitle = document.querySelector(".subtitle");
            if (title) title.classList.add("animate-fadeIn");
            if (subtitle) subtitle.classList.add("animate-fadeIn");
        }, 100);
    }, []);


    return (
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 min-h-[600px] overflow-hidden banner-section">
            {/* Left Section */}
            <div className="flex md:flex-row flex-col items-center gap-[20px] xl:mx-[30px] px-[10px] xl:px-0 py-12 mx:auto">
                <div className="z-10 w-full lg:w-[50%]">
                    <h1 className="mb-6 font-bold text-[52px] text-white md:text-5xl lg:text-5xl leading-tight title">
                    Find Top-Quality Freelance Services for Your Business
                    </h1>
                    <p className="mb-8 max-w-xl text-gray-200 text-lg subtitle">
                    Collaborate with expert freelancers to achieve your business goals affordably and efficiently.
                    </p>

                    {/* Search Section */}
                    <div className="flex sm:flex-row flex-col gap-4 bg-white mb-12 p-4 rounded-[40px]">
                        <div className="flex-1 min-w-0">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="bg-white px-4 py-3 border-r-2 w-full focus:outline-none"
                            />
                        </div>
                        <select className="border-gray-300 bg-white px-4 py-3 rounded-lg sm:w-48 focus:outline-none">
                            <option>Choose Category</option>
                            <option>Web Development</option>
                            <option>Design</option>
                            <option>Marketing</option>
                        </select>
                        <button className="flex justify-center items-center bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-3 rounded-[40px] text-white transition-colors">
                            <FaSearch className="mr-2 w-5 h-5" />
                            Search
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="gap-8 grid grid-cols-2 md:grid-cols-4 text-white">
                        <div className="stat">
                            <div className="mb-1 font-bold text-3xl">{counts.freelancers}M</div>
                            <div className="text-gray-300 whitespace-nowrap">Total Freelancer</div>
                        </div>
                        <div>
                            <div className="mb-1 font-bold text-3xl">850M</div>
                            <div className="text-gray-300 whitespace-nowrap">Positive Review</div>
                        </div>
                        <div>
                            <div className="mb-1 font-bold text-3xl">98M</div>
                            <div className="text-gray-300 whitespace-nowrap">Order received</div>
                        </div>
                        <div>
                            <div className="mb-1 font-bold text-3xl">250M</div>
                            <div className="text-gray-300 whitespace-nowrap">Projects Completed</div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Hidden on mobile */}
                <div className="lg:block relative hidden w-[100%] lg:w-[50%] h-[600px]">
                    {/* Main Image */}
                    <div className="top-1/2 right-0 absolute flex items-end gap-[20px] tap-[20px] -translate-y-1/2">
                        <img
                            src={section1}
                            alt="Professional"
                            className="shadow-xl rounded-lg w-[300px] h-[350px] object-cover"
                        />
                        <img
                            src={userImg2}
                            alt="Professional"
                            className="shadow-xl rounded-lg w-[300px] h-[440px] object-cover"
                        />
                    </div>

                    {/* Floating Cards */}
                    <div className="top-[150px] left-[200px] absolute bg-white shadow-lg p-4 rounded-lg proof">
                        <div className="flex items-center gap-2">
                            <div className="bg-emerald-100 p-2 rounded-full">
                                <svg
                                    className="w-6 h-6 text-emerald-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <div className="font-semibold">Proof of quality</div>
                                <div className="text-gray-500 text-sm">Lorem Ipsum Dolor Amet</div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-20 left-[103px] absolute bg-white shadow-lg p-4 rounded-lg professional">
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-2">
                                <img src={userImg} className="w-[30px]" />
                                <img src={userImg} className="w-[30px]" />
                                <img src={userImg} className="w-[30px]" />
                                <img src={userImg} className="w-[30px]" />
                                <img src={userImg} className="w-[30px]" />

                            </div>
                            <div>
                                <div className="font-semibold">58M+ Professionals</div>
                            </div>
                        </div>
                    </div>

                    <div className="right-[-50px] bottom-[220px] absolute bg-white shadow-lg p-4 rounded-lg safe">
                        <div className="flex items-center gap-2">
                            <div className="bg-emerald-100 p-2 rounded-full">
                                <svg
                                    className="w-6 h-6 text-emerald-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <div className="font-semibold">Safe and Secure</div>
                                <div className="text-gray-500 text-sm">Lorem Ipsum Dolor Amet</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;
