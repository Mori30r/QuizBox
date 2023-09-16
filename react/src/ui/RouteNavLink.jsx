import { NavLink, useHref } from "react-router-dom";
import { useTheme } from "styled-components";

function RouteNavLink({ children, to }) {
    const { isOpen, toggleSideBar } = useTheme();
    const currentAddress = useHref();

    function handleClick() {
        const isCurrentAddress =
            currentAddress.split("/").join("") === to.split("/").join("");

        if (isCurrentAddress || !isOpen) return;
        toggleSideBar();
    }

    return (
        <div onClick={handleClick}>
            <NavLink to={to}>{children}</NavLink>
        </div>
    );
}

export default RouteNavLink;
