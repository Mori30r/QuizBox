import { styled } from "styled-components";
import SubHeading from "./SubHeading";

const StyledRadio = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

function Radio({ children, value, name, register, checked }) {
    return (
        <StyledRadio>
            <SubHeading>{children}</SubHeading>
            <input
                {...register}
                type="radio"
                value={value}
                name={name}
                id={name}
                checked={checked}
            />
        </StyledRadio>
    );
}

export default Radio;
