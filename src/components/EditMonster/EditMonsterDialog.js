/*import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleGnomesData, changeGnome } from "../../_store/actions";


const AddItemPopup = ({
  open,
  closePopup,
  saveItem,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  DialogTitle,
  Button
}) => {
  const dispatch = useDispatch();
  const gnomes = useSelector(state => state.gnomes.gnomes);

  const replaceGnome = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setGnomes({ ...gnomes, [name]: value });
    dispatch(changeGnome(gnomes));
  };

  /*const handleInputChange = e => {
    const { name, value } = e.target;
    setGnomes({ ...gnomes, [name]: value });
  };

  const addItem = () => {
    const { name, age, strenght } = gnomes;

    if (!name || !age || !strenght) return;

    saveItem(gnomes);
  };

  const [gnome, setGnomes] = useState({ name: "", age: 0, strenght: 0 });
  return (
    <Dialog open={open} onClose={closePopup}>
      <DialogTitle>Add new item</DialogTitle>
      <DialogContent>
        <TextField
          name="name"
          label="Item name/Description"
          onChange={replaceGnome}
          value={gnomes.name}
        />
        <TextField
          name="age"
          label="Quantity"
          onChange={replaceGnome}
          value={gnomes.age}
        />
        <TextField
          name="strenght"
          label="Unit Cost"
          onChange={replaceGnome}
          value={gnomes.strenght}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closePopup} color="secondary" variant="contained">
          Cancel
        </Button>
        <Button onClick={addItem} color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddItemPopup;
*/