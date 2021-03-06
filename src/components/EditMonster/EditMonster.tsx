import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  InputLabel,
  FormControl
} from "@material-ui/core/";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeGnome } from "../../_store/actions";
import { StyledButton } from "../Forms/StyledButton";
import { StyledInput } from "../Forms/StyledInput";

interface IProps {
  id: number;
  strenght: number;
  age: number;
  name: string;
  replaceGnome: Function;
  handleInputChange: Function;

}

export default function AlertDialog(props: IProps, gnomeSubmit: Function) {
  const [open, setOpen] = useState(false);
  const [editedGnome, setEditedGnome] = useState({
    id: props.id,
    name: props.name,
    age: props.age,
    strenght: props.strenght
  });

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const replaceGnome = (e: any) => {
    e.preventDefault();
    dispatch(changeGnome(editedGnome));
    setOpen(false);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setEditedGnome({ ...editedGnome, [name]: value });
  };

  return (
    <div>
      <StyledButton
        color="secondary"
        variant="outlined"
        //small
        onClick={handleClickOpen}
      >
        Edit
      </StyledButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div className="dialog">
          <div className="dialog__monster dialog__monster--edit" />

          <DialogContent>
            <form className="dialog__form" onSubmit={() => gnomeSubmit}>
              <FormControl>
                <InputLabel shrink htmlFor="name-input">
                  Name
                </InputLabel>
                <StyledInput
                  id="name-input"
                  defaultValue={props.name}
                  name="name"
                  //margin="normal"
                  //label="Name"
                  onChange={handleInputChange}
                  fullWidth
                  color="secondary"
                  className="dialog__form-element"
                />
              </FormControl>

              <FormControl>
                <InputLabel shrink htmlFor="age-input">
                  Age
                </InputLabel>
                <StyledInput
                  id="age-input"
                  defaultValue={props.age}
                  //margin="normal"
                  name="age"
                 // label="Age"
                  onChange={handleInputChange}
                  fullWidth
                  color="secondary"
                  className="dialog__form-element"
                />
              </FormControl>

              <FormControl>
                <InputLabel shrink htmlFor="strenght-input">
                  Strenght
                </InputLabel>
                <StyledInput
                  id="strenght-input"
                  defaultValue={props.strenght}
                  //margin="normal"
                  name="strenght"
                 // label="Strenght"
                  onChange={handleInputChange}
                  color="secondary"
                  fullWidth
                  className="dialog__form-element"
                />
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <StyledButton
              variant="outlined"
              size="small"
              color="secondary"
              //type="onSubmit"
              onClick={handleClose}
            >
              Cancel
            </StyledButton>
            <StyledButton
              variant="contained"
              size="small"
              color="secondary"
             // type="onSubmit"
              onClick={replaceGnome}
            >
              Save
            </StyledButton>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
