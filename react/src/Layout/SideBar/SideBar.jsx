import { useState } from "react";
import styled, { css } from "styled-components";

import { list1, list2 } from "../../data/SideBarLinks";
import SideBarContext from "./SideBarContext";

import SideBarList from "./SideBarList";
import TopSideBar from "./TopSideBar";
import Row from "../../ui/Row";

const StyledSideBar = styled(Row)`
    width: ${(props) => (props.$isOpen ? "30rem" : "10rem")};
    background-color: var(--color-purple-0);
`;

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <SideBarContext.Provider value={isOpen}>
            <div>
                <StyledSideBar $isOpen={isOpen} type="vertical">
                    <TopSideBar onClick={() => setIsOpen((open) => !open)} />
                    <Row type="vertical">
                        <SideBarList isOpen={isOpen} list={list1} />
                        <SideBarList isOpen={isOpen} list={list2} />
                    </Row>
                </StyledSideBar>
            </div>
        </SideBarContext.Provider>
    );
}

export default SideBar;
