import { styled } from "styled-components";
import Row from "../../ui/Row";
import StatsBox from "./StatsBox";
import QuizBoxList from "./QuizBoxList";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import ProgressList from "./ProgressList";

const StatsBoxHeader = styled(Row)`
    height: 10rem;
    padding: 1rem;

    & div {
        display: flex;
        flex-direction: column;
        align-items: center;

        & p:nth-child(1) {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--color-grey-800);
        }

        & p:nth-child(2) {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--color-grey-300);
        }
    }
`;

function Stats() {
    return (
        <Row type="vertical">
            <StatsBox height="70%">
                <StatsBoxHeader>
                    <Select fontSize="1.5rem">
                        <option value="today">امروز</option>
                        <option value="tomorrow">فردا</option>
                        <option value="next-week">هفته آینده</option>
                    </Select>
                    <div>
                        <p>تقویم</p>
                        <p>شانزدهم شهریور 1402</p>
                    </div>
                </StatsBoxHeader>
                <QuizBoxList />
            </StatsBox>
            <StatsBox height="30%">
                <StatsBoxHeader>
                    <Button type="outline">مشاهده همه</Button>
                    <div>
                        <p>میانگین نمرات همه</p>
                    </div>
                </StatsBoxHeader>
                <ProgressList />
            </StatsBox>
        </Row>
    );
}

export default Stats;
