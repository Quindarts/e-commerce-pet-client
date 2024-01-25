import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../services/userService";

export const registerUser = createAsyncThunk("auth/register", async (userData, thunkApi) => {
    try {
        return await authService.register(userData)
    } catch(error) {
        return thunkApi.rejectWithValue(error)
    }
});

export const loginUser = createAsyncThunk("auth/login", async (userData, thunkApi) => {
    try {
        const user = authService.login(userData);
        return user;
    } catch(error) {
        return thunkApi.rejectWithValue(error)
    }
});

const initialState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    authen: false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        takeUser: (state, action) => {
            if (!state.user) {
                console.log("Not loading")
                alert("Not logged in yet")
            } else {
                alert(state.user.userName)
            }    
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true
        }).addCase(registerUser.fulfilled,(state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.createdUser = action.payload;
            if (state.isSuccess === true) {
                alert("User created successfully")
            }
        }).addCase(registerUser.rejected,(state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if (state.isError === true) {
                alert(action.error)
            }
        }).addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        }).addCase(loginUser.fulfilled,(state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.authen = true;
        }).addCase(loginUser.rejected,(state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if (state.isError === true) {
                alert(action.error)
            }
        })
    }
})

export default authSlice.reducer;