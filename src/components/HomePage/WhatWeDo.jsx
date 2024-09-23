import React from "react";

function WhatWeDo() {
  return (
    <section className=" py-12 ">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section (Left side, hidden on mobile) */}
          <div className="hidden md:block">
            <img
              src=""
              alt="Business Solutions"
              className="w-full h-auto mx-auto rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-[0_4px_15px_rgba(0,0,0,0.3),0_0_15px_5px_rgba(67,210,255,0.7)]"
            />
          </div>

          {/* Problem and Solution Section (Right side) */}
          <div className="backdrop-blur-lg border-2 drop-shadow-2xl dark:drop-shadow p-8 rounded-lg shadow-md space-y-8">
            {/* Problem */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-fontColor-dark">
                Problem & Solution
              </h2>
              <h3 className="text-2xl font-semibold text-red-600 mb-4">
                The Problem
              </h3>
              <p className="text-gray-700 dark:text-blue-gray-200 leading-relaxed mb-4">
                In today's fast-paced digital world, businesses face various
                challenges:
              </p>
              <ul className="list-disc text-left ml-6 text-gray-600 space-y-2 dark:text-blue-gray-200">
                <li>Difficulty adapting to evolving technologies.</li>
                <li>Inefficient legacy systems reducing productivity.</li>
                <li>
                  Limited scalability and security in existing infrastructure.
                </li>
                <li>
                  Insufficient in-house expertise for complex IT challenges.
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">
                Our Solution
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 dark:text-blue-gray-200">
                At RIC Group, we provide innovative IT solutions tailored to
                your business needs:
              </p>
              <ul className="list-disc text-left ml-6 text-gray-600 space-y-2 dark:text-blue-gray-200">
                <li>
                  Expert IT consulting to navigate the latest tech trends.
                </li>
                <li>
                  Custom software development for modernization and efficiency.
                </li>
                <li>
                  Scalable cloud solutions enhancing agility and security.
                </li>
                <li>
                  A dedicated team supporting your business at every step.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
