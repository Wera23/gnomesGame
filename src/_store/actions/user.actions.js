import { USER_DATA } from "../constants";

export function userData(user) {
    return {
        type: USER_DATA,
        payload: user
    }
}
