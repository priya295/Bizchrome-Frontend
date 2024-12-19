import React from "react";
import richtheme from "../../src/assets/richtheme.jpg";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import brandlogo from "../../src/assets/brandlogo.png";

const login = () => {
  return (
    <div className="flex">
      {/* Left side - Image */}
      <div className="hidden lg:block lg:w-1/2">
        <img className="h-[730px] w-[100%] object-cover" src={richtheme} />
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 overflow-y-scroll h-[100] flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-xl space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div>
                <img className="h-[56px]" src={brandlogo} />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Log In</h2>
              <p className="mt-2 text-gray-600">
                or don't have an account?{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none "
                placeholder="Enter Account or Email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm  focus:outline-none "
                placeholder="Enter Password"
                required
              />
            </div>

            <div className="text-sm flex items-center justify-between">
              <Link href="#" className="text-blue-600 hover:underline">
                Forgot your password?
              </Link>
              <Link className="text-blue-600 hover:underline">
                Reset password.
              </Link>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none "
            >
              Log In
            </button>
          </form>

          {/* Social Login */}
          <div className="space-y-4">
            
            <div className="mt-8 flex justify-center">
          <button className=" text-[14px] flex items-center gap-[8px] p-[10px] border border-blue-600 text-blue-600 py-3 rounded-lg font-medium ">Continue with <FcGoogle  className="google-color" /></button>
         
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
