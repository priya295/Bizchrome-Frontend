import React from "react";

const Section2 = () => {
  return (
    <div className=" bg-[#fff] p-8">
      <div>
        <h1 className="text-center text-[40px] text-[#3b82f6] font-medium attractive-font mb-[30px] ">
          How It Works
        </h1>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl shadow-cs bg-white relative overflow-hidden card-freelencer p-8">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full shadow-cs bg-[#fff]">
                <svg
                  className="h-8 w-8 text-[#3b82f6]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-black">Sign Up</h3>
            <p className="text-gray-400">Join as a client or freelancer.</p>
            <div className="shape"></div>
          </div>

          <div className="rounded-2xl shadow-cs bg-white p-8 relative overflow-hidden card-freelencer ">
            <div className="mb-6 flex h-16 w-16 items-center  justify-center rounded-full shadow-cs bg-[#fff]">
              <svg
                className="h-8 w-8 text-[#3b82f6]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-black">
              Search And Get
            </h3>
            <p className="text-gray-400">
              Clients: Search freelancer. Freelancers: Get work.
            </p>
            <div className="shape"></div>
          </div>

          <div className="rounded-2xl shadow-cs bg-[white] relative overflow-hidden card-freelencer p-8">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full shadow-cs bg-[#fff]">
              <svg
                className="h-8 w-8 text-[#3b82f6]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-black">Collaborate</h3>
            <p className="text-gray-400">Work together and succeed.</p>
            <div className="shape"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
