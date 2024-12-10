import React, { useEffect, useState } from "react";
import section1 from "../../../assets/section1 image.jpg";

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
        // Animation for stats
        const title = document.querySelector(".title");
        const subtitle = document.querySelector(".subtitle");
        title.classList.add("animate-fadeIn");
        subtitle.classList.add("animate-fadeIn");

        const stats = document.querySelectorAll(".stat");
        stats.forEach((stat, index) => {
            setTimeout(() => {
                stat.classList.add("animate-fadeIn");
            }, index * 200); // staggered animations
        });

        const badges = document.querySelectorAll(".badge");
        badges.forEach((badge, index) => {
            setTimeout(() => {
                badge.classList.add("animate-fadeIn");
            }, index * 200 + 800); // staggered animations after stats
        });
    }, []);

    return (
        <section className="flex flex-col md:flex-row items-center justify-between p-14 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
            <div className="flex-1 mb-8 md:mb-0">
                <h1 className="text-5xl font-extrabold mb-4 title opacity-0 animate-fadeIn">{displayedText}</h1>
                <p className="text-xl mb-6 subtitle opacity-0 animate-fadeIn">#No.1 Platform for Everyone!</p>
                <div className="flex mb-6">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="p-2 w-1/2 rounded-l-md border-2 border-gray-300 focus:outline-none focus:border-green-400"
                    />
                    <select className="p-2 border-2 border-gray-300 bg-white text-gray-800 rounded-r-md focus:outline-none focus:border-green-400">
                        <option>Choose Category</option>
                    </select>
                    <button className="bg-green-600 text-white p-2 px-6 rounded-md ml-2 hover:bg-green-700 transition duration-300">Search</button>
                </div>
                <div className="flex space-x-8">
                    <div className="text-center stat opacity-0">
                        <h2 className="text-3xl font-bold">{counts.freelancers}M</h2>
                        <p className="text-lg">Total Freelancers</p>
                    </div>
                    <div className="text-center stat opacity-0">
                        <h2 className="text-3xl font-bold">{counts.reviews}M</h2>
                        <p className="text-lg">Positive Reviews</p>
                    </div>
                    <div className="text-center stat opacity-0">
                        <h2 className="text-3xl font-bold">{counts.orders}M</h2>
                        <p className="text-lg">Orders Received</p>
                    </div>
                    <div className="text-center stat opacity-0">
                        <h2 className="text-3xl font-bold">{counts.projects}M</h2>
                        <p className="text-lg">Projects Completed</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 relative">
                <img
                    src={section1}
                    alt="Freelancer"
                    className="object-cover w-full h-full rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
                />
                <div className="absolute top-0 right-0 flex flex-col space-y-4 p-4">
                <div className="badge bg-white text-green-600 rounded-lg shadow-lg p-2 opacity-100 transform hover:scale-105 transition duration-300 hover:animate-bounce">
    Proof of Quality
</div>

                    <div className="badge bg-white text-green-600 rounded-lg shadow-lg p-2 opacity-0 animate-fadeIn transform hover:scale-105 transition duration-300">Safe and Secure</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-30 rounded-lg"></div>
            </div>
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.8s forwards;
                }
                    
            `}</style>
        </section>
    );
};

export default HeroSection;
