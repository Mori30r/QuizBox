import Heading from "../../ui/Heading";
import CalenderBox from "../../Layout/Stats/Calender/CalenderBox";
import PageIndicator from "./PageIndicator";
import Button from "../../ui/Button";
import SubHeading from "../../ui/SubHeading";
import { quiz } from "../../data/QuizQuestions";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { finishQuiz, insertNewAnswer, nextQuestion } from "./QuizSlice";
import { useNavigate } from "react-router-dom";
import { COURSE_PAGE } from "./../../constants/pagesAddress";
import { useState } from "react";

const AnswerBottom = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;

    & button {
        justify-self: flex-start;
    }
`;

function Answers() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { index } = useSelector((store) => store.quiz);
    const [chosenAnswer, setChosenAnswer] = useState(null);

    const question = quiz.questions.at(index);
    const questionsLength = quiz.questions.length;
    const isLastQuestion = index === questionsLength - 1;

    function handleClick() {
        if (isLastQuestion) {
            dispatch(finishQuiz());
            navigate(COURSE_PAGE);
        }
        dispatch(insertNewAnswer({ chosenAnswer }));
        setChosenAnswer(null);
        dispatch(nextQuestion());
    }

    function chooseOption(i) {
        setChosenAnswer(chosenAnswer === i ? null : i);
    }

    return (
        <>
            <Heading type="white">یکی از گزینه های زیر رو انتخاب کن</Heading>
            <div>
                {question.options.map((option, i) => (
                    <CalenderBox
                        key={i}
                        onClick={() => chooseOption(i)}
                        quiz={{ active: chosenAnswer === i, name: option.name }}
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
