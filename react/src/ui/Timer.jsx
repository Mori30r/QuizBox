import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { getFormattedDuration } from "../utils/getFormattedDuration";

const StyledTimer = styled.p`
    align-self: center;
    text-align: center;
    font-size: 2rem;
    background-color: var(--color-purple-500);
    padding: 0.5rem 2rem;
    border-radius: 6px;
    width: 12rem;
`;

function Timer({ duration, callback }) {
    // initial duration is 0, so 100 is to not trigger callback at first
    const [remainingTime, setRemainingTime] = useState(100);

    useEffect(
        function () {
            setRemainingTime(duration);
        },
        [duration]
    );

    useEffect(
        function () {
            if (remainingTime === 0) callback();
            const interval = setInterval(function () {
                setRemainingTime((remainingTime) => (remainingTime -= 1));
            }, 1000);
            return () => clearInterval(interval);
        },
        [duration, callback, remainingTime]
    );

    const formattedDuration = getFormattedDuration(remainingTime);

    return <StyledTimer>{formattedDuration}</StyledTimer>;
}

export default Timer;
