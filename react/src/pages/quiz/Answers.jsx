import Heading from "../../ui/Heading";
import CalenderBox from "../../Layout/Stats/Calender/CalenderBox";
import PageIndicator from "./PageIndicator";
import Button from "../../ui/Button";
import SubHeading from "../../ui/SubHeading";
import { quiz } from "../../data/QuizQuestions";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { finishQuiz, nextQuestion } from "./QuizSlice";
import { useNavigate } from "react-router-dom";
import { COURSE_PAGE } from "./../../constants/pagesAddress";

const AnswerBottom = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;

    & button {
        justify-self: flex-start;
    }
`;

function Answers() {
    const { index } = useSelector((store) => store.quiz);
    const question = quiz.questions.at(index);
    const questionsLength = quiz.questions.length;
    const dispatch = useDispatch();
    const isLastQuestion = index === questionsLength - 1;
    const navigate = useNavigate();

    function handleClick() {
        if (isLastQuestion) {
            dispatch(finishQuiz());
            navigate(COURSE_PAGE);
        }
        dispatch(nextQuestion());
    }

    return (
        <>
            <Heading type="white">یکی از گزینه های زیر رو انتخاب کن</Heading>
            <div>
                {question.options.map((option, i) => (
                    <CalenderBox
                        key={i}
                        quiz={{ active: false, name: option.name }}
                    />
                ))}
            </div>
            <AnswerBottom>
                <Button onClick={handleClick} type="outline">
                    {isLastQuestion ? "پایان کوئیز" : "سوال بعدی"}
                </Button>
                <PageIndicator active={index} count={questionsLength} />
                <SubHeading>
                    سوال {index + 1} از {questionsLength}
                </SubHeading>
            </AnswerBottom>
        </>
    );
}

export default Answers;
