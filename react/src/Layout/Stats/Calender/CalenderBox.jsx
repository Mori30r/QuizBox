import { styled } from "styled-components";
import Row from "../../../ui/Row";
import { breakPoint6, breakPoint9 } from "../../../constants/breakpoints";

const Quiz = styled.div`
    cursor: pointer;
    display: grid;
    grid-template-columns: 4fr 1fr;
    align-items: center;
    align-self: center;
    width: 43rem;
    height: 9rem;
    border-radius: 25px;
    transition: all 0.2s;
    transform: ${(props) => props.$active && "translateX(-1rem)"};
    background-color: ${(props) =>
        props.$active ? `var(--color-green-200)` : `var(--color-purple-200)`};
    box-shadow: 0 0 1rem
        ${(props) =>
            props.$active
                ? `var(--color-green-200)`
                : `var(--color-purple-200)`};
`;

const CircleInQuiz = styled.div`
    justify-self: center;
    position: relative;
    width: 5rem;
    height: 5rem;
    background-color: var(--color-purple-0);
    border-radius: 100%;

    @media screen and (${breakPoint9}) {
        margin-right: 1rem;
    }

    &::before {
        content: "";
        display: flex;
        color: var(--color-purple-0);
        font-size: 1.5rem;
        font-weight: 1000;
        align-items: center;
        justify-content: center;
        width: 3.8rem;
        height: 3.8rem;
        position: absolute;
        transition: all 0.2s;
        background-color: ${(props) =>
            props.$active
                ? `var(--color-green-200)`
                : `var(--color-purple-200)`};
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 100%;
    }
`;

const QuizDetails = styled.span`
    margin-right: 1rem;
`;

const QuizName = styled.p`
    font-weight: 1000;
    color: ${(props) =>
        props.$active ? `var(--color-green-0)` : `var(--color-purple-0)`};
    font-size: 2.3rem;

    @media screen and (${breakPoint9}) {
        font-size: 2rem;
    }
`;
const QuizTeacher = styled.p`
    font-weight: 500;
    color: ${(props) =>
        props.$active ? `var(--color-green-0)` : `var(--color-purple-0)`};
    font-size: 1.3rem;
`;

const QuizTime = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-left: 0.5rem;
    margin-left: 1rem;
    height: 8rem;
    width: 6rem;
    border-left: solid var(--color-purple-200) 0.5rem;
    border-radius: 1rem;
    color: var(--color-purple-200);
    font-weight: 400;
    font-size: 1.3rem;

    @media screen and (${breakPoint6}) {
        width: 6rem;
    }
`;

const StyledQuizBox = styled(Row)`
    margin-bottom: 2rem;
`;

const OnlineQuizText = styled.p`
    font-weight: 1000;
    animation: onlineText 1s infinite ease;

    @keyframes onlineText {
        0% {
            color: var(--color-green-200);
        }
        50% {
            color: var(--color-purple-400);
        }
        100% {
            color: var(--color-green-200);
        }
    }
`;

function QuizBox({ quiz = {}, onClick }) {
    const { active, name, teacher, start, end } = quiz;
    return (
        <StyledQuizBox onClick={onClick}>
            <Quiz $active={active}>
                <QuizDetails>
                    <QuizName $active={active}>{name}</QuizName>
                    <QuizTeacher $active={active}>{teacher}</QuizTeacher>
                </QuizDetails>
                <CircleInQuiz $active={active} />
            </Quiz>
            {/* "teacher" condition make this component reUsable in quiz page */}
            {!active && teacher ? (
                <QuizTime>
                    <p>{start}</p>
                    <p>{end}</p>
                </QuizTime>
            ) : (
                teacher && <OnlineQuizText>در حال برگزاری</OnlineQuizText>
            )}
        </StyledQuizBox>
    );
}

export default QuizBox;
