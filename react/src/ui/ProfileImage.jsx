import { css, styled } from "styled-components";

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
    height: ${(props) => (props.$isOpen ? "10rem" : "7rem")};
`;

function ProfileImage({ src, isOpen }) {
    return (
        <ImageContainer $isOpen={isOpen}>
            <StyledProfileImage src={src} $isOpen={isOpen} />
        </ImageContainer>
    );
}

export default ProfileImage;
