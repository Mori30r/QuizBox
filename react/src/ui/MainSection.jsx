import { styled } from "styled-components";
import Row from "./Row";
import { breakPoint12 } from "../constants/breakpoints";

const StyledMainSection = styled(Row)`
    overflow-y: auto;
    background-color: var(--color-purple-100);
    border-radius: 6px;
    padding: 4rem;
    box-shadow: 0 0 1rem var(--color-grey-400);
    margin: 0 2rem;
    flex: 1;

    @media screen and (${breakPoint12}) {
        margin: 0;
        padding: 4rem;
    }
`;

function MainSection({ children, type }) {
    return <StyledMainSection type={type}>{children}</StyledMainSection>;
}

export default MainSection;
