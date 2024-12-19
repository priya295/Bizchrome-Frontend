import React ,{ useState } from 'react'
import Bizchromelogogif from "../../../assets/bizchromelogo.gif";
import { IoSearchOutline } from 'react-icons/io5';
import { IoMailOutline } from 'react-icons/io5';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { IoLogOutOutline } from 'react-icons/io5';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="max-w-[100%] mx-auto p-[0] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className='h-[65px] w-[110px]' src={Bizchromelogogif}/>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="flex justify-center w-[100%] sm:block flex-1 max-w-2xl mx-4">
            <div className="relative ">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <IoSearchOutline className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search categories"
                className="block w-[100%] pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            {/* Search Icon - Visible only on mobile */}
            <button className="sm:hidden p-2 hover:bg-gray-100 rounded-full">
              <IoSearchOutline className="h-6 w-6 text-gray-600" />
            </button>

            {/* Mail Icon */}
            <button className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full">
              <IoMailOutline className="h-6 w-6 text-white" />
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 p-2 bg-blue-500 hover:bg-blue-600 rounded-full"
              >
                <IoPersonCircleOutline className="h-6 w-6 text-white" />
             
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 border">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <IoPersonCircleOutline className="h-5 w-5" />
                    Edit Profile
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <IoCheckmarkCircleOutline className="h-5 w-5" />
                    Profile Verification
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <IoInformationCircleOutline className="h-5 w-5" />
                    Plan Info
                  </a>
                  <hr className="my-1" />
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    <IoLogOutOutline className="h-5 w-5" />
                    Log Out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search - Shown below header on mobile */}
      <div className="sm:hidden px-4 pb-4">
        <div className="relative  ">
          <div className="absolute inset-y-0 left-[170px]  pl-3 flex items-center pointer-events-none">
            <IoSearchOutline className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search categories"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
