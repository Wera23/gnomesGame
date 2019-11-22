import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
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
      <Button color="secondary" small onClick={handleClickOpen}>
        Edit
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      
      >

        
        <DialogTitle id="form-dialog-title">Edit monster</DialogTitle>
        <DialogContent>
     
          <form onSubmit={props.gnomeSubmit}>
            <input
              defaultValue={props.strenght}                            
              margin="normal"
              label="Strenght"
              onChange={props.gnomeChange}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.gnomeChange} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
