import { styled } from "styled-components";
import Row from "../ui/Row";

const StyledMain = styled(Row)`
    background-color: var(--color-purple-100);
    width: 100%;
    height: 98dvh;
    border-radius: 25px;
    margin: 1rem;
`;

function Main() {
    return <StyledMain type="vertical"></StyledMain>;
}

export default Main;
