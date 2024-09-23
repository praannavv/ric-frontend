import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
  Option,
  Select,
  Textarea,
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import { MdEditSquare } from "react-icons/md";
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";

const EditServiceModal = ({ service, setServices }) => {
  const [name, setName] = useState(service.Name || "");
  const [description, setDescription] = useState(service.Description || "");
  const [price, setPrice] = useState(service.Price || "");
  const [category, setCategory] = useState(service.Category || "");
  const [duration, setDuration] = useState(service.Duration || "");
  const [imageURL, setImageURL] = useState(service.ImageURL || "");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (service) {
      setName(service.Name);
      setDescription(service.Description);
      setPrice(service.Price);
      setCategory(service.Category);
      setDuration(service.Duration);
      setImageURL(service.ImageURL);
    }
  }, [service]);

  const handleOpen = () => setOpen(!open);

  const handleEditService = async () => {
    const updatedService = {
      name,
      description,
      price: parseFloat(price),
      category,
      duration,
      imageURL,
    };
    console.log(updatedService)
    try {
      // Update service with PUT request
      await axios.put(
        `http://localhost:8000/service/${service._id}`,
        updatedService,
        {
          withCredentials: true,
        }
      );
      // Fetch updated service list
      const response = await axios.get("http://localhost:8000/service");
      setServices(response.data.services || response.data);
    } catch (error) {
      console.error("Error updating service:", error);
    }

    handleOpen();
  };

  return (
    <>
      <Button onClick={handleOpen} variant="outlined">
        <MdEditSquare />
      </Button>

      <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
        <DialogHeader className="relative m-0 block">
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleOpen}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="space-y-4 pb-6">
          {/* Name */}
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Name
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="Service Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="placeholder:opacity-100"
              containerProps={{ className: "!min-w-full" }}
              labelProps={{ className: "hidden" }}
            />
          </div>

          {/* ImageURL */}
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              ImageURL
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="Image URL"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              className="placeholder:opacity-100"
              containerProps={{ className: "!min-w-full" }}
              labelProps={{ className: "hidden" }}
            />
          </div>

          {/* Category */}
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Category
            </Typography>
            <Select
              className="!w-full"
              placeholder="Select a category"
              labelProps={{ className: "hidden" }}
              value={category}
              onChange={(value) => setCategory(value)}
            >
              <Option value="Installation">Installation</Option>
              <Option value="Maintenance">Maintenance</Option>
              <Option value="Repair">Repair</Option>
              <Option value="Inspection">Inspection</Option>
              <Option value="Other">Other</Option>
            </Select>
          </div>

          {/* Price */}
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Price
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="Service Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="placeholder:opacity-100"
              containerProps={{ className: "!min-w-full" }}
              labelProps={{ className: "hidden" }}
            />
          </div>

          {/* Duration */}
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Duration
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="Duration (e.g., 60 minutes)"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="placeholder:opacity-100"
              containerProps={{ className: "!min-w-full" }}
              labelProps={{ className: "hidden" }}
            />
          </div>

          {/* Description */}
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Description
            </Typography>
            <Textarea
              rows={4}
              placeholder="Service Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="!w-full"
              labelProps={{ className: "hidden" }}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button className="ml-auto" onClick={handleEditService}>
            Save Changes
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default EditServiceModal;
