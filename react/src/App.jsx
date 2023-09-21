import { RouterProvider } from "react-router-dom";
import { router } from "./Router/AppRouter";
import { Provider } from "react-redux";
import store from "./store/store";
import { styled } from "styled-components";
import {
    COURSE_PAGE,
    HOME_PAGE,
    LOGIN_PAGE,
    PROFILE_EDIT_PAGE,
    SIGNUP_PAGE,
} from "./constants/pagesAddress";
import SubHeading from "./ui/SubHeading";

const DevelopementRouting = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: grid;
    row-gap: 1rem;
    justify-items: center;
    margin: 1rem;
    padding: 1rem;
    background-color: var(--color-purple-400);
    z-index: 2;

    & a {
        font-size: 1.5rem;
        color: var(--color-purple-0);
        text-decoration: none;
    }
`;

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />;
            <DevelopementRouting>
                <SubHeading type="white">FOR DEVELOPEMENT</SubHeading>
                <a href={HOME_PAGE}>صفحه اصلی</a>
                <a href={COURSE_PAGE}>صفحه جزئیات درس</a>
                <a href={PROFILE_EDIT_PAGE}>صفحه ویرایش پروفایل</a>
                <a href={SIGNUP_PAGE}>صفحه ثبت نام</a>
                <a href={LOGIN_PAGE}>صفحه ورود</a>
            </DevelopementRouting>
        </Provider>
    );
}

export default App;
