import { styled } from "styled-components";
const StyledSubHeading = styled.span`
    font-size: 1.3rem;
    font-weight: 500;
    align-self: center;
    color: ${(props) =>
        props.type === "white"
            ? "var(--color-purple-0)"
            : "var(--color-grey-300)"};
`;

function SubHeading({ children, type }) {
    return <StyledSubHeading type={type}>{children}</StyledSubHeading>;
}

export default SubHeading;
