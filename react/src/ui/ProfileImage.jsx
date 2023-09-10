import { css, styled } from "styled-components";
import { useSideBar } from "../Layout/SideBar/useSideBar";

const ImageContainer = styled.div`
    background-color: antiquewhite;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    ${(props) =>
        !props.isOpen &&
        css`
            margin: 1rem;
        `}
`;

const StyledProfileImage = styled.img`
    transition: all 0.5s;
    height: ${(props) => (props.$isOpen ? "12rem" : "7rem")};
`;

function ProfileImage({ src }) {
    const isOpen = useSideBar();
    return (
        <ImageContainer $isOpen={isOpen}>
            <StyledProfileImage src={src} $isOpen={isOpen} />
        </ImageContainer>
    );
}

export default ProfileImage;
