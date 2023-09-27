import { styled } from "styled-components";
import PropagateLoader from "react-spinners/PropagateLoader";

const SpinnerContainer = styled.div`
    align-self: center;
    margin: 3rem 0 5rem 0;
`;

function Spinner() {
    return (
        <SpinnerContainer>
            <PropagateLoader color="var(--color-purple-300)" />
        </SpinnerContainer>
    );
}

export default Spinner;
