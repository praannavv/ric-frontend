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

const AddProductModal = ({ setProducts }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [imageURL, setImageURL] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  // TODO: ADD PRODUCT
  const handleAddProduct = () => {
    handleProduct(); // Call your add product logic
    handleOpen(); // Call your open dialog logic
  };
  const handleProduct = async () => {
    const product = {
      name: name,
      description: description,
      price: parseFloat(price),
      category: category,
      stock: parseInt(stock, 10),
      imageURL: imageURL,
    };
    setName("");
    setDescription("");
    setPrice("");
    setStock("");
    setCategory("");
    setImageURL("");
    console.log(product);

    try {
      await axios.post("http://localhost:8000/product", product, {
        withCredentials: true,
      });
      
      const response = await axios.get("http://localhost:8000/product");
      setProducts(response.data.products || response.data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <>
     <RiAddCircleFill onClick={handleOpen} className="size-7 flex items-center cursor-pointer"/>
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
              placeholder="eg. Mechanical Keyboard"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" placeholder:opacity-100 focus:border-gray-700 dark:border-green-300 border-gray-500 focus:!border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
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
              placeholder="unsplash"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              className="placeholder:opacity-100 focus:border-gray-700 dark:border-green-300 border-gray-500 focus:!border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
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
              labelProps={{
                className: "hidden",
              }}
              value={category}
              onChange={(value) => setCategory(value)}
            >
              <Option value="CCTV">CCTV</Option>
              <Option value="MONITOR">MONITOR</Option>
              <Option value="WIRES">WIRES</Option>
              <Option value="WIRES">WIRES</Option>
              <Option value="WIRES">WIRES</Option>
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
                placeholder="eg. 2300"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="placeholder:opacity-100 focus:border-gray-700 dark:border-green-300 border-gray-500 focus:!border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Stock
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="eg. 8"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="placeholder:opacity-100 focus:border-gray-700 dark:border-green-300 border-gray-500 focus:!border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
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
              placeholder="eg. This is a white shoes with a comfortable sole."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button className="ml-auto" onClick={handleAddProduct}>
            Add Product
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default AddProductModal;
