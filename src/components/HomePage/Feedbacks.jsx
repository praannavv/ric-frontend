import React from "react";
import { Carousel, IconButton, Typography } from "@material-tailwind/react";

export default function Feedbacks() {
  return (
    <div className="w-full min-h-[40vh] my-8 ">
      <div className="relative px-4 lg:px-2">
        {" "}
        {/* Adjusted padding for large screens */}
        <div className="text-center mb-6">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4 !text-2xl lg:!text-4xl dark:text-fontColor-dark"
          >
            The heartfelt testimonials of our{" "}
            <span className="text-green-500">service</span>
          </Typography>
        </div>
        <Carousel
          className="carousel-no-arrows-dots " // Add a custom class
          autoplay // Enables automatic rotation
          interval={2000} // Set the interval to 2 seconds
          loop
          prevArrow={() => <></>} // Hide prev arrow
          nextArrow={() => <></>} // Hide next arrow
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer  rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50 "
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {/* First Feedback Item */}
          <div className="py-6 sm:py-8 lg:py-10">
            <div className="px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
              <div className="text-center">
                <img
                  className="object-cover w-24 h-24 mx-auto rounded-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/4/avatar.jpg"
                  alt="Feedback"
                />
                <p className="mt-4 text-base font-semibold text-black dark:text-fontColor-dark">
                  Alice Johnson,{" "}
                  <span className="font-normal text-gray-600 dark:text-blue-gray-200">
                    Andheri
                  </span>
                </p>
                <blockquote className="max-w-md mx-auto mt-4">
                  <p className="text-lg leading-relaxed text-black dark:text-fontColor-dark">
                    “The service was exceptional and the support team was very
                    helpful. Highly recommend to everyone!”
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Second Feedback Item */}
          <div className="py-6 sm:py-8 lg:py-10">
            <div className="px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
              <div className="text-center">
                <img
                  className="object-cover w-24 h-24 mx-auto rounded-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/4/avatar.jpg"
                  alt="Feedback"
                />
                <p className="mt-4 text-base font-semibold text-black dark:text-fontColor-dark">
                  John Smith,{" "}
                  <span className="font-normal text-gray-600  dark:text-blue-gray-200">
                    Nallasopara
                  </span>
                </p>
                <blockquote className="max-w-md mx-auto mt-4">
                  <p className="text-lg leading-relaxed text-black dark:text-fontColor-dark">
                    “A great experience overall. The product quality exceeded my
                    expectations and the delivery was on time.”
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Third Feedback Item */}
          <div className="py-6 sm:py-8 lg:py-10">
            <div className="px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
              <div className="text-center">
                <img
                  className="object-cover w-24 h-24 mx-auto rounded-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/4/avatar.jpg"
                  alt="Feedback"
                />
                <p className="mt-4 text-base font-semibold text-black dark:text-fontColor-dark">
                  Emma Davis,{" "}
                  <span className="font-normal text-gray-600  dark:text-blue-gray-200">
                    Lower Parel
                  </span>
                </p>
                <blockquote className="max-w-md mx-auto mt-4">
                  <p className="text-lg leading-relaxed text-black dark:text-fontColor-dark">
                    “Excellent customer service and a fantastic product. I will
                    definitely be coming back for more!”
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
