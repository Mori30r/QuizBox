import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "../Layout/SideBar/SideBarSlice";

const store = configureStore({
    reducer: {
        sideBar: SideBarSlice,
    },
});

export default store;
