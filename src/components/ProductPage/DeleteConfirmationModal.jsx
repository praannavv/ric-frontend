import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { MdDelete } from "react-icons/md";

export default function DeleteConfirmationModal({ setProducts, product }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    
    try {
      console.log("About to delete product with ID:", product._id);
      await axios.delete(`http://localhost:8000/product/${product._id}`, {
        withCredentials: true,
      });

      // Fetch updated product list after deletion
      const response = await axios.get("http://localhost:8000/product");
      setProducts(response.data.products || response.data);
      setOpen(false);
      
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <>
      <Button variant="outlined" color="error" onClick={handleClickOpen}>
        <MdDelete />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            Are you sure you want to delete the product "{product.Name}"? This
            action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
