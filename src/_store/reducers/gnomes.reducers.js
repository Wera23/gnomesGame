import { GET_GNOMES, CHANGE_GNOME } from "../constants";

const initialGnomesState = {
    gnomes: []
}

const replaceGnome = (newGnome, oldGnome, gnomes) => {
    const index = gnomes.indexOf(oldGnome[0]);
    console.log(oldGnome);
    console.log(newGnome);
    console.log(gnomes);
    console.log(index);
    console.log(gnomes[index] = [newGnome])

    if (~index) {
        return gnomes[index] = newGnome;
    } else {
        return gnomes;
    }
}

export function gnomes(state = initialGnomesState, action) {
    const { payload, type } = action;

    switch (type) {
        case GET_GNOMES:
            return {
                ...state,
                gnomes: payload
            };
        case CHANGE_GNOME:
            return {
                ...state,
                gnomes: replaceGnome(payload, state.gnomes.filter(gnome => gnome.id === payload.id), state.gnomes)
            }
        default:
            return state;
    }
}
