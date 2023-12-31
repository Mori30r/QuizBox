import { HiOutlinePhoto } from "react-icons/hi2";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import SubHeading from "../../ui/SubHeading";
import MainSection from "../../ui/MainSection";
import ProfileImage from "../../ui/ProfileImage";
import HeaderWithBack from "../../ui/HeaderWithBack";

import Profile from "../../assets/images/profile.png";
import { breakPoint11 } from "../../constants/breakpoints";

const Form = styled.form`
    display: grid;
    grid-template-columns: 10fr 1fr;

    @media screen and (${breakPoint11}) {
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: center;
        row-gap: 2rem;
    }
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
    height: 8rem;
    @media screen and (${breakPoint11}) {
        grid-row: 1 / 2;
        align-self: center;
        justify-self: center;
    }
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
    const { register, handleSubmit, control } = useForm();

    const HandleForm = (e) => {
        console.log(e);
    };

    return (
        <MainSection type="vertical">
            <HeaderWithBack>
                <Heading type="white">تغییر پروفایل</Heading>
                <SubHeading type="white">
                    اطلاعات شخصی و عکس خودت رو به روزرسانی کن
                </SubHeading>
            </HeaderWithBack>
            <Form onSubmit={handleSubmit(HandleForm)}>
                <Container>
                    <Input
                        type="text"
                        shape="normal"
                        control={control}
                        register={{ ...register("last_name") }}
                    >
                        نام خانوادگی
                    </Input>
                    <Input
                        type="text"
                        shape="normal"
                        control={control}
                        register={{ ...register("first_name") }}
                    >
                        نام
                    </Input>
                    <Input
                        type="text"
                        shape="normal"
                        control={control}
                        register={{ ...register("email") }}
                        fullWidth
                    >
                        آدرس ایمیل
                    </Input>
                    <Input
                        type="text"
                        shape="normal"
                        control={control}
                        register={{ ...register("major") }}
                    >
                        رشته تحصیلی
                    </Input>
                    <Input
                        type="text"
                        shape="normal"
                        control={control}
                        register={{ ...register("university") }}
                    >
                        دانشگاه
                    </Input>
                    <Input
                        type="text"
                        shape="normal"
                        control={control}
                        register={{ ...register("phone") }}
                        fullWidth
                    >
                        شماره همراه
                    </Input>
                    <Button type="primary">اعمال تغییرات</Button>
                </Container>
                <ImageContainer>
                    <ProfileImage src={Profile} />
                    <IconContainer>
                        <HiOutlinePhoto
                            size={15}
                            color="var(--color-purple-0)"
                        />
                    </IconContainer>
                </ImageContainer>
            </Form>
        </MainSection>
    );
}

export default ProfileEdit;
