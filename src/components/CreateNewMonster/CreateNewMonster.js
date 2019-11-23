import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField
} from "@material-ui/core/";
import stylesMonster from "../Styles/Monster.css";

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
      <Button color="secondary" variant="contained" onClick={handleClickOpen}>
       Create Monster
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className={stylesMonster.backgroundDialog}
        
      >
        <div className={stylesMonster.dialogContent}>
          <div className={stylesMonster.dialogImageCreate} />
         

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
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            type="onSubmit"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            type="onSubmit"
            onClick={props.gnomeChange}
          >
            Save
          </Button>
        </DialogActions>
        </div>
      </Dialog>
      
    </div>
  );
}
