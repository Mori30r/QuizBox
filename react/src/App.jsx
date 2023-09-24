import { useSelector } from "react-redux";
import { ThemeProvider, styled } from "styled-components";
import { router } from "./Router/AppRouter";
import { RouterProvider } from "react-router-dom";
import SubHeading from "./ui/SubHeading";
import {
    HOME_PAGE,
    QUIZ_PAGE,
    LOGIN_PAGE,
    SIGNUP_PAGE,
    COURSE_PAGE,
    PROFILE_EDIT_PAGE,
} from "./constants/pagesAddress";

const DevelopementRouting = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    column-gap: 3rem;
    justify-items: center;
    padding: 0.5rem;
    background-color: var(--color-purple-400);
    z-index: 2;
    opacity: 0.2;
    transition: 0.4s all;

    &:hover {
        opacity: 1;
    }

    & a {
        font-size: 1.5rem;
        color: var(--color-purple-0);
        text-decoration: none;
    }
`;

function App() {
    const { isSideBarOpen } = useSelector((store) => store.ui);
    return (
        <ThemeProvider
            theme={{
                isSideBarOpen,
            }}
        >
            <RouterProvider router={router} />
            <DevelopementRouting>
                <SubHeading type="white">FOR DEVELOPEMENT</SubHeading>
                <a href={HOME_PAGE}>صفحه اصلی</a>
                <a href={COURSE_PAGE}>صفحه جزئیات درس</a>
                <a href={PROFILE_EDIT_PAGE}>صفحه ویرایش پروفایل</a>
                <a href={QUIZ_PAGE}>صفحه کوئیز</a>
                <a href={SIGNUP_PAGE}>صفحه ثبت نام</a>
                <a href={LOGIN_PAGE}>صفحه ورود</a>
            </DevelopementRouting>
        </ThemeProvider>
    );
}

export default App;
