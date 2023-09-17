import { styled } from "styled-components";
const StyledSubHeading = styled.p`
    font-size: 1.3rem;
    font-weight: 500;
    color: ${(props) =>
        props.type === "white"
            ? "var(--color-purple-0)"
            : "var(--color-grey-300)"};
`;

function SubHeading({ children, type, role }) {
    return (
        <StyledSubHeading role={role} type={type}>
            {children}
        </StyledSubHeading>
    );
}

export default SubHeading;
