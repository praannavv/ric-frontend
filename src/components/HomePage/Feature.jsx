import React from "react";

function Feature() {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex px-4 py-1.5 mx-auto rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600">
            <p className="text-xs font-semibold tracking-widest text-black dark:text-fontColor-dark uppercase">
              All-in-One IT Services
            </p>
          </div>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl dark:text-fontColor-dark">
            <span className="text-green-400">Revolutionize</span> Your IT
            Management with Our Comprehensive Solutions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-fontColor-dark">
            Discover how our integrated platform enhances user engagement,
            streamlines service management, and transforms your IT experience
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
          <div className="transition-all duration-200 bg-white hover:shadow-xl rounded-lg">
            <div className="py-10 px-9 text-center">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Comprehensive Service Management
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Efficiently manage and track service requests with our
                user-friendly platform, designed to streamline your IT
                operations.
              </p>
            </div>
          </div>

          <div className="transition-all duration-200 bg-white hover:shadow-xl rounded-lg">
            <div className="py-10 px-9 text-center">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Enhanced User Engagement
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Boost user satisfaction with our intuitive tools and responsive
                support, tailored to meet your specific needs.
              </p>
            </div>
          </div>

          <div className="transition-all duration-200 bg-white hover:shadow-xl rounded-lg">
            <div className="py-10 px-9 text-center">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Seamless Integration
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Integrate effortlessly with our versatile platform that adapts
                to your existing systems and workflows
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
