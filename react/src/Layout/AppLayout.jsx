import Stats from "./Stats/Stats";
import SideBar from "./SideBar/SideBar";
import Row from "../ui/Row";
import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

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
