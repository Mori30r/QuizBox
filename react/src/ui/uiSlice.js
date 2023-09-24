import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSideBarOpen: false,
    isModalOpen: false,
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleSideBar(state) {
            state.isSideBarOpen = !state.isSideBarOpen;
        },
        toggleModal(state) {
            state.isModalOpen = !state.isModalOpen;
        },
    },
});

export const { toggleSideBar, toggleModal } = uiSlice.actions;

export default uiSlice.reducer;
