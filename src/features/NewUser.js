import {createSlice} from "@reduxjs/toolkit";

export const NewUser = createSlice({
	name: "user",
	initialState: {
		user: null
	},
	reducers:{
		registration: (state,action) => {
			state.user = action.payload;
		},
		profile: (state) => {
			state.user = null;
		},
	},
})

export const {registration, progile} = NewUser.actions;

export const selectUser = (state) => state.user.user;

export default NewUser.reducer;