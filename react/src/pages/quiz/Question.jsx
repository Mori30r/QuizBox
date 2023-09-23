import { styled } from "styled-components";

import Heading from "../../ui/Heading";
import Timer from "./Timer";
import { quiz } from "../../data/QuizQuestions";
import { useSelector } from "react-redux";

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
    const { index } = useSelector((store) => store.quiz);
    const question = quiz.questions.at(index);
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
            <Timer />
        </>
    );
}

export default Question;
