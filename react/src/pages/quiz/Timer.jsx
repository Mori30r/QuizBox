import { useEffect } from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { tick, finishQuiz } from "./QuizSlice";
import { getFormattedDuration } from "../../utils/getFormattedDuration";

const StyledTimer = styled.p`
    align-self: center;
    font-size: 2rem;
    background-color: var(--color-purple-500);
    padding: 0.5rem 2rem;
    border-radius: 6px;
`;

function Timer() {
    const dispatch = useDispatch();
    const { remainingTime } = useSelector((store) => store.quiz);
    const formatedDuration = getFormattedDuration(remainingTime);

    useEffect(
        function () {
            if (remainingTime === 0) dispatch(finishQuiz());
            else {
                const interval = setInterval(function () {
                    dispatch(tick());
                }, 1000);

                return () => clearInterval(interval);
            }
        },
        [dispatch, remainingTime]
    );

    return <StyledTimer>{formatedDuration}</StyledTimer>;
}

export default Timer;
