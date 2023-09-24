import { styled } from "styled-components";

const Heading = styled.p`
    font-size: ${(props) => (props.$small ? "2.5rem" : "3rem")};
    font-weight: 800;
    align-self: center;
    color: ${(props) =>
        props.type === "white"
            ? "var(--color-grey-0)"
            : "var(--color-grey-600)"};
    ${(props) => props.style}
`;

export default Heading;
