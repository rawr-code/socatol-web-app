import { combineReducers } from "redux";

import AuthReducer from "./AuthReducer";

const Auth = combineReducers({ AuthReducer });

export default AuthReducer;
