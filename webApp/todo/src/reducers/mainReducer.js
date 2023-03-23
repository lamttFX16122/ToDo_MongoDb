import authenReducer from "./authenticationReducer";
import { combineReducers } from "redux";
import formReducer from "./formReducer";
import workReducer from './workReducer';
import controlReducer from "./controlReducer";
export var myReducer = combineReducers({
    authenReducer,
    formReducer,
    workReducer,
    controlReducer
})
