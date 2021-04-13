import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/NewUser";

export default configureStore({
	reducer: {
		user: userReducer,
	}
})