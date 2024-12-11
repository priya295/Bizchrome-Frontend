import React from "react";
import bizchromelogo from "../../../assets/bizchromelogo.gif";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-white">
      <header className="border-b">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div>
              <img className="w-[130px]" src={bizchromelogo} />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-blue-500 font-medium">
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Find work
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Find Freelancers
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Log In
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Sign Up
            </Link>
          
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
