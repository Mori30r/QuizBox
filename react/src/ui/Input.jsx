import { styled } from "styled-components";

const InputContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    grid-column: ${(props) => props.$fullWidth && "1 / 3"};
    text-align: right;
    direction: rtl;
`;

const Label = styled.label`
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--color-grey-0);
`;

const StyledInput = styled.input`
    background-color: var(--color-purple-0);
    height: 4rem;
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--color-grey-300);
    border: none;
    border-radius: 6px;
    padding: 1rem;
    transition: all 0.2s;

    &:focus {
        outline: none;
        color: var(--color-grey-500);
        background-color: var(--color-grey-100);
    }
`;

function Input({ id, children, fullWidth, register }) {
    return (
        <InputContainer $fullWidth={fullWidth}>
            <Label htmlFor={id}>{children}</Label>
            <StyledInput {...register} id={id} />
        </InputContainer>
    );
}

export default Input;
