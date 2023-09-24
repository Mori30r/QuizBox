import { css, styled } from "styled-components";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";

import ProfileImage from "../../ui/ProfileImage";
import RouteNavLink from "../../ui/RouteNavLink";
import { toggleSideBar } from "../../ui/uiSlice";

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
        height: ${(props) => (props.theme.isSideBarOpen ? "12rem" : "7rem")};
    }
`;

const MenuIconContainer = styled.div`
    margin-top: 2rem;
    cursor: pointer;

    ${(props) =>
        props.theme.isSideBarOpen &&
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
    const { isSideBarOpen } = useSelector((store) => store.ui);
    const dispatch = useDispatch();

    return (
        <StyledTopSideBar type="vertical">
            <MenuIconContainer>
                {isSideBarOpen ? (
                    <HiXMark
                        onClick={() => dispatch(toggleSideBar())}
                        size={30}
                        color="var(--color-purple-300)"
                    />
                ) : (
                    <HiBars3
                        onClick={() => dispatch(toggleSideBar())}
                        size={30}
                        color="var(--color-purple-300)"
                    />
                )}
            </MenuIconContainer>
            <RouteNavLink to={PROFILE_EDIT_PAGE}>
                <ProfileImage src={Profile} />
            </RouteNavLink>
            {isSideBarOpen && (
                <>
                    <Name>جواد جوادی</Name>
                    <Status>دانشجو</Status>
                </>
            )}
        </StyledTopSideBar>
    );
}

export default TopSideBar;
