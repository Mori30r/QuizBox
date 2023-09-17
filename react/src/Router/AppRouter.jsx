import AppLayout from "../Layout/AppLayout";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import ProfileEdit from "../pages/ProfileEdit";
import { HOME_PAGE, PROFILE_EDIT } from "./../constants/pagesAddress";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        path: "",
        children: [
            {
                path: HOME_PAGE,
                element: <Home />,
            },
            {
                path: PROFILE_EDIT,
                element: <ProfileEdit />,
            },
        ],
    },
    {
        path: "login",
        element: <Login />,
    },
]);
