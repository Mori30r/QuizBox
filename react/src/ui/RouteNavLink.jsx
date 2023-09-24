import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHref } from "react-router-dom";

import { toggleSideBar } from "./uiSlice";

function RouteNavLink({ children, to }) {
    const { isSideBarOpen } = useSelector((store) => store.ui);
    const dispatch = useDispatch();

    const currentAddress = useHref();

    function handleClick() {
        const isCurrentAddress =
            currentAddress.split("/").join("") === to.split("/").join("");

        if (isCurrentAddress || !isSideBarOpen) return;
        dispatch(toggleSideBar());
    }

    return (
        <div onClick={handleClick}>
            <NavLink to={to}>{children}</NavLink>
        </div>
    );
}

export default RouteNavLink;
