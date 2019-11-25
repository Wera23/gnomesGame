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
      <StyledButton
        color="secondary"
        variant="contained"
        onClick={handleClickOpen}
      >
        Create Monster
      </StyledButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div className="dialog">
          <div className="dialog__monster dialog__monster--add" />

          <DialogContent>
            <form onSubmit={props.gnomeSubmit}>
              <TextField
                margin="normal"
                label="Name"
                fullWidth
                color="secondary"
              />

              <TextField
                margin="normal"
                label="Age"
                fullWidth
                color="secondary"
              />

              <TextField
                margin="normal"
                label="Strenght"
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
