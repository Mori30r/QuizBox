import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "../Layout/SideBar/SideBarSlice";

const globalStore = configureStore({
    reducer: {
        sideBar: SideBarSlice,
    },
});

export default globalStore;
