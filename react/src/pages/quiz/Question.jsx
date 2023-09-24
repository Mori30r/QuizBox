import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Heading from "../../ui/Heading";
import Timer from "../../ui/Timer";
import { finishQuiz } from "./QuizSlice";
import { quiz } from "../../data/QuizQuestions";

const StyledQuestion = styled.p`
    line-height: 3.5rem;
    font-size: 1.7rem;
    font-weight: 700;
    direction: rtl;
    text-align: justify;
    color: var(--color-purple-500);
    padding: 2rem 4rem;
    background-color: var(--color-purple-0);
    border-radius: 25px;
    margin-top: 2rem;
`;

function Question() {
    const { remainingTime, index } = useSelector((store) => store.quiz);
    const question = quiz.questions.at(index);
    const dispatch = useDispatch();

    function timerCallback() {
        dispatch(finishQuiz());
    }

    return (
        <>
            <Heading
                type="white"
                style={{
                    borderBottom: "3px solid var(--color-purple-500)",
                }}
            >
                {quiz.course}
            </Heading>
            <div>
                <h1 color="var(--color-purple-0)">{index + 1} سوال</h1>
                <StyledQuestion>{question.title}</StyledQuestion>
            </div>
            <Timer duration={remainingTime} callback={timerCallback} />
        </>
    );
}

export default Question;
