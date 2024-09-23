import React, { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
  Select,
  Option,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export default function ServiceConfirmationDialog({ service }) {
  const [open, setOpen] = useState(false);
  const [flatRoomNo, setFlatRoomNo] = useState("");
  const [streetName, setStreetName] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();
  const toggleDialog = () => {
    // const token = Cookies.get("jwt"); // Get JWT from cookies
    // if (!token) {
    //   // If no token, navigate to login
    //   navigate("/login");
    // }
     setOpen(!open);
  };
  const handleConfirm = async () => {
    const orderData = {
      serviceID: service.ServiceID,
      flatRoomNo,
      streetName,
      pincode,
      city,
      totalPrice: service.Price,
    };
    console.log(orderData);
    try {
      const res = await axios.post("http://localhost:8000/bookService", orderData, {
        withCredentials: true,
      });
      console.log(res.data);
      setOpen(false);
      setFlatRoomNo("");
      setStreetName("");
      setPincode("");
      setCity("");
    } catch (error) {
      console.error("Error creating order:", error);
      setOpen(false);
    }
  };

  return (
    <>
      <Button onClick={toggleDialog} variant="outlined">
        Book Now
      </Button>

      <Dialog size="sm" open={open} handler={toggleDialog} className="p-4">
        <DialogHeader className="relative m-0 block">
        <span>{service.Name}</span>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={toggleDialog}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="space-y-4 pb-6">
          
          <div className="w-full">
            <img
              src={service.ImageURL}
              alt={service.Name}
              className="object-cover w-full h-[200px] rounded-md"
            />
          </div>

          <Typography variant="body1" color="blue-gray">
            {service.Description}
          </Typography>

          <div className="flex justify-between items-center w-full">
            <Typography variant="body2" color="blue-gray">
              Total Price:
            </Typography>
            <Typography
              variant="body1"
              color="blue-gray"
              className="font-semibold"
            >
              ${service.Price.toFixed(2)}
            </Typography>
          </div>

          <div>
            <Typography variant="small" className="mb-2 font-medium">
              Flat/Room No & Building Name
            </Typography>
            <Input
              type="text"
              value={flatRoomNo}
              onChange={(e) => setFlatRoomNo(e.target.value)}
              placeholder="e.g. 312, Mangal Deep Apt"
              className="focus:!border-t-gray-900"
            />
          </div>

          <div>
            <Typography variant="small" className="mb-2 font-medium">
              Street Name & Nearby
            </Typography>
            <Input
              type="text"
              value={streetName}
              onChange={(e) => setStreetName(e.target.value)}
              placeholder="e.g., Achole Road, near Kapol College"
              className="focus:!border-t-gray-900"
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-10">
            <div className="w-full lg:w-1/2">
              <Typography variant="small" className="mb-2 font-medium">
                Pincode
              </Typography>
              <Input
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="e.g., 400001"
                className="focus:!border-t-gray-900"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <Typography variant="small" className="mb-2 font-medium">
                City
              </Typography>
              <Select
                value={city}
                onChange={(value) => setCity(value)}
                className="focus:!border-primary w-full"
                placeholder="Select City"
              >
                <Option value="Andheri">Andheri</Option>
                <Option value="Borivali">Borivali</Option>
                <Option value="Colaba">Colaba</Option>
                <Option value="Dadar">Dadar</Option>
                <Option value="Juhu">Juhu</Option>
                <Option value="Kurla">Kurla</Option>
                <Option value="Malad">Malad</Option>
                <Option value="Naigaon">Naigaon</Option>
                <Option value="Vile Parle">Vile Parle</Option>
              </Select>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="blue-gray" onClick={toggleDialog}>
            Cancel
          </Button>
          <Button variant="gradient" color="blue" onClick={handleConfirm}>
            Confirm Booking
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
