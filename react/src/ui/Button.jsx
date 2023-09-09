import { css, styled } from "styled-components";

const types = {
    primary: css`
        background-color: var(--color-purple-200);
        color: var(--color-purple-0);

        &:hover {
            background-color: var(--color-purple-0);
            color: var(--color-purple-200);
        }
    `,
    outline: css`
        background-color: var(--color-purple-0);
        color: var(--color-purple-200);

        &:hover {
            background-color: var(--color-purple-200);
            color: var(--color-purple-0);
        }
    `,
};

const StyledButton = styled.button`
    padding: 0.5rem 2rem;
    border: 2px solid var(--color-purple-200);
    border-radius: 25px;
    font-weight: 1000;
    transition: all 0.2s;
    ${(props) => types[props.type]};
`;

function Button({ children, type }) {
    return <StyledButton type={type}>{children}</StyledButton>;
}

export default Button;
