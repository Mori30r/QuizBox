import { css, styled } from "styled-components";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import { useState } from "react";
import { useFormState, useWatch } from "react-hook-form";
import Error from "./Error";

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
        font-weight: 1000;
        font-size: 1.2rem;
        color: var(--color-purple-300);
        transition: all 0.2s;
        transform: translateY(3rem);
        opacity: 0;
        ${(props) =>
            props.$hasValue &&
            css`
                transform: translateY(0);
                opacity: 1;
            `}
    `,
    normal: css`
        font-weight: 600;
        font-size: 1.5rem;
        color: var(--color-purple-0);
    `,
};

const Label = styled.label`
    ${(props) => labelTypes[props.shape]}
`;

const inputTypes = {
    underline: css`
        background-color: "";
        border: none;
        border-radius: 0;
        border-bottom: ${(props) =>
            props.$hasError
                ? "solid 2px var(--color-red-200)"
                : "solid 2px var(--color-grey-200)"};

        &:focus {
            color: var(--color-grey-500);
            border-bottom: solid 2px var(--color-purple-300);

            &::placeholder {
                color: var(--color-purple-400);
                font-weight: 800;
            }
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

    &::placeholder {
        color: ${(props) =>
            props.$hasError ? "var(--color-red-200)" : "var(--color-grey-300)"};
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

function Input({ id, children, fullWidth, register, type, shape, control }) {
    const [isHidden, setIsHidden] = useState(true);
    const hasValue = Boolean(useWatch({ control, name: id }));
    const { errors } = useFormState({ control });
    console.log(errors);
    return (
        <InputContainer $fullWidth={fullWidth}>
            <Label $hasValue={hasValue} htmlFor={id} shape={shape} type={type}>
                {children}
            </Label>
            <Container>
                <StyledInput
                    {...register}
                    placeholder={shape === "underline" && children}
                    shape={shape}
                    id={id}
                    type={type === "password" ? isHidden && "password" : type}
                    $hasError={Boolean(errors?.[id])}
                />
                <Icon onClick={() => setIsHidden((isHidden) => !isHidden)}>
                    {type === "password" && (
                        <>
                            {isHidden ? (
                                <HiOutlineEyeSlash
                                    strokeWidth="2"
                                    color="var(--color-purple-400)"
                                    size={15}
                                />
                            ) : (
                                <HiOutlineEye
                                    strokeWidth="2"
                                    color="var(--color-purple-400)"
                                    size={15}
                                />
                            )}
                        </>
                    )}
                </Icon>
            </Container>
            {errors?.[id]?.type === "required" && (
                <Error>این فیلد رو حتما باید پر کنی !</Error>
            )}
            {errors?.[id]?.type === "email" && (
                <Error>لطفا یه ایمیل معتبر وارد کن !</Error>
            )}
            {errors?.[id]?.type === "min" && (
                <Error>تعداد حروف وارد شده خیلی کمه !</Error>
            )}
        </InputContainer>
    );
}

export default Input;
