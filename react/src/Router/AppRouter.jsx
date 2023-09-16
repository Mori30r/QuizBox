import AppLayout from "../Layout/AppLayout";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import ProfileEdit from "../pages/ProfileEdit";
import { HOME_PAGE, PROFILE_EDIT } from "./../constants/pagesAddress";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        path: HOME_PAGE,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: PROFILE_EDIT,
                element: <ProfileEdit />,
            },
        ],
    },
]);
