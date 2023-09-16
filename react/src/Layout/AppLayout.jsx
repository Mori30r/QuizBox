import { Outlet } from "react-router-dom";
import { ThemeProvider, styled } from "styled-components";

import Stats from "./Stats/Stats";
import SideBar from "./SideBar/SideBar";
import Row from "../ui/Row";
import { useState } from "react";

const StyledAppLayout = styled(Row)`
    align-items: center;
    padding: 1rem;
    height: 100dvh;
`;

function AppLayout() {
    // TODO: i should try to find better solution
    // for sharing "isOpen" and "toggleSideBar"
    // MAYBE Redux... 🤔💭
    const [isOpen, setIsOpen] = useState(false);

    function toggleSideBar() {
        setIsOpen((isOpen) => !isOpen);
    }

    return (
        <ThemeProvider
            theme={{
                isOpen,
                toggleSideBar,
            }}
        >
            <StyledAppLayout>
                <Stats />
                <Outlet />
                <SideBar />
            </StyledAppLayout>
        </ThemeProvider>
    );
}

export default AppLayout;
