import { styled } from "styled-components";
import { getColorByGrade } from "../utils/getColorByGrade";

const StyledProgress = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

const ProgressContainer = styled.div`
    height: 100%;
    border-radius: 6px;
    width: 3rem;
    display: flex;
    flex-direction: column-reverse;
    background-color: ${(props) => `var(--color-${props.color}-0)}`};
`;

const ProgressValue = styled.div`
    border-radius: 6px;
    animation: setValue 1s ease 1s;
    width: 100%;
    background-color: ${(props) => `var(--color-${props.color}-400)`};
    height: ${(props) => props.value};

    @keyframes setValue {
        from {
            height: 0;
        }
    }
`;

const ProgressLabel = styled.p`
    color: ${(props) => `var(--color-${props.color}-400)`};
    font-size: 1.2rem;
    font-weight: 800;
`;

function Progress({ progress }) {
    const progressColor = getColorByGrade(progress.grade);
    const progressValue = `${(progress.grade / 20) * 100}%`;
    return (
        <StyledProgress>
            <ProgressContainer color={progressColor}>
                <ProgressValue value={progressValue} color={progressColor} />
            </ProgressContainer>
            <ProgressLabel color={progressColor}>{progress.name}</ProgressLabel>
        </StyledProgress>
    );
}

export default Progress;
