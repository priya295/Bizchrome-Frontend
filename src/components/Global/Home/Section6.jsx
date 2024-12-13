import React from "react";

const Section6 = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-[40px] attractive-font font-bold">
          Choose Your <span className="text-blue-500">Plan</span>
        </h1>
        <p className="text-[22px] text-gray-600 mb-4">
          Easily connect with clients and grow your network.
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Basic Plan */}
          <div className="relative bg-white rounded-3xl p-8 shadow-sm card-freelencer border hover:border-[blue]">
            <h2 className="text-2xl font-bold mb-2">Basic (Recommended)</h2>
            <div className="flex items-baseline mb-8">
              <span className="text-[46px] font-bold text-indigo-600">99</span>
              <span className="text-4xl text-indigo-600 ml-1">rs</span>
            </div>
            <p className="text-gray-800 mb-8">
              Get started with the Basic plan to improve your freelancer profile
              and attract more clients.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <div className="w-4 h-4 bg-indigo-600 rounded mr-3"></div>
                <span>1 Projects</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 bg-indigo-600 rounded mr-3"></div>
                <span>1 Clients</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 bg-indigo-600 rounded mr-3"></div>
                <span>1 Free Chats</span>
              </li>
            </ul>
            <p className="text-center mb-8">
              Kickstart your journey with ease!
            </p>
            <button className="w-full bg-indigo-600 text-white rounded-lg py-3 font-semibold hover:bg-indigo-700 transition-colors">
              Start Now
            </button>
          </div>

          {/* Standard Plan */}
          <div className="relative bg-white rounded-3xl p-8 shadow-sm card-freelencer border hover:border-[blue]">
            <h2 className="text-2xl font-bold mb-2">Standard</h2>
            <div className="flex items-baseline mb-8">
              <span className="text-[46px] font-bold text-indigo-600">499</span>
              <span className="text-4xl text-indigo-600 ml-1">rs</span>
            </div>
            <p className="text-gray-800 mb-8">
              Upgrade to the Standard plan to enhance your profile visibility
              and connect with more clients.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <div className="w-4 h-4 bg-indigo-600 rounded mr-3"></div>
                <span>6 Projects</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 bg-indigo-600 rounded mr-3"></div>
                <span>6 Clients</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 bg-indigo-600 rounded mr-3"></div>
                <span>6 Free Chats</span>
              </li>
            </ul>
            <p className="text-center mb-8">
              Take the next step towards success!
            </p>
            <button className="w-full bg-indigo-600 text-white rounded-lg py-3 font-semibold hover:bg-indigo-700 transition-colors">
              Start Now
            </button>
          </div>

          {/* Premium Plan */}
          <div className="relative bg-white rounded-3xl p-8 shadow-sm card-freelencer border hover:border-[blue]">
            <h2 className="text-2xl font-bold mb-2">Premium</h2>
            <div className="flex items-baseline mb-8">
              <span className="text-[46px] font-bold text-indigo-600">
                1499
              </span>
              <span className="text-4xl text-indigo-600 ml-1">rs</span>
              <span className="ml-2 text-2xl font-semibold text-amber-500">
                10% Discount
              </span>
            </div>
            <p className="text-gray-800 mb-8">
              Maximize your potential with the Premium plan and grow your
              freelancing career.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <div className="w-4 h-4 bg-indigo-600 rounded mr-3"></div>
                <span>15 Projects</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 bg-indigo-600 rounded mr-3"></div>
                <span>15 Clients</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 bg-indigo-600 rounded mr-3"></div>
                <span>15 Free Chats</span>
              </li>
            </ul>
            <p className="text-center mb-8">Unlock all the benefits today!</p>
            <button className="w-full bg-indigo-600 text-white rounded-lg py-3 font-semibold hover:bg-indigo-700 transition-colors">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
