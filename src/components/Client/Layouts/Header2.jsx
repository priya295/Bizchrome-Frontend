import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BizChromeLogo from "../../../assets/bizchromelogo.gif";
import { MdWindow } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isOpenDrop, setIsOpenDrop] = useState(false);
    const dropdownRef = useRef(null);
    const sidebarRef = useRef(null);
    const [isOpenProfile, setIsOpenProfile] = useState(false);

    const categories = [
        { title: "Design & Creative", href: "/" },
        { title: "Digital Marketing", href: "/" },
        { title: "Development & IT", href: "/" },
        { title: "Music & Audio", href: "/" },
        { title: "Finance & Accounting", href: "/" },
        { title: "Programming & Tech", href: "/" },
        { title: "Video & Animation", href: "/" },
        { title: "Writing & Translation", href: "/" },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            // Close dropdown menu if clicking outside of it
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                !sidebarRef.current?.contains(event.target)
            ) {
                setIsOpenDrop(false);
                setIsOpen(false); // Close the sidebar
                setIsOpenProfile(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="top-0 z-50 sticky border-[#6d8ede] bg-gradient-to-r from-blue-600 to-blue-800 p-[10px] border-b w-full text-white">
            <div className="md:mx-auto px-4 max-w-full container">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-[30px]">
                        <div className="flex items-center">
                            {/* <button
                                className="md:hidden mr-2 text-white hover:text-gray-300"
                                onClick={toggleMenu}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button> */}
                            <Link to="/" className="font-bold text-xl">
                                <img src={BizChromeLogo} className="w-[84px]" />
                            </Link>
                        </div>

                        <nav className="md:flex items-center gap-[14px] space-x-4 hidden">
                            <div className="flex items-center">
                                <div
                                    className="relative bg-[#acb9dd8a] px-[19px] py-[6px] rounded-[30px]"
                                    ref={dropdownRef}
                                >
                                    <Link
                                        to="#"
                                        className="flex items-center gap-[4px] font-medium hover:text-gray-300"
                                        onClick={() => setIsOpenDrop(!isOpenDrop)}
                                    >
                                        <MdWindow />
                                        Categories
                                    </Link>
                                    {isOpenDrop && (
                                        <div className="top-30px left-0 absolute bg-white ring-opacity-5 shadow-lg mt-2 rounded-lg ring-1 ring-black w-64 focus:outline-none">
                                            <div className="py-1">
                                                {categories.map((category, index) => (
                                                    <Link
                                                        key={index}
                                                        to={category.href}
                                                        className="relative flex items-center gap-3 hover:bg-gray-100 px-4 py-2 text-gray-700 text-sm transition-all category-link"
                                                    >
                                                        {category.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div className="md:block relative hidden bg-[#6d8ede] rounded-[30px] w-[330px]">
                        <input
                            type="text"
                            className="bg-transparent p-[10px] pr-[30px] w-full placeholder:font-medium placeholder:text-white focus:outline-none"
                            placeholder="Search..."
                        />
                        <CiSearch className="top-[12px] right-[8px] absolute font-medium text-[20px] text-white" />
                    </div>

                    <div className="flex items-center gap-[10px] space-x-2">
                        <button
                            to="/login"
                            className="bg-white hover:bg-gray-100 px-[10px] py-[9px] rounded-[30px] text-[#2048bc] text-[22px]"
                        >
                            <MdEmail />
                        </button>
                        <div className="relative" ref={dropdownRef}>
                            <button
                                to="/signup"
                                onClick={() => setIsOpenProfile(!isOpenProfile)}
                                className="bg-white hover:bg-gray-100 px-3 py-3 rounded-[30px] text-[#2048bc]"
                            >
                                <FaUser />
                            </button>
                            {isOpenProfile && (
                                <div className="right-0 absolute bg-white shadow-lg mt-2 py-1 rounded-md w-48">
                                    <Link
                                        to="#"
                                        className="block hover:bg-gray-100 px-4 py-[10px] text-gray-700 text-sm"
                                    >
                                        Edit Profile
                                    </Link>
                                    <Link
                                        to="#"
                                        className="block hover:bg-gray-100 px-4 py-[10px] text-red-600 text-sm"
                                    >
                                        Logout
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            {/* <div
                className={`fixed inset-0 z-50 bg-gradient-to-r from-blue-600 to-blue-800 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out md:hidden`}
                ref={sidebarRef}
            >
                <div className="flex justify-between items-center border-white/20 p-4 border-b">
                    <span className="font-bold text-xl">
                        <img src={BizChromeLogo} className="w-[84px]" />
                    </span>
                    <button
                        className="text-white hover:text-gray-300"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <nav className="flex flex-col space-y-4 p-4">
                    <Link
                        to="#"
                        className="hover:bg-white/10 px-4 py-2 rounded"
                        onClick={toggleMenu}
                    >
                        Home
                    </Link>
                    <Link
                        to="/browse-jobs"
                        className="hover:bg-white/10 px-4 py-2 rounded"
                        onClick={toggleMenu}
                    >
                        Browse Jobs
                    </Link>
                </nav>
            </div> */}
        </header>
    );
}

export default Header;
