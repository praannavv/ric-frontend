import React, { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
const DeleteConfirmationModal = ({ blog, setBlogs }) => {
  const [open, setOpen] = useState(false);

  const handleDeleteBlog = async () => {
    try {
      await axios.delete(`http://localhost:8000/blogs/${blog.BlogId}`, {
        withCredentials: true,
      });
      setOpen(false);
      const response = await axios.get("http://localhost:8000/blogs");
      setBlogs(response.data.blogs || response.data);
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outlined" color="red" >
      <MdDelete />
      </Button>
      <Dialog open={open} handler={() => setOpen(false)}>
        <DialogHeader>Confirm Deletion</DialogHeader>
        <DialogBody>
          Are you sure you want to delete this blog post?
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="gray"
            onClick={() => setOpen(false)}
            className="mr-1"
          >
            Cancel
          </Button>
          <Button onClick={handleDeleteBlog} color="red">
            Delete
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default DeleteConfirmationModal;
