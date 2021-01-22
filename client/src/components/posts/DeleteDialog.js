import React, { useState } from 'react';
import { Dialog, DialogActions, DialogTitle, Button } from "@material-ui/core";



function DeleteDialog(props) {

  const [open, setOpen] = useState(false);
//   let [temp, setTemp] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
    // setTemp(id)
  };

  const handleConfirm = () => {
    props.handleDelete(props.id);
    setOpen(false);

  }

  const handleClose = () => {
    setOpen(false);
  };
//   console.log(props)

    return (
        <div>
            <Button variant="contained" color='secondary'
                    // size="sm"
                    onClick={handleClickOpen}>
                    Delete
            </Button>
            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete?"}</DialogTitle>
    
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>
            Confirm Delete
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}

export default DeleteDialog
