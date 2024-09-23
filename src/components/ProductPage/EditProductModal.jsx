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

const EditProductModal = ({ product, setProducts }) => {
  const [name, setName] = useState(product.Name || ""); // Adjust the casing if needed
  const [description, setDescription] = useState(product.Description || "");
  const [price, setPrice] = useState(product.Price || "");
  const [category, setCategory] = useState(product.Category || "");
  const [stock, setStock] = useState(product.Stock || "");
  const [imageURL, setImageURL] = useState(product.ImageURL || "");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (product) {
      setName(product.Name); // Ensure the property name matches your data
      setDescription(product.Description);
      setPrice(product.Price);
      setCategory(product.Category);
      setStock(product.Stock);
      setImageURL(product.ImageURL);
    }
  }, [product]);

  const handleOpen = () => setOpen(!open);

  const handleEditProduct = async () => {
    const updatedProduct = {
      name,
      description,
      price: parseFloat(price),
      category,
      stock: parseInt(stock, 10),
      imageURL,
    };

    try {
      // Update product with PUT request
      await axios.put(
        `http://localhost:8000/product/${product._id}`,
        updatedProduct,
        {
          withCredentials: true,
        }
      );
      // Fetch updated product list
      const response = await axios.get("http://localhost:8000/product");
      setProducts(response.data.products || response.data);
    } catch (error) {
      console.error("Error updating product:", error);
    }

    handleOpen();
  };
  console.log(name);
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
              placeholder="name"
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
              <Option value="Clothing">Clothing</Option>
              <Option value="Fashion">Fashion</Option>
              <Option value="Watches">Watches</Option>
            </Select>
          </div>
          <div className="flex gap-4">
            {/* Price */}
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
                placeholder="Product Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="placeholder:opacity-100"
                containerProps={{ className: "!min-w-full" }}
                labelProps={{ className: "hidden" }}
              />
            </div>
            {/* Stock */}
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
                placeholder="Product Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="placeholder:opacity-100"
                containerProps={{ className: "!min-w-full" }}
                labelProps={{ className: "hidden" }}
              />
            </div>
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
              rows={7}
              placeholder="Product Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="!w-full"
              labelProps={{ className: "hidden" }}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button className="ml-auto" onClick={handleEditProduct}>
            Save Changes
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default EditProductModal;
