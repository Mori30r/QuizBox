import { css, styled } from "styled-components";

const types = {
    primary: css`
        background-color: var(--color-purple-200);
        color: var(--color-purple-0);
        padding: 0.5rem 2rem;

        &:hover {
            background-color: var(--color-purple-0);
            color: var(--color-purple-200);
            border: 2px solid var(--color-purple-0);
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
    big: css`
        background-color: var(--color-grey-0);
        color: var(--color-grey-400);
        padding: 1rem 4rem;
        border: 2px solid var(--color-grey-0);
        font-size: 1.5rem;

        &:hover {
            color: var(--color-grey-500);
            background-color: var(--color-grey-200);
            border: 2px solid var(--color-grey-200);
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
