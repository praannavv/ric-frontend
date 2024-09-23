import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";

import LoadingSpinner from "../../common/LoadingSpinner";
import AddServiceModal from "./AddServiceModal";
import EditServiceModal from "./EditServiceModal";
import DeleteServiceModal from "./DeleteServiceModal";
import ServiceConfirmationDialog from "./ServiceConfirmationDialog";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { data: authUser } = useQuery({ queryKey: ["authUser"] });

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:8000/service");

        if (Array.isArray(response.data)) {
          setServices(response.data);
        } else if (response.data.services) {
          setServices(response.data.services);
        } else {
          throw new Error("Unexpected response format");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching service data:", error);
        setError(error.message || "Unknown error occurred");
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingSpinner color={"green"} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {authUser?.role === "Admin" ? (
        <div className="flex mb-12 gap-3 items-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-green-300">
            Services
          </h2>
          <AddServiceModal setServices={setServices} />
        </div>
      ) : (
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-green-300">
            Our Services
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Explore the services we offer.
          </p>
        </div>
      )}

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {services.length > 0 ? (
          services.map((service) => (
            <Card key={service.ServiceID} className="w-full max-w-sm mx-auto">
              <CardHeader
                shadow={false}
                floated={false}
                className="h-48 sm:h-60"
              >
                <img
                  src={service.ImageURL}
                  alt={service.Name}
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <div className="mb-2 flex items-center justify-between">
                  <Typography color="blue-gray" className="font-medium">
                    {service.Name}
                  </Typography>
                  <Typography color="blue-gray" className="font-medium">
                    <span>&#8377;</span>
                    {service.Price.toFixed(2)}
                  </Typography>
                </div>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal opacity-75"
                >
                  {service.Description}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <div className="flex flex-col justify-end sm:flex-row gap-2">
                  {authUser?.role === "Admin" ? (
                    <>
                      <EditServiceModal
                        service={service}
                        setServices={setServices}
                      />
                      <DeleteServiceModal
                        setServices={setServices}
                        service={service}
                      />
                    </>
                  ) : (
                    <ServiceConfirmationDialog service={service} />
                  )}
                </div>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="dark:text-fontColor-dark flex items-center justify-center h-[90%]">
            No services found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
