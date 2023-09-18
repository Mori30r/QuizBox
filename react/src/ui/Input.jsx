import { css, styled } from "styled-components";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import { useState } from "react";

const InputContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    grid-column: ${(props) => props.$fullWidth && "1 / 3"};
    text-align: right;
    direction: rtl;
`;

const labelTypes = {
    underline: css`
        display: none;
    `,
    normal: css`
        font-size: 1.5rem;
        color: var(--color-purple-0);
    `,
};

const Label = styled.label`
    font-weight: 600;
    margin-bottom: 0.5rem;
    ${(props) => labelTypes[props.shape]}
`;

const inputTypes = {
    underline: css`
        background-color: "";
        border: none;
        border-radius: 0;
        border-bottom: solid 1px var(--color-grey-300);

        &:focus {
            color: var(--color-grey-500);
        }
    `,
    normal: css`
        background-color: var(--color-purple-0);
        border-radius: 6px;
        border: none;

        &:focus {
            color: var(--color-grey-500);
            background-color: var(--color-grey-100);
        }
    `,
};

const StyledInput = styled.input`
    height: 4rem;
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--color-grey-300);
    padding: 1rem;
    transition: all 0.2s;
    width: 100%;
    ${(props) => inputTypes[props.shape]}

    &:focus {
        outline: none;
    }
`;

const Icon = styled.div`
    position: absolute;
    left: 0.5rem;
    top: 50%;
    transform: translateY(-25%);
`;

const Container = styled.div`
    position: relative;
`;

function Input({ id, children, fullWidth, register, type, shape }) {
    const [isHidden, setIsHidden] = useState(true);
    return (
        <InputContainer $fullWidth={fullWidth}>
            <Label htmlFor={id} shape={shape} type={type}>
                {children}
            </Label>
            <Container>
                <StyledInput
                    {...register}
                    placeholder={shape === "underline" && children}
                    shape={shape}
                    id={id}
                    type={type === "password" ? isHidden && "password" : type}
                />
                <Icon onClick={() => setIsHidden((isHidden) => !isHidden)}>
                    {type === "password" && (
                        <>
                            {isHidden ? (
                                <HiOutlineEyeSlash
                                    color="var(--color-purple-400)"
                                    size={15}
                                />
                            ) : (
                                <HiOutlineEye
                                    color="var(--color-purple-400)"
                                    size={15}
                                />
                            )}
                        </>
                    )}
                </Icon>
            </Container>
        </InputContainer>
    );
}

export default Input;
