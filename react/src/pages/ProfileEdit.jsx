import { HiOutlinePhoto, HiPhoto, HiXMark } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";

import Row from "./../ui/Row";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Heading from "../ui/Heading";
import SubHeading from "../ui/SubHeading";
import ProfileImage from "./../ui/ProfileImage";

import Profile from "../assets/images/profile.png";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    padding: 4rem 6rem;
    background-color: var(--color-purple-100);
    border-radius: 6px;
    overflow-y: auto;
    box-shadow: 0 0 1rem var(--color-grey-400);
    margin: 0 2rem;
`;

const Header = styled(Row)`
    margin-bottom: 3rem;
`;
const Form = styled.form`
    display: grid;
    grid-template-columns: 10fr 1fr;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(6, 1fr);
    row-gap: 3rem;
    column-gap: 2rem;
    padding: 0 4rem;
`;

const ImageContainer = styled.div`
    position: relative;
`;
const IconContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    left: 1rem;
    background-color: var(--color-purple-200);
    border-radius: 100%;
    height: 2.5rem;
    width: 2.5rem;
`;

function ProfileEdit() {
    const { register, handleSubmit } = useForm();

    const HandleForm = (e) => {
        console.log(e);
    };

    return (
        <Main>
            <Header role="header">
                <NavLink to="/">
                    <HiXMark size={30} color="var(--color-grey-0)" />
                </NavLink>
                <div>
                    <Heading type="white">تغییر پروفایل</Heading>
                    <SubHeading type="white">
                        اطلاعات شخصی و عکس خودت رو به روزرسانی کن
                    </SubHeading>
                </div>
            </Header>
            <Form onSubmit={handleSubmit(HandleForm)}>
                <Container>
                    <Input register={{ ...register("lname") }}>
                        نام خانوادگی
                    </Input>
                    <Input register={{ ...register("fname") }}>نام</Input>
                    <Input register={{ ...register("username") }} fullWidth>
                        نام کاربری
                    </Input>
                    <Input register={{ ...register("major") }}>
                        رشته تحصیلی
                    </Input>
                    <Input register={{ ...register("university") }}>
                        دانشگاه
                    </Input>
                    <Input register={{ ...register("email") }} fullWidth>
                        آدرس ایمیل
                    </Input>
                    <Input register={{ ...register("phone") }} fullWidth>
                        شماره همراه
                    </Input>
                    <Button type="primary">اعمال تغییرات</Button>
                </Container>
                <div>
                    <ImageContainer>
                        <ProfileImage src={Profile} />
                        <IconContainer>
                            <HiOutlinePhoto
                                size={15}
                                color="var(--color-purple-0)"
                            />
                        </IconContainer>
                    </ImageContainer>
                </div>
            </Form>
        </Main>
    );
}

export default ProfileEdit;
