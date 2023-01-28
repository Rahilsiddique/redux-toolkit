import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: "Rahil Siddique" },
    { id: '1', name: "caleb libauski" },
    { id: '2', name: "kharachov kroffnic" },
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
})

export const selectAllUsers = state => state.users;

export default usersSlice.reducer