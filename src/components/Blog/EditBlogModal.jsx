import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Input,
  Typography,
  Textarea,
  Option,
  Select,
} from "@material-tailwind/react";
import { MdEditSquare } from "react-icons/md";
const EditBlogModal = ({ blog, setBlogs }) => {
  console.log(blog);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);
  const [image, setImage] = useState(blog.image);
  const [type, setType] = useState(blog.type);

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setImage(blog.image);
      setType(blog.type);
    }
  }, [blog]);
  const handleEditBlog = async () => {
    const updatedBlog = {
      title,
      content,
      image,
      type,
    };

    try {
      await axios.put(
        `http://localhost:8000/blogs/${blog.BlogId}`,
        updatedBlog,
        {
          withCredentials: true,
        }
      );
      setOpen(false);
      const response = await axios.get("http://localhost:8000/blogs");
      setBlogs(response.data.blogs || response.data);
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outlined" color="blue">
        <MdEditSquare />
      </Button>
      <Dialog open={open} handler={() => setOpen(false)}>
        <DialogHeader>Edit Blog Post</DialogHeader>
        <DialogBody>
          <div className="mb-4">
            <Input
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
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
          <Button onClick={handleEditBlog}>Save Changes</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default EditBlogModal;
