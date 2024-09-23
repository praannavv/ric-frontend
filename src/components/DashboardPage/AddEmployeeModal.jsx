import React, { useState } from "react";
import {
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Button,
  Input,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { RiAddCircleFill } from "react-icons/ri";
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";

const AddEmployeeModal = ({ setEmployees }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(""); // For error handling

  const handleOpen = () => setOpen(!open);

  const handleAddEmployee = async () => {
    const employee = {
      name,
      email,
      password,
    };

    try {
      await axios.post("http://localhost:8000/auth/signupEmployee", employee, {
        withCredentials: true,
      });

      // Fetch updated employee list
      const response = await axios.get("http://localhost:8000/auth/employees", {
        withCredentials: true,
      });
      setEmployees(response.data.employees || response.data);

      // Reset form fields
      setName("");
      setEmail("");
      setPassword("");
      handleOpen(); // Close dialog
    } catch (error) {
      console.error("Error adding employee:", error);
      setError("Failed to add employee. Please try again."); // Set error message
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
              placeholder="e.g. John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="placeholder:opacity-100 focus:border-gray-700 border-gray-500"
              containerProps={{
                className: "!min-w-full",
              }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Email
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="e.g. johndoe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="placeholder:opacity-100 focus:border-gray-700 border-gray-500"
              containerProps={{
                className: "!min-w-full",
              }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Password
            </Typography>
            <Input
              color="gray"
              size="lg"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="placeholder:opacity-100 focus:border-gray-700 border-gray-500"
              containerProps={{
                className: "!min-w-full",
              }}
            />
          </div>
          {error && (
            <Typography
              variant="small"
              color="red"
              className="mt-2 text-left"
            >
              {error}
            </Typography>
          )}
        </DialogBody>
        <DialogFooter>
          <Button className="ml-auto" onClick={handleAddEmployee}>
            Add Employee
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default AddEmployeeModal;
