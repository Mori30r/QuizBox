import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import Heading from "../../ui/Heading";
import SubHeading from "../../ui/SubHeading";
import Input from "../../ui/Input";
import Check from "../../ui/Check";
import Row from "../../ui/Row";
import Button from "../../ui/Button";
import { Form, FormContainer, ImageContainer } from "./Auth.Elements";

import Girl from "../../assets/images/girl.png";
import { SIGNUP_PAGE } from "../../constants/pagesAddress";
import { loginSchema } from "../../constants/dataPatterns";

const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
`;

const Image = styled.img`
    position: absolute;
    z-index: 1;
    top: 20dvh;
    left: 5rem;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: inherit;
    font-weight: 1000;
    margin-right: 0.5rem;
`;

function Login() {
    const { register, handleSubmit, control } = useForm({
        resolver: yupResolver(loginSchema),
    });

    function handleLogin(e) {
        console.log(e);
    }
    return (
        <>
            <FormContainer>
                <Form onSubmit={handleSubmit(handleLogin)}>
                    <Header>
                        <Heading>! خوش اومدی</Heading>
                        <SubHeading>
                            اطلاعات ورود به حسابت رو وارد کن
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
                    <Row>
                        <SubHeading>
                            <StyledNavLink to="/reset-password">
                                رمز حساب رو فراموش کردی؟
                            </StyledNavLink>
                        </SubHeading>
                        <Check
                            register={{ ...register("remember") }}
                            id="remember"
                        >
                            این حساب را به خاطر بسپر
                        </Check>
                    </Row>
                    <Button type="primary">ورود به حساب</Button>
                    <SubHeading>
                        هنوز حساب نساختی؟
                        <StyledNavLink to={SIGNUP_PAGE}>
                            ثبت نام کن
                        </StyledNavLink>
                    </SubHeading>
                </Form>
            </FormContainer>
            <ImageContainer>
                <Image src={Girl} />
            </ImageContainer>
        </>
    );
}

export default Login;
