import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { blogReducer } from "./blogReducers";
import { authReducer } from "./authReducers";
import adminReducer from "./blogAdmin";
import menuReducer from "./menu";

const rootReducer = combineReducers({
	blog: blogReducer,
	auth: authReducer,
	admin: adminReducer,
	menu: menuReducer,
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
