import Stats from "./Stats/Stats";
import Main from "./Main";
import SideBar from "./SideBar/SideBar";
import Row from "../ui/Row";
import { styled } from "styled-components";

const StyledAppLayout = styled(Row)`
    align-items: center;
    padding: 1rem;
    height: 100dvh;
`;

function AppLayout() {
    return (
        <StyledAppLayout>
            <Stats />
            <Main />
            <SideBar />
        </StyledAppLayout>
    );
}

export default AppLayout;
