import AppLayout from "../Layout/AppLayout";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import ProfileEdit from "../pages/ProfileEdit";
import {
    COURSE_PAGE,
    HOME_PAGE,
    LOGIN_PAGE,
    PROFILE_EDIT_PAGE,
    SIGNUP_PAGE,
} from "./../constants/pagesAddress";
import Auth from "../Layout/Auth";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Course from "../pages/Course";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        path: "",
        children: [
            {
                index: true,
                path: HOME_PAGE,
                element: <Home />,
            },
            {
                path: COURSE_PAGE,
                element: <Course />,
            },
            {
                path: PROFILE_EDIT_PAGE,
                element: <ProfileEdit />,
            },
        ],
    },
    {
        element: <Auth />,
        path: "auth",
        index: LOGIN_PAGE,
        children: [
            {
                index: true,
                path: LOGIN_PAGE,
                element: <Login />,
            },
            {
                path: SIGNUP_PAGE,
                element: <Signup />,
            },
        ],
    },
]);
