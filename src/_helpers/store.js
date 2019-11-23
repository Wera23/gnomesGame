import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_store/reducers';

let middleware = [thunk];

middleware = [...middleware, createLogger()];

export const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
)
