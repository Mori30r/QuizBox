import { styled } from "styled-components";

const StyledSelect = styled.select`
    border: none;
    padding: 0.7rem 2rem;
    font-size: ${(props) => props.fontSize};
    font-weight: 500;
`;

function Select({ fontSize, children }) {
    return <StyledSelect fontSize={fontSize}>{children}</StyledSelect>;
}

export default Select;
