import { styled } from "styled-components";
import { breakPoint8 } from "../constants/breakpoints";

const StyledCardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    row-gap: 2rem;
    justify-items: center;

    @media screen and (${breakPoint8}) {
        grid-template-columns: 1fr;
        row-gap: 2rem;
    }
`;

function CardsContainer({ children }) {
    return <StyledCardsContainer>{children}</StyledCardsContainer>;
}

export default CardsContainer;
