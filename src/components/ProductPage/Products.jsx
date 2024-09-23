import React, { useEffect, useState } from "react";
import axios from "axios";
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
// import { XMarkIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";

import LoadingSpinner from "../../common/LoadingSpinner";
import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import ProductConfirmationDialog from "./ProductConfirmationModal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { data: authUser } = useQuery({ queryKey: ["authUser"] });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/product");
        console.log(response)
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else if (response.data.products) {
          setProducts(response.data.products);
        } else {
          throw new Error("Unexpected response format");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setError(error.message || "Unknown error occurred");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingSpinner color={"green"} />;
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {authUser?.role === "Admin" ? (
        <div className="flex mb-12 gap-3 items-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-green-300">
            Products
          </h2>
          <AddProductModal setProducts={setProducts} />
        </div>
      ) : (
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-green-300">
            Latest Products
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Check out our latest product offerings.
          </p>
        </div>
      )}

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {products.length > 0 ? (
          products.map((product) => (
            <Card key={product.ProductID} className="w-full max-w-sm mx-auto">
              <CardHeader
                shadow={false}
                floated={false}
                className="h-48 sm:h-60"
              >
                <img
                  src={product.ImageURL}
                  alt={product.Name}
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <div className="mb-2 flex items-center justify-between">
                  <Typography color="blue-gray" className="font-medium">
                    {product.Name}
                  </Typography>
                  <Typography color="blue-gray" className="font-medium">
                    <span>&#8377;</span>
                    {product.Price.toFixed(2)}
                  </Typography>
                </div>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal opacity-75"
                >
                  {product.Description}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <div className="flex flex-col justify-end sm:flex-row gap-2">
                  {authUser?.role === "Admin" ? (
                    <>
                      <EditProductModal
                        product={product}
                        setProducts={setProducts}
                      />
                      <DeleteConfirmationModal
                        setProducts={setProducts}
                        product={product}
                      />
                    </>
                  ) : (
                    <ProductConfirmationDialog product={product}/>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="dark:text-fontColor-dark flex items-center justify-center h-[90%]">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

// const handleBuyNow = (product) => {
//   if (authUser) {
//     setSelectedProduct(product);
//     setShowConfirm(true);
//   } else {
//     window.location.href = "/login";
//   }
// };

// const handleConfirmPurchase = (deliveryAddress) => {
//   console.log("Purchase confirmed for product:", selectedProduct);
//   console.log("Delivery address:", deliveryAddress);
//   setShowConfirm(false);
// };

// const [open, setOpen] = React.useState(false);
// const handleOpen = () => setOpen(!open);
// // TODO: ADD PRODUCT
// const handleAddProduct = () => {
//   handleProduct(); // Call your add product logic
//   handleOpen(); // Call your open dialog logic
// };
// const handleProduct = async () => {
//   const product = {
//     name: name,
//     description: description,
//     price: parseFloat(price),
//     category: category,
//     stock: parseInt(stock, 10),
//     imageURL: imageURL,
//   };
//   console.log(product);

//   try {
//     await axios.post("http://localhost:8000/product/addProduct", product, {
//       withCredentials: true,
//     });
//     setShowAddProduct(false);
//     const response = await axios.get("http://localhost:8000/product");
//     setProducts(response.data.products || response.data);
//   } catch (error) {
//     console.error("Error adding product:", error);
//   }
// };

// const [deleteOpen, setDeleteOpen] = React.useState(false);
// const handleDeleteOpen = () => setDeleteOpen(!deleteOpen);
// //TODO: DELETE PRODUCT
// const handleDelete = async (product) => {
//   try {
//     await axios.delete(`http://localhost:8000/product/${product._id}`, {
//       withCredentials: true,
//     });
//     setShowAddProduct(false);
//     const response = await axios.get("http://localhost:8000/product");
//     setProducts(response.data.products || response.data);
//   } catch (error) {
//     console.error("Error adding product:", error);
//   }
// };

// const handleEdit = (product) => {
//   setSelectedProduct(product);
//   setShowEditProduct(true);
// };

// const handleSaveEdit = async (product) => {
//   try {
//     await axios.put(
//       `http://localhost:8000/product/${product.ProductID}`,
//       product
//     );
//     setShowEditProduct(false);
//     const response = await axios.get("http://localhost:8000/product");
//     setProducts(response.data.products || response.data);
//   } catch (error) {
//     console.error("Error updating product:", error);
//   }
// };

// const handleConfirmDelete = async (product) => {
//   try {
//     console.log("handle confirm delete ");
//     console.log;
//     await axios.delete(`http://localhost:8000/product/${product._id}`);

//     const response = await axios.get("http://localhost:8000/product");
//     setProducts(response.data.products || response.data);
//     handleDeleteOpen();
//   } catch (error) {
//     console.error("Error deleting product:", error);
//   }
// };

{
  /* Add Product modal */
}
{
  /* {showAddProduct && (
        <AddProductModal
          onConfirm={handleAddProduct}
          onCancel={() => setShowAddProduct(false)}
        />
      )} */
}

{
  /* Edit Product modal */
}
{
  /* {showEditProduct && selectedProduct && (
        <EditProductModal
          product={selectedProduct}
          onConfirm={handleSaveEdit}
          onCancel={() => setShowEditProduct(false)}
        />
      )} */
}

{
  /* Purchase confirmation modal */
}
{
  /* {showConfirm && selectedProduct && (
        <ConfirmationModal
          product={selectedProduct}
          onConfirm={handleConfirmPurchase}
          onCancel={() => setShowConfirm(false)}
        />
      )} */
}
