import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { list1, list2 } from "../../data/SideBarLinks";

import SideBarList from "./SideBarList";
import TopSideBar from "./TopSideBar";
import Row from "../../ui/Row";
import { breakPoint12 } from "../../constants/breakpoints";

const StyledSideBar = styled(Row)`
    z-index: 2;
    width: ${(props) => (props.theme.isOpen ? "25rem" : "10rem")};
    background-color: var(--color-purple-0);
    transition: all 0.5s;
    border-radius: 25px;

    @media screen and (${breakPoint12}) {
        width: ${(props) => (props.theme.isOpen ? "100%" : "10rem")};
        height: ${(props) => (props.theme.isOpen ? "100%" : "7rem")};
        position: absolute;
        right: 0;
        top: 0;
        overflow: hidden;
        background-color: ${(props) => !props.theme.isOpen && "inherit"};
    }
`;

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <ThemeProvider theme={{ isOpen }}>
            <StyledSideBar type="vertical">
                <TopSideBar onClick={() => setIsOpen((open) => !open)} />
                <Row type="vertical">
                    <SideBarList list={list1} />
                    <SideBarList list={list2} />
                </Row>
            </StyledSideBar>
        </ThemeProvider>
    );
}

export default SideBar;
