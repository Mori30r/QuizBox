import { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Modal from "./../../ui/Modal";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import PageIndicator from "./PageIndicator";
import SubHeading from "../../ui/SubHeading";
import CalenderBox from "../../Layout/Stats/Calender/CalenderBox";

import { toggleModal } from "../../ui/uiSlice";
import { quiz } from "../../data/QuizQuestions";
import { COURSE_PAGE } from "./../../constants/pagesAddress";
import { finishQuiz, insertNewAnswer, nextQuestion } from "./QuizSlice";

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
    const { isModalOpen } = useSelector((store) => store.ui);

    const [chosenAnswer, setChosenAnswer] = useState(null);

    const question = quiz.questions.at(index);
    const questionsLength = quiz.questions.length;
    const isLastQuestion = index === questionsLength - 1;
    const isOptionSelected = typeof chosenAnswer === "number";

    function handleClick() {
        if (!isOptionSelected) dispatch(toggleModal());
        if (isOptionSelected && isLastQuestion) handleFinishQuiz();
        if (isOptionSelected && !isLastQuestion) gotoNextQuestion();
    }

    function handleFinishQuiz() {
        dispatch(finishQuiz());
        navigate(COURSE_PAGE);
    }

    function gotoNextQuestion() {
        dispatch(insertNewAnswer({ chosenAnswer }));
        setChosenAnswer(null);
        dispatch(nextQuestion());
    }

    function chooseOption(i) {
        setChosenAnswer(chosenAnswer === i ? null : i);
    }

    function handleSubmitModal() {
        if (isLastQuestion) handleFinishQuiz();
        gotoNextQuestion();
        dispatch(toggleModal());
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
            <Modal
                isModalOpen={isModalOpen}
                onSubmit={handleSubmitModal}
                message="هنوز گزینه ای رو برای جواب انتخاب نکردی؛ مطمئنی میخوای بری سوال بعدی؟"
                submitText="بله مطمئنم"
                cancelText="میخوام بیشتر فکر کنم"
            />
        </>
    );
}

export default Answers;
