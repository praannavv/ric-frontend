import React from "react";

function DetailedFeatures() {
  return (
    <section className="py-10  sm:py-16 lg:py-24 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 sm:gap-x-12 gap-y-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 dark:text-fontColor-dark sm:text-4xl lg:text-5xl lg:leading-tight">
              1 <span className="text-green-300">team</span>.
              <br />
              20+ years.
              <br />
              1000+ projects.
              <br />
            </h2>
            <p className="mt-6 text-base text-gray-600 dark:text-fontColor-dark">
              Our clients rely on us for delivering top-notch IT services and
              solutions that drive their success. With a commitment to
              excellence and a track record of success, we empower businesses to
              achieve their goals and stay ahead in the digital age.
            </p>
          </div>

          <div className="lg:col-span-3 xl:col-span-4">
            <div className="grid items-center max-w-4xl grid-cols-2 mx-auto lg:grid-cols-4 gap-x-10 gap-y-16">
              <div>
                <img
                  className="object-contain w-full h-6 mx-auto dark:text-fontColor-dark"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png"
                  alt=""
                />
              </div>

              <div>
                <img
                  className="object-contain w-full h-8 mx-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png"
                  alt=""
                />
              </div>

              <div>
                <img
                  className="object-contain w-full h-8 mx-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png"
                  alt=""
                />
              </div>

              <div>
                <img
                  className="object-contain w-full mx-auto h-7"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailedFeatures;
