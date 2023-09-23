import { styled } from "styled-components";
import { useDispatch } from "react-redux";

import QuizBox from "./QuizBox";
import Question from "./Question";
import Answers from "./Answers";

import { useEffect } from "react";
import { startQuiz } from "./QuizSlice";
import { quiz } from "../../data/QuizQuestions";

const StyledQuiz = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    padding: 1rem 2rem;
    background-color: var(--color-purple-0);
    color: var(--color-purple-0);
`;

function Quiz() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startQuiz({ start: quiz.start, end: quiz.end }));
    }, [dispatch]);
    return (
        <StyledQuiz>
            <QuizBox color="var(--color-purple-500)">
                <Answers />
            </QuizBox>
            <QuizBox color="var(--color-purple-200)">
                <Question />
            </QuizBox>
        </StyledQuiz>
    );
}

export default Quiz;
