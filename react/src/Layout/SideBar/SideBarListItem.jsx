import { css, styled } from "styled-components";
import { useSideBar } from "./useSideBar";

const StyledSideBarListItem = styled.div`
    position: relative;
    display: grid;
    column-gap: 6rem;
    align-items: center;
    justify-content: center;
    color: var(--color-purple-300);
    font-weight: 600;
    height: 8rem;
    margin-bottom: 1.5rem;
    transition: all 0.5s;

    ${(props) =>
        props.$isOpen &&
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
        props.$isOpen &&
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
    font-size: 1.8rem;
    width: 100%;
    justify-self: center;
`;

function SideBarListItem({ item }) {
    const isOpen = useSideBar();
    const { isActive, name, icon } = item;
    return (
        <StyledSideBarListItem $isOpen={isOpen} $isActive={isActive}>
            {isOpen && <SideBarName>{name}</SideBarName>}
            {icon}
        </StyledSideBarListItem>
    );
}

export default SideBarListItem;
