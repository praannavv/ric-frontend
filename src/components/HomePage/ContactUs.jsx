import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

export function ContactUs() {
  return (
   
    <section className="px-8 py-8 lg:py-16">
      <div className="container mx-auto text-center">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-4 !text-base lg:!text-2xl dark:text-fontColor-dark"
        >
          Customer Care
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl dark:text-green-300"
        >
          We&apos;re Here to Help
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
          Whether it&apos;s a question about our services, a request for
          technical assistance, or suggestions for improvement, our team is
          eager to hear from you.
        </Typography>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          <img
            src="/image/map.svg"
            alt="map"
            className="w-full h-full lg:max-h-[510px]"
          />
          <form action="#" className="flex flex-col gap-4 lg:max-w-sm">
            <div className="grid grid-cols-2 gap-4 ">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium text-gray-800 dark:text-gray-400"
                >
                  First Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="First Name"
                  name="first-name"
                  className="dark:focus:border-gray-300 text-gray-800 dark:text-gray-400"
                  containerProps={{
                    className: "min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium text-gray-800 dark:text-gray-400"
                >
                  Last Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="Last Name"
                  name="last-name"
                  className="dark:focus:border-gray-300 text-gray-800 dark:text-gray-400"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium text-gray-800 dark:text-gray-400"
              >
                Your Email
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="name@email.com"
                name="email"
                className="dark:focus:border-gray-300 text-gray-800 dark:text-gray-400"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium text-gray-800 dark:text-gray-400"
              >
                Your Message
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder="Message"
                name="message"
                className=" dark:focus:border-gray-300 text-gray-800 dark:text-gray-400"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <Button className="w-full dark:text-fontColor dark:bg-bgColor">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
