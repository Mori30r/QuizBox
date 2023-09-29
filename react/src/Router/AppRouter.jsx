import { createBrowserRouter } from "react-router-dom";

import Quiz from "../pages/quiz/Quiz";
import Home from "../pages/home/Home";
import Auth from "../pages/auth/Auth";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import AppLayout from "../Layout/AppLayout";
import Course from "../pages/course/Course";
import ProfileEdit from "../pages/profileEdit/ProfileEdit";

import {
    COURSE_PAGE,
    HOME_PAGE,
    LOGIN_PAGE,
    PROFILE_EDIT_PAGE,
    QUIZ_PAGE,
    SIGNUP_PAGE,
} from "./../constants/pagesAddress";

// TODO: Add Courses, MakeQuiz, Grading, SendNotifications, Profile and ProjectDetail Page

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
    {
        element: <Quiz />,
        path: QUIZ_PAGE,
    },
]);
