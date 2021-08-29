import { combineReducers } from "redux";
import { userReduce } from "./userReduce";


export const rootReducer=combineReducers({
    userReduce,
});

