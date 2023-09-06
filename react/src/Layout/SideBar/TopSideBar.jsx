import { css, styled } from "styled-components";
import { HiBars3, HiXMark } from "react-icons/hi2";

import { useSideBar } from "./useSideBar";

import Profile from "../../assets/images/profile.png";
import ProfileImage from "../../ui/ProfileImage";

const StyledTopSideBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 3rem;
`;

const MenuIconContainer = styled.div`
    margin-top: 2rem;
    cursor: pointer;

    ${(props) =>
        props.$isOpen &&
        css`
            align-self: flex-end;
            margin-right: 2rem;
        `}
`;

const Name = styled.p`
    font-weight: 1000;
    font-size: 1.6rem;
    color: var(--color-grey-400);
`;

const Status = styled.p`
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--color-purple-300);
`;

function TopSideBar({ onClick }) {
    const isOpen = useSideBar();
    return (
        <StyledTopSideBar type="vertical">
            <MenuIconContainer $isOpen={isOpen}>
                {isOpen ? (
                    <HiXMark
                        onClick={onClick}
                        size={30}
                        color="--var-color-purple-300"
                    />
                ) : (
                    <HiBars3
                        onClick={onClick}
                        size={30}
                        color="--var-color-purple-300"
                    />
                )}
            </MenuIconContainer>
            <ProfileImage src={Profile} isOpen={isOpen} />
            {isOpen && (
                <>
                    <Name>جواد جوادی</Name>
                    <Status>دانشجو</Status>
                </>
            )}
        </StyledTopSideBar>
    );
}

export default TopSideBar;
