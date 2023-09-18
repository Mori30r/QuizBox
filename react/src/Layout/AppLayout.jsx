import { Outlet } from "react-router-dom";
import { ThemeProvider, styled } from "styled-components";
import { useSelector } from "react-redux";

import Stats from "./Stats/Stats";
import SideBar from "./SideBar/SideBar";
import Row from "../ui/Row";

const StyledAppLayout = styled(Row)`
    align-items: center;
    padding: 1rem;
    height: 100dvh;
`;

function AppLayout() {
    const { isOpen } = useSelector((store) => store.sideBar);
    return (
        <ThemeProvider
            theme={{
                isOpen,
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
