import React from "react";
import { Link } from "react-router-dom";
import richtheme from "../../src/assets/richtheme.jpg";
import { FaUser } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import brandlogo from "../../src/assets/brandlogo.png";



const SignUp= () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Image Section */}
      <div className="hidden lg:block lg:w-1/2">
      <img className="h-[730px] w-[100%] object-cover" src={richtheme}/>

      </div>

      {/* Right Content Section */}
      <div className="w-full h-[100vh] overflow-y-scroll lg:w-1/2 px-6 py-12  lg:px-16 flex flex-col">
        {/* Logo */}
       
        <div className="flex items-center mb-8 gap-2">
        <div>
                <img className="h-[56px]" src={brandlogo}/>
              </div>
            </div>

        {/* Sign Up Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-2">Sign up</h1>
          <p className="text-gray-600">
            or already have an account?{' '}
            <Link href="#" className="text-blue-600 hover:text-blue-700">
              Sign in
            </Link>
          </p>
        </div>

        {/* User Type Toggle */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button className="py-3 px-4 border flex items-center gap-[10px] justify-center rounded-lg bg-[white] transition-colors">
            <FaUser/> Freelancer
          </button>
          <button className="py-3 px-4 border flex items-center gap-[10px] justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
           <IoBag/>  Employer
          </button>
        </div>

        {/* Sign Up Form */}
        <form className="space-y-6">
       

          {/* Username Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none "
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none "
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
           
            
              <input
                type="number"
                placeholder="Enter Number"
                className="flex-1 px-3 py-2 w-full border rounded-lg focus:outline-none "
              />
           
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none "
            />
          </div>
            {/* Confirm Password Field */}
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              Accept the{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Terms
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none "
          >
            Sign up
          </button>
        </form>

        {/* Social Login */}
        <div className="mt-8 flex justify-center">
          <button className=" text-[14px] flex items-center gap-[8px] p-[10px] border border-blue-600 text-blue-600 py-3 rounded-lg font-medium ">Continue with <FcGoogle  className="google-color" /></button>
         
        </div>
      </div>
    </div>
  )
}

export default  SignUp
