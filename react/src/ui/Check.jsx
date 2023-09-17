import { styled } from "styled-components";

const StyledCheck = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    margin: 2rem 0;
`;

const Label = styled.label`
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--color-grey-300);
`;

function Check({ children, id, register }) {
    return (
        <StyledCheck>
            <Label htmlFor={id}>{children}</Label>
            <input {...register} id={id} type="checkbox" />
        </StyledCheck>
    );
}

export default Check;
