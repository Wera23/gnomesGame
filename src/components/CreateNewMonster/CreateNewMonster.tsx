import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  InputLabel
} from "@material-ui/core/";
import { StyledButton } from "../Forms/StyledButton";
import { StyledInput } from "../Forms/StyledInput";
import { addGnome } from "../../_store/actions";

interface IProps {
  name: string;
  age: number;
  id: number;
  strenght: number;
  gnomeSubmit: Function;
 // label: string;
}

export default function AlertDialog(props: IProps) {
  const [open, setOpen] = useState(false);
  const [newGnome, setNewGnome] = useState({
    id: "",
    name: "",
    age: "",
    strenght: ""
  });

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e: any) => {
    let { name, value } = e.target;

    if (name !== "name") {
      value = Number(value);
    }

    setNewGnome({ ...newGnome, [name]: value });
  };

  const addNewGnome = (e: any) => {
    e.preventDefault();
    dispatch(addGnome(newGnome));
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
            <form className="dialog__form" onSubmit={() => props.gnomeSubmit}>
              <FormControl>
                <InputLabel shrink htmlFor="id-input">
                  Id
                </InputLabel>

                <StyledInput
                  defaultValue={props.id}
                  name="id"
                  //margin="normal"
                 //label="Id"
                  onChange={handleInputChange}
                  fullWidth
                  color="secondary"
                  className="dialog__form-element"
                />
              </FormControl>
              <FormControl>
                <InputLabel shrink htmlFor="name-input">
                  Name
                </InputLabel>

                <StyledInput
                  defaultValue={props.name}
                  name="name"
                  onChange={handleInputChange}
                  fullWidth
                  color="secondary"
                  className="dialog__form-element"
                // label="Name"
                 //margin="normal"
                />
              </FormControl>

              <FormControl>
                <InputLabel shrink htmlFor="age-input">
                  Age
                </InputLabel>

                <StyledInput
                  defaultValue={props.age}
                  name="age"
                 // label="Age"
                  onChange={handleInputChange}
                  fullWidth
                  color="secondary"
                  className="dialog__form-element"
                  //margin="normal"
                />
              </FormControl>

              <FormControl>
                <InputLabel shrink htmlFor="strenght-input">
                  Strenght
                </InputLabel>

                <StyledInput
                  defaultValue={props.strenght}
                 // margin="normal"
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
             // type="onSubmit"
              onClick={handleClose}
            >
              Cancel
            </StyledButton>
            <StyledButton
              variant="contained"
              size="small"
              color="secondary"
            //  type="onSubmit"
              onClick={addNewGnome}
            >
              Save
            </StyledButton>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
