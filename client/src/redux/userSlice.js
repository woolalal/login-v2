import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userDetails: {
        name: "",
        lname: "",
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
        },
        reset: (state) => {
            state.value.isLoggedIn = false
            state.value.userDetails = {
                name: "",
                lname: "",
                email: ""
            }
        }
    }
})

export const { setUser, reset } = userSlice.actions;

export default userSlice.reducer;