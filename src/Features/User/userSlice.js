import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "User",
    initialState: {
        value: {
            email: "",
            idToken: "",
            localId: "",
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload
        },
        logOut: (state) => {
            state.value = {
                email: "",
                idToken: "",
                localId: "",
                profileImage: "",
                
            }
        },
        
        
    }
})

export const {setUser, logOut} = userSlice.actions

export default userSlice.reducer