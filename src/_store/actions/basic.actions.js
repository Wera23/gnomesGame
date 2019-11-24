import { LOADING_DATA } from "../constants";

export function loadingData(loading) {
    return {
        payload: loading,
        type: LOADING_DATA
    }
}