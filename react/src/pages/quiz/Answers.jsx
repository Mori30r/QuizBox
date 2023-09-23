import Heading from "../../ui/Heading";
import CalenderBox from "../../Layout/Stats/Calender/CalenderBox";
import PageIndicator from "./PageIndicator";
import Button from "../../ui/Button";
import SubHeading from "../../ui/SubHeading";
import { quiz } from "../../data/QuizQuestions";
import { styled } from "styled-components";
import { intervalToDuration } from "date-fns";

const AnswerBottom = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;

    & button {
        justify-self: flex-start;
    }
`;

console.log(
    intervalToDuration({
        start: new Date(quiz.start),
        end: new Date(quiz.end),
    })
);

console.log(new Date(quiz.start));

function Answers() {
    return (
        <>
            <Heading type="white">یکی از گزینه های زیر رو انتخاب کن</Heading>
            <div>
                <CalenderBox quiz={{ active: false, name: "گزینه اول" }} />
                <CalenderBox quiz={{ active: false, name: "گزینه دوم" }} />
                <CalenderBox quiz={{ active: false, name: "گزینه سوم" }} />
                <CalenderBox quiz={{ active: false, name: "گزینه چهارم" }} />
            </div>
            <AnswerBottom>
                <Button type="outline">سوال بعدی</Button>
                <PageIndicator />
                <SubHeading>سوال 3 از 10</SubHeading>
            </AnswerBottom>
        </>
    );
}

export default Answers;
