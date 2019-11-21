import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@material-ui/core/";

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        small
        onClick={handleClickOpen}
      >
        Create monster
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create new monster</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id={props.name}
            label="Name"
            type="text"
          />

          <TextField
            autoFocus
            margin="dense"
            id={props.age}
            label="Age"
            type="text"
          />

          <TextField
            autoFocus
            margin="dense"
            id={props.strenght}
            label="Strenght"
            type="text"
          />



        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
