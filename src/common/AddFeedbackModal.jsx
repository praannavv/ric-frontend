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

const AddFeedbackModal = ({ setFeedback }) => {
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const handleOpen = () => setOpen(!open);

  const handleAddFeedback = async () => {
    if (!content.trim()) {
      setError("Content is required");
      return;
    }

    try {
      // Post feedback to the backend
      await axios.post(
        "http://localhost:8000/feedback",
        { Content: content },
        { withCredentials: true } // Ensure the request includes credentials
      );

      setContent("");
      const response = await axios.get("http://localhost:8000/feedback", {
        withCredentials: true,
      });
      setFeedbackList(response.data.feedback || response.data);
      handleOpen();
    } catch (error) {
      console.error("Error adding feedback:", error);
      setError("Failed to submit feedback. Please try again.");
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
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 text-left font-medium"
          >
            Feedback
          </Typography>
          <Input
            color="gray"
            size="lg"
            placeholder="Enter your feedback here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="placeholder:opacity-100 focus:border-gray-700 border-gray-500"
            containerProps={{
              className: "!min-w-full",
            }}
          />
          {error && (
            <Typography variant="small" color="red" className="mt-2 text-left">
              {error}
            </Typography>
          )}
        </DialogBody>
        <DialogFooter>
          <Button className="ml-auto" onClick={handleAddFeedback}>
            Submit Feedback
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default AddFeedbackModal;
