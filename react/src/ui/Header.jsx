import { styled } from "styled-components";
import Row from "./Row";
import { breakPoint11 } from "../constants/breakpoints";

const StyledHeader = styled(Row)`
    margin: 3rem 0;

    @media screen and (${breakPoint11}) {
        margin-bottom: 2rem;
    }
`;

function Header({ children }) {
    return <StyledHeader>{children}</StyledHeader>;
}

export default Header;
