import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

import Stats from "./Stats/Stats";
import SideBar from "./SideBar/SideBar";
import Row from "../ui/Row";

const StyledAppLayout = styled(Row)`
    align-items: center;
    padding: 1rem;
    height: 100dvh;
`;

function AppLayout() {
    return (
        <StyledAppLayout>
            <Stats />
            <Outlet />
            <SideBar />
        </StyledAppLayout>
    );
}

export default AppLayout;
