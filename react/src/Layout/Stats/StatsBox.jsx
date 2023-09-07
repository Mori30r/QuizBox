import { styled } from "styled-components";

const StyledStatsBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--color-purple-0);
    height: ${(props) => props.height};
    width: 55rem;
    border-radius: 25px;
    margin: 1rem 2rem;
    padding: 0 2rem;
`;

function StatsBox({ height, children }) {
    return <StyledStatsBox height={height}>{children}</StyledStatsBox>;
}

export default StatsBox;
