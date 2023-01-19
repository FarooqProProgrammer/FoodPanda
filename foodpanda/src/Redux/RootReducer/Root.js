import { combineReducers } from "redux";
import UserReducer from "../Reducer/UserReducer";
import CartReducer from "../Reducer/CartReducer";

const rootReducer = combineReducers({

    UserReducer,
    CartReducer
})

export default rootReducer