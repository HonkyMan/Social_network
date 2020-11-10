import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer
});

let store = createStore(reducers);

export default store;
