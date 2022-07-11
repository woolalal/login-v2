import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userDetails: {
        name: "",
        email: ""
    },
    isLoggedIn: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state = initialState, action) => {
            state.value = action.payload;
        }
    }
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;