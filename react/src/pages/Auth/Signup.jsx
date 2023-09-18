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

const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
`;

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
                    <Header>
                        <Heading>! اکانت جدید بساز</Heading>
                        <SubHeading>
                            اطلاعاتت رو برای ساخت حساب جدید وارد کن
                        </SubHeading>
                    </Header>
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
