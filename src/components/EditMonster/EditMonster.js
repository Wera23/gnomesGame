import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  TextField
} from "@material-ui/core/";
import { StyledButton } from "../Forms/StyledButton";

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
      <StyledButton color="secondary" variant="outlined" small onClick={handleClickOpen}>
        Edit
      </StyledButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        
      >
        <div className='dialog'>
          <div className='dialog-background' />
         

          <DialogContent>
            <form onSubmit={props.gnomeSubmit}>
              <TextField
                defaultValue={props.name}
                margin="normal"
                label="Name"
                onChange={props.gnomeChange}
                fullWidth
                color="secondary"
              />

              <TextField
                defaultValue={props.age}
                margin="normal"
                label="Age"
                onChange={props.gnomeChange}
                fullWidth
                color="secondary"
              />

              <TextField
                defaultValue={props.strenght}
                margin="normal"
                label="Strenght"
                onChange={props.gnomeChange}
                color="secondary"
                fullWidth
              />
            </form>
          </DialogContent>
        <DialogActions>
          <StyledButton
            variant="outlined"
            size="small"
            color="secondary"
            type="onSubmit"
            onClick={handleClose}
          >
            Cancel
          </StyledButton>
          <StyledButton
            variant="outlined"
            size="small"
            color="secondary"
            type="onSubmit"
            onClick={props.gnomeChange}
          >
            Save
          </StyledButton>
        </DialogActions>
        </div>
      </Dialog>
      
    </div>
  );
}
