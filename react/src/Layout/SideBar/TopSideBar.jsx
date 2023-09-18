import { css, styled, useTheme } from "styled-components";
import { HiBars3, HiXMark } from "react-icons/hi2";

import ProfileImage from "../../ui/ProfileImage";
import RouteNavLink from "../../ui/RouteNavLink";

import Profile from "../../assets/images/profile.png";
import { PROFILE_EDIT_PAGE } from "../../constants/pagesAddress";

const StyledTopSideBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 3rem;

    & img {
        height: ${(props) => (props.theme.isOpen ? "12rem" : "7rem")};
    }
`;

const MenuIconContainer = styled.div`
    margin-top: 2rem;
    cursor: pointer;

    ${(props) =>
        props.theme.isOpen &&
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

function TopSideBar() {
    const { isOpen, toggleSideBar } = useTheme();

    return (
        <StyledTopSideBar type="vertical">
            <MenuIconContainer>
                {isOpen ? (
                    <HiXMark
                        onClick={toggleSideBar}
                        size={30}
                        color="var(--color-purple-300)"
                    />
                ) : (
                    <HiBars3
                        onClick={toggleSideBar}
                        size={30}
                        color="var(--color-purple-300)"
                    />
                )}
            </MenuIconContainer>
            <RouteNavLink to={PROFILE_EDIT_PAGE}>
                <ProfileImage src={Profile} />
            </RouteNavLink>
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
