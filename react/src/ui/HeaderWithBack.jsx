import { styled } from "styled-components";
import { HiXMark } from "react-icons/hi2";

import Row from "./Row";
import RouteNavLink from "./RouteNavLink";

import { breakPoint11 } from "../constants/breakpoints";
import { HOME_PAGE } from "../constants/pagesAddress";

const StyledHeader = styled(Row)`
    margin-bottom: 3rem;

    @media screen and (${breakPoint11}) {
        margin-bottom: 2rem;
    }
`;

function HeaderWithBack({ children }) {
    return (
        <StyledHeader>
            <RouteNavLink to={HOME_PAGE}>
                <HiXMark size={30} color="var(--color-grey-0)" />
            </RouteNavLink>
            <div>{children}</div>
        </StyledHeader>
    );
}

export default HeaderWithBack;
