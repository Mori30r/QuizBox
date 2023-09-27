import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { Form, FormContainer, ImageContainer } from "./Auth.Elements";
import SubHeading from "../../ui/SubHeading";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Check from "../../ui/Check";

import BoyTyping from "../../assets/images/boy-typing.png";
import { LOGIN_PAGE } from "../../constants/pagesAddress";
import { signUpSchema } from "../../constants/dataPatterns";
import Radio from "../../ui/Radio";

const Image = styled.img`
    position: absolute;
    z-index: 1;
    top: 35dvh;
    left: 10rem;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: inherit;
    font-weight: 1000;
    margin-right: 0.5rem;
`;

const RadioContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: flex-end;
    column-gap: 5rem;
    margin-top: 2rem;
`;

const DoubleInputContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5rem;
    direction: rtl; // to make in order with Tab
`;

function Signup() {
    const { register, handleSubmit, control } = useForm({
        resolver: yupResolver(signUpSchema),
    });

    function handleLogin(e) {
        console.log(e);
    }

    return (
        <>
            <FormContainer>
                <Form onSubmit={handleSubmit(handleLogin)}>
                    <Heading>! اکانت جدید بساز</Heading>
                    <SubHeading>
                        اطلاعاتت رو برای ساخت حساب جدید وارد کن
                    </SubHeading>
                    <DoubleInputContainer>
                        <Input
                            register={{
                                ...register("first_name"),
                            }}
                            id="first_name"
                            shape="underline"
                            type="text"
                            control={control}
                        >
                            نام
                        </Input>
                        <Input
                            register={{ ...register("last_name") }}
                            id="last_name"
                            shape="underline"
                            type="text"
                            control={control}
                        >
                            نام خانوادگی
                        </Input>
                    </DoubleInputContainer>
                    <Input
                        register={{
                            ...register("username"),
                        }}
                        id="username"
                        shape="underline"
                        type="text"
                        control={control}
                    >
                        نام کاربری
                    </Input>
                    <Input
                        register={{ ...register("email") }}
                        id="email"
                        shape="underline"
                        type="text"
                        control={control}
                    >
                        آدرس ایمیل
                    </Input>
                    <DoubleInputContainer>
                        <Input
                            register={{
                                ...register("password"),
                            }}
                            id="password"
                            shape="underline"
                            type="password"
                            control={control}
                        >
                            رمز عبور
                        </Input>
                        <Input
                            register={{
                                ...register("password2"),
                            }}
                            id="password2"
                            shape="underline"
                            type="password"
                            control={control}
                        >
                            تکرار رمز عبور
                        </Input>
                    </DoubleInputContainer>
                    <RadioContainer>
                        <Radio
                            register={{
                                ...register("role"),
                            }}
                            value="teacher"
                            name="role"
                            type="radio"
                        >
                            استاد
                        </Radio>
                        <Radio
                            register={{
                                ...register("role"),
                            }}
                            value="student"
                            name="role"
                            type="radio"
                            checked
                        >
                            دانش آموز
                        </Radio>
                    </RadioContainer>
                    <Check register={{ ...register("remember") }} id="remember">
                        این حساب را به خاطر بسپر
                    </Check>
                    <Button type="primary">ساخت اکانت</Button>
                    <SubHeading>
                        قبلا ثبت نام کردی؟
                        <StyledNavLink to={LOGIN_PAGE}>
                            ورود به حساب
                        </StyledNavLink>
                    </SubHeading>
                </Form>
            </FormContainer>
            <ImageContainer>
                <Image src={BoyTyping} />
            </ImageContainer>
        </>
    );
}

export default Signup;
