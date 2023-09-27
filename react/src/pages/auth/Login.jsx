import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import Row from "../../ui/Row";
import Input from "../../ui/Input";
import Error from "../../ui/Error";
import Check from "../../ui/Check";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import SubHeading from "../../ui/SubHeading";
import PropagateLoader from "react-spinners/PropagateLoader";
import { Form, FormContainer, ImageContainer } from "./Auth.Elements";

import { useLogin } from "./useLogin";
import Girl from "../../assets/images/girl.png";
import { loginSchema } from "../../constants/dataPatterns";
import { SIGNUP_PAGE } from "../../constants/pagesAddress";

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

const SpinnerContainer = styled.div`
    align-self: center;
    margin: 3rem 0 5rem 0;
`;

function Login() {
    const { register, handleSubmit, control, reset } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const { mutate: login, isLoading, isError } = useLogin();

    function handleLogin(e) {
        console.log(e);
        // don't forget e.remember 😉
        login({ username: e.email, password: e.password });
        reset();
    }

    return (
        <>
            <FormContainer>
                <Form onSubmit={handleSubmit(handleLogin)}>
                    <Heading>! خوش اومدی</Heading>
                    <SubHeading>اطلاعات ورود به حسابت رو وارد کن</SubHeading>
                    {isError && <Error>! نام کاربری یا رمز عبور اشتباهه</Error>}
                    <Input
                        register={{
                            ...register("email"),
                        }}
                        id="email"
                        shape="underline"
                        type="text"
                        control={control}
                    >
                        ایمیل
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
                    {isLoading ? (
                        <SpinnerContainer>
                            <PropagateLoader color="var(--color-purple-300)" />
                        </SpinnerContainer>
                    ) : (
                        <Button type="primary">ورود به حساب</Button>
                    )}

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
