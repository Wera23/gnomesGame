import { LOADING_DATA } from "../constants";

const initialBasicState = {
    loadingData: false
}

export function basic(state = initialBasicState, action) {
    const { payload, type } = action;

    switch (type) {
        case LOADING_DATA:
            return {
                ...state,
                loadingData: payload
            };
        default:
            return state;
    }
}
