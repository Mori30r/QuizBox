import { styled } from "styled-components";

const StyledHeader = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: ${(props) => (props.$one ? "flex-end" : "space-between")};
`;

function Header({ children, one }) {
    return <StyledHeader $one={one}>{children}</StyledHeader>;
}

export default Header;
