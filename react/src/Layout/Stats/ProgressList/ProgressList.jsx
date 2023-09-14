import { styled } from "styled-components";
import { list } from "../../../data/StatsProgress";
import Progress from "../../../ui/Progress";

const StyledProgressList = styled.div`
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    height: 75%;
`;

function ProgressList() {
    const progressList = list.slice(0, 4);
    return (
        <StyledProgressList>
            {progressList.map((progress) => (
                <Progress progress={progress} key={progress.name} />
            ))}
        </StyledProgressList>
    );
}

export default ProgressList;
