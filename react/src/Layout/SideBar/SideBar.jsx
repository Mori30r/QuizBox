import { useState } from "react";
import styled from "styled-components";

import { list1, list2 } from "../../data/SideBarLinks";
import SideBarContext from "./SideBarContext";

import SideBarList from "./SideBarList";
import TopSideBar from "./TopSideBar";
import Row from "../../ui/Row";
import { breakPoint11 } from "../../constants/breakpoints";

const StyledSideBar = styled(Row)`
    z-index: 2;
    width: ${(props) => (props.$isOpen ? "25rem" : "10rem")};
    background-color: var(--color-purple-0);
    transition: all 0.5s;
    border-radius: 25px;

    @media screen and (${breakPoint11}) {
        width: ${(props) => (props.$isOpen ? "100%" : "10rem")};
        height: ${(props) => (props.$isOpen ? "100%" : "7rem")};
        position: absolute;
        right: 0;
        top: 0;
        overflow: hidden;
        background-color: ${(props) => !props.$isOpen && "inherit"};
    }
`;

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <SideBarContext.Provider value={isOpen}>
            <StyledSideBar $isOpen={isOpen} type="vertical">
                <TopSideBar onClick={() => setIsOpen((open) => !open)} />
                <Row type="vertical">
                    <SideBarList isOpen={isOpen} list={list1} />
                    <SideBarList isOpen={isOpen} list={list2} />
                </Row>
            </StyledSideBar>
        </SideBarContext.Provider>
    );
}

export default SideBar;
