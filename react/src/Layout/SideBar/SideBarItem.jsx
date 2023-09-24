import { css, styled } from "styled-components";

const StyledSideBarItem = styled.div`
    position: relative;
    display: grid;
    column-gap: 6rem;
    align-items: ${(props) =>
        props.theme.isSideBarOpen ? "center" : "flex-start"};
    justify-content: center;
    color: var(--color-purple-300);
    font-weight: 600;
    height: 6rem;
    margin-bottom: 1.5rem;
    transition: all 0.5s;

    ${(props) =>
        props.theme.isSideBarOpen &&
        css`
            grid-template-columns: 3fr 1fr;
        `}

    ${(props) =>
        props.$isActive &&
        css`
            background-color: color-mix(
                in srgb,
                var(--color-purple-100),
                transparent 60%
            );
        `}

    ${(props) =>
        props.$isActive &&
        props.theme.isSideBarOpen &&
        css`
            &::before {
                content: "";
                height: 100%;
                width: 1rem;
                background-color: var(--color-purple-200);
                position: absolute;
                right: 0;
            }
        `}
`;

const SideBarName = styled.p`
    transition: all 0.5s ease;
    font-size: ${(props) => (props.theme.isSideBarOpen ? "1.7rem" : "0")};
    font-weight: 800;
    opacity: ${(props) => (props.theme.isSideBarOpen ? "1" : "0")};
    transform: ${(props) =>
        props.theme.isSideBarOpen ? "translateX(0)" : "translateX(100px)"};
    justify-self: flex-end;
`;

function SideBarListItem({ item }) {
    const { isActive, name, icon } = item;
    return (
        <StyledSideBarItem $isActive={isActive}>
            <SideBarName>{name}</SideBarName>
            {icon}
        </StyledSideBarItem>
    );
}

export default SideBarListItem;
