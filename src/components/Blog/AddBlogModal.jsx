import React, { useState } from "react";
import axios from "axios";
import { RiAddCircleFill } from "react-icons/ri";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Input,
  Textarea,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";

const AddBlogModal = ({ setBlogs }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");

  const handleAddBlog = async () => {
    const blog = {
      title,
      content,
      image,
      type,
    };

    console.log(blog);
    try {
      await axios.post("http://localhost:8000/blogs", blog, {
        withCredentials: true,
      });
      setOpen(false);
      const response = await axios.get("http://localhost:8000/blogs");
      setBlogs(response.data.blogs || response.data);
    } catch (error) {
      console.error("Error adding blog:", error);
    } finally {
      setTitle("");
      setContent("");
      setImage("");
      setType("");
    }
  };

  return (
    <>
      {/* <Button onClick={() => setOpen(true)} color="green">
        Add Blog
      </Button> */}
      <RiAddCircleFill
        onClick={() => setOpen(true)}
        className="size-7 flex items-center cursor-pointer"
      />
      <Dialog open={open} handler={() => setOpen(false)}>
        <DialogHeader>Add Blog Post</DialogHeader>
        <DialogBody>
          <div className="mb-4">
            <Input
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Type
            </Typography>

            <Select
              className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
              placeholder="Select a Type"
              labelProps={{
                className: "hidden",
              }}
              value={type}
              onChange={(value) => setType(value)}
            >
              <Option value="CCTV">CCTV</Option>
              <Option value="MONITOR">MONITOR</Option>
              <Option value="WIRES">WIRES</Option>
              <Option value="WIRES">WIRES</Option>
              <Option value="WIRES">WIRES</Option>
            </Select>
          </div>
          <div className="mb-4 mt-4">
            <Textarea
              label="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setOpen(false)}
            className="mr-1"
          >
            Cancel
          </Button>
          <Button onClick={handleAddBlog}>Add Blog</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default AddBlogModal;
