import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHref } from "react-router-dom";

import { toggleSideBar } from "../Layout/SideBar/SideBarSlice";

function RouteNavLink({ children, to }) {
    const { isOpen } = useSelector((store) => store.sideBar);
    const dispatch = useDispatch();

    const currentAddress = useHref();

    function handleClick() {
        const isCurrentAddress =
            currentAddress.split("/").join("") === to.split("/").join("");

        if (isCurrentAddress || !isOpen) return;
        dispatch(toggleSideBar());
    }

    return (
        <div onClick={handleClick}>
            <NavLink to={to}>{children}</NavLink>
        </div>
    );
}

export default RouteNavLink;
