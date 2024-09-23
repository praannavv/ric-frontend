import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { MdDelete } from "react-icons/md";

export default function DeleteServiceModal({ setServices, service }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    try {
      console.log("About to delete service with ID:", service._id);
      await axios.delete(`http://localhost:8000/service/${service._id}`, {
        withCredentials: true,
      });

      // Fetch updated service list after deletion
      const response = await axios.get("http://localhost:8000/service");
      setServices(response.data.services || response.data);
      setOpen(false);
      
    } catch (error) {
      console.error("Error deleting service:", error);
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
            Are you sure you want to delete the service "{service.Name}"? This
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
