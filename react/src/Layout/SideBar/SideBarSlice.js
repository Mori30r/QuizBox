import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
};

const SideBarSlice = createSlice({
    name: "sideBar",
    initialState,
    reducers: {
        toggleSideBar(state) {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { toggleSideBar } = SideBarSlice.actions;

export default SideBarSlice.reducer;
