import { combineReducers } from 'redux';
import { basic } from "./basic.reducers";
import { gnomes } from "./gnomes.reducers";
import { user } from "./user.reducers";

const rootReducer = combineReducers({
    basic,
    gnomes,
    user
});

export default rootReducer;
