import { styled } from "styled-components";
const StyledHeader = styled.p`
    font-size: ${(props) => (props.$small ? "2.5rem" : "3rem")};
    font-weight: 800;
    color: ${(props) =>
        props.type === "white"
            ? "var(--color-grey-0)"
            : "var(--color-grey-600)"};
`;

function Heading({ children, type, small }) {
    return (
        <StyledHeader type={type} $small={small}>
            {children}
        </StyledHeader>
    );
}

export default Heading;
