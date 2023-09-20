import { styled } from "styled-components";

const TagContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;

const StyledTag = styled.span`
    justify-self: flex-end;
    align-self: center;
    background-color: ${(props) => `var(--color-${props.type}-0)`};
    color: ${(props) => `var(--color-${props.type}-400)`};
    font-size: 1.1rem;
    font-weight: 1000;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    direction: rtl;
`;

function Tag({ children, type }) {
    return (
        <TagContainer>
            <StyledTag type={type}>{children}</StyledTag>
        </TagContainer>
    );
}

export default Tag;
