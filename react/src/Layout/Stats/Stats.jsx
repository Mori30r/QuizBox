import { styled } from "styled-components";
import Row from "../../ui/Row";
import QuizBoxList from "./Calender/QuizBoxList";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import ProgressList from "./ProgressList/ProgressList";
import {
    breakPoint6,
    breakPoint7,
    breakPoint8,
    breakPoint10,
} from "../../constants/breakpoints";

export const StatsBoxHeader = styled(Row)`
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

const CalenderBox = styled(Row)`
    background-color: var(--color-purple-0);
    justify-content: flex-start;
    width: 45rem;
    border-radius: 25px;
    padding: 2rem;
    gap: 1rem;
    height: 60%;
    margin-bottom: 2rem;

    @media screen and (${breakPoint6}) {
        width: 43rem;
    }

    @media screen and (${breakPoint7}) {
        width: 38rem;
    }

    @media screen and (${breakPoint8}) {
        width: 40rem;
    }

    @media screen and (${breakPoint8}) {
        width: 35rem;
    }

    @media screen and (${breakPoint10}) {
        display: none;
    }
`;
const ProgressBox = styled(Row)`
    height: 40%;
    background-color: var(--color-purple-0);
    border-radius: 25px;
    padding: 1rem 2rem;

    @media screen and (${breakPoint10}) {
        display: none;
    }
`;

function Stats() {
    return (
        <Row type="vertical">
            <CalenderBox type="vertical">
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
            </CalenderBox>
            <ProgressBox type="vertical">
                <StatsBoxHeader>
                    <Button type="outline">مشاهده همه</Button>
                    <div>
                        <p>میانگین نمرات همه</p>
                    </div>
                </StatsBoxHeader>
                <ProgressList />
            </ProgressBox>
        </Row>
    );
}

export default Stats;
