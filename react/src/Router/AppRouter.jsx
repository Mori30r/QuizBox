import AppLayout from "../Layout/AppLayout";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import ProfileEdit from "../pages/ProfileEdit";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        path: "",
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "profile/edit",
                element: <ProfileEdit />,
            },
        ],
    },
]);
