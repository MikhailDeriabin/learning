import {createSlice} from "@reduxjs/toolkit";

export type AuthState = { isAuthenticated: boolean };
const authStateInit: AuthState = { isAuthenticated: false };

const authSlice = createSlice({
    name: 'auth',
    initialState: authStateInit,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;