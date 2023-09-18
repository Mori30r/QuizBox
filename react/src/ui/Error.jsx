import { styled } from "styled-components";

const StyledError = styled.p`
    color: var(--color-red-200);
    font-weight: 800;
    font-size: 1.3rem;
`;

function Error({ children }) {
    return <StyledError>{children}</StyledError>;
}

export default Error;
