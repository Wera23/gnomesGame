import { USER_DATA } from "../constants";

const initialUserState = {
    current: {
        name: "Wera Chodanionek",
        age: "26",
        level: "beginner",
        avatar: "https://i.ibb.co/1Lqv9Ch/avatar.jpg"        
    }
}

export function user(state = initialUserState, action) {
    const { payload, type } = action;

    switch (type) {
        case USER_DATA:
            return {
                ...state,
                current: payload
            };
        default:
            return state;
    }
}
