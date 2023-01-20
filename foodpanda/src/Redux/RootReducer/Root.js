import { combineReducers } from "redux";
import UserReducer from "../Reducer/UserReducer";
import CartReducer from "../Reducer/CartReducer"
import UpdateCartReducer from "../Reducer/UpdateCart";
const rootReducer = combineReducers({

    UserReducer,
    CartReducer,
    UpdateCartReducer
})

export default rootReducer