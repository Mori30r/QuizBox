import { css, styled } from "styled-components";
import { breakPoint4, breakPoint5 } from "../constants/breakpoints";

const types = {
    primary: css`
        font-size: 1.5rem;
        background-color: var(--color-purple-200);
        color: var(--color-purple-0);

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
        padding: 0.5rem 2rem;
        background-color: var(--color-grey-0);
        color: var(--color-grey-400);
        border: 2px solid var(--color-grey-0);
        font-size: 1.5rem;

        @media screen and (${breakPoint4}) {
            font-size: 1.2rem;
        }

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
