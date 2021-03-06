import { gnomesService } from "../../_services";
import { loadingData } from "./basic.actions";
import { GET_GNOMES, CHANGE_GNOME, DELETE_GNOME, ADD_GNOME } from "../constants";

export function handleGnomesData(limit, offset) {
  return dispatch => {
    dispatch(loadingData(true));
    gnomesService
      .getGnomes(limit, offset)
      .then(response => {
        dispatch(getGnomes(response.data));
        dispatch(loadingData(false));
      })
      .catch(error => {
        console.log(error);
        dispatch(loadingData(false));
      });
  };
}

export function getGnomes(gnomes) {
  return {
    payload: gnomes,
    type: GET_GNOMES
  };
}

export function changeGnome(gnome) {
  return {
    payload: gnome,
    type: CHANGE_GNOME
  };
}

export function addGnome(gnome) {
  return {
    payload: gnome,
    type: ADD_GNOME
  };
}

export function deleteGnome(gnome) {
  return {
    payload: gnome,
    type: DELETE_GNOME
  };
}
