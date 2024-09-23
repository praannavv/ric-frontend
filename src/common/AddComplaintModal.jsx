import React, { useState } from "react";
import {
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Button,
  Input,
  Select,
  Option,
  Textarea,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { RiAddCircleFill } from "react-icons/ri";
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";

const AddComplaintModal = ({ setComplaints }) => {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => setOpen(!open);

  // Handle adding complaint
  const handleAddComplaint = async () => {
    const complaint = {
      type,
      description,
    };

    // Clear the form
    setType("");
    setDescription("");

    try {
      // Post complaint data to backend
      await axios.post("http://localhost:8000/complaint", complaint, {
        withCredentials: true,
      });

      // Fetch the updated complaint list
      const response = await axios.get("http://localhost:8000/complaint");
      setComplaints(response.data.complaints || response.data);

      // Close the modal
      handleOpen();
    } catch (error) {
      console.error("Error adding complaint:", error);
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
          {/* Complaint Type */}
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Type
            </Typography>
            <Select
              className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-primary focus:!border-t-blue-gray-900"
              placeholder="Select complaint type"
              labelProps={{
                className: "hidden",
              }}
              value={type}
              onChange={(value) => setType(value)}
            >
              <Option value="Product Issue">Product Issue</Option>
              <Option value="Service Issue">Service Issue</Option>
              <Option value="Delivery Delay">Delivery Delay</Option>
            </Select>
          </div>

          {/* Complaint Description */}
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Description
            </Typography>
            <Textarea
              rows={5}
              placeholder="Describe the issue..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-primary focus:!border-t-blue-gray-900"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button className="ml-auto" onClick={handleAddComplaint}>
            Add Complaint
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default AddComplaintModal;
