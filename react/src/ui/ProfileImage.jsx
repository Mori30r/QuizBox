import { css, styled } from "styled-components";

const ImageContainer = styled.div`
    position: relative;
    background-color: antiquewhite;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    ${(props) =>
        !props.theme.isOpen &&
        css`
            margin: 1rem;
        `}
`;

const StyledProfileImage = styled.img`
    transition: all 0.5s;
    height: ${(props) => (props.theme.isOpen ? "12rem" : "7rem")};
`;

function ProfileImage({ src }) {
    return (
        <ImageContainer>
            <StyledProfileImage src={src} />
        </ImageContainer>
    );
}

export default ProfileImage;
