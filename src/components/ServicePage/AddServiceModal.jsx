import React, { useState } from "react";
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
import { RiAddCircleFill } from "react-icons/ri";
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";

const AddServiceModal = ({ setServices }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [imageURL, setImageURL] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  const handleAddService = () => {
    handleService(); // Call your add service logic
    handleOpen(); // Close the dialog after adding
  };

  const handleService = async () => {
    const service = {
      name: name,
      description: description,
      price: parseFloat(price),
      category: category,
      duration: duration,
      imageURL: imageURL,
    };
    setName("");
    setDescription("");
    setPrice("");
    setCategory("");
    setDuration("");
    setImageURL("");
    console.log(service);

    try {
      await axios.post("http://localhost:8000/service", service, {
        withCredentials: true,
      });

      const response = await axios.get("http://localhost:8000/service");
      setServices(response.data.services || response.data);
    } catch (error) {
      console.error("Error adding service:", error);
    }
  };

  return (
    <>
      <RiAddCircleFill
        onClick={handleOpen}
        className="size-7 flex items-center cursor-pointer"
      />
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
              placeholder="e.g. Website Development"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="placeholder:opacity-100 focus:border-gray-700 dark:border-green-300 border-gray-500 focus:!border-t-gray-900"
              containerProps={{ className: "!min-w-full" }}
              labelProps={{ className: "hidden" }}
            />
          </div>
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
              placeholder="e.g. image-url.com"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              className="placeholder:opacity-100 focus:border-gray-700 dark:border-green-300 border-gray-500 focus:!border-t-gray-900"
              containerProps={{ className: "!min-w-full" }}
              labelProps={{ className: "hidden" }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Category
            </Typography>
            <Select
              className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
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
          <div className="flex gap-4">
            <div className="w-full">
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
                placeholder="e.g. 5000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="placeholder:opacity-100 focus:border-gray-700 dark:border-green-300 border-gray-500 focus:!border-t-gray-900"
                containerProps={{ className: "!min-w-full" }}
                labelProps={{ className: "hidden" }}
              />
            </div>
            <div className="w-full">
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
                placeholder="e.g. 3 weeks"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="placeholder:opacity-100 focus:border-gray-700 dark:border-green-300 border-gray-500 focus:!border-t-gray-900"
                containerProps={{ className: "!min-w-full" }}
                labelProps={{ className: "hidden" }}
              />
            </div>
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Description
            </Typography>
            <Textarea
              rows={7}
              placeholder="e.g. This is a comprehensive service for building a fully functional website."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
              labelProps={{ className: "hidden" }}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button className="ml-auto" onClick={handleAddService}>
            Add Service
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default AddServiceModal;
