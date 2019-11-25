import { GET_GNOMES, CHANGE_GNOME} from "../constants";

const initialGnomesState = {
    gnomes: []
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
            const index = state.gnomes.findIndex(gnome => gnome.id === payload.id)
            return {
                ...state,
                gnomes: [
                    ...state.gnomes.slice(0, index), 
                    payload,
                    ...state.gnomes.slice(index + 1)]
            }
        default:
            return state;
    }
}
