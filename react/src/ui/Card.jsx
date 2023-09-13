import { css, styled } from "styled-components";
import Row from "./Row";
import Button from "./Button";
import {
    breakPoint1,
    breakPoint11,
    breakPoint5,
    breakPoint6,
    breakPoint9,
} from "./../constants/breakpoints";

const StyledCard = styled.div`
    position: relative;
    align-self: center;
    box-shadow: ${(props) => `0 0 1rem var(--color-${props.color}-200)`};
    background: ${(props) =>
        `linear-gradient(
            45deg,
            var(--color-${props.color}-400) 0%,
            var(--color-${props.color}-200) 100%
            )`};
    ${(props) =>
        props.type === "small" &&
        css`
            display: flex;
            height: 27rem;
            justify-content: space-between;
            padding: 2rem;
            width: 80%;
            @media screen and (${breakPoint6}) {
                width: 90%;
                height: 24rem;
            }

            @media screen and (${breakPoint11}) {
                width: 100%;
            }
        `}
    ${(props) =>
        props.type === "big" &&
        css`
            height: 30rem;
            padding: 2rem 4rem;
            width: 80%;
            @media screen and (${breakPoint5}) {
                width: 90%;
                height: 30rem;
            }

            @media screen and (${breakPoint11}) {
                width: 100%;
                padding: 1rem 2rem;
            }
        `}
`;

const CardImage = styled.img`
    position: absolute;
    height: 100%;
    top: -7rem;
    left: -2rem;

    @media screen and (${breakPoint1}) {
        top: -5rem;
        left: -3rem;
    }

    @media screen and (${breakPoint5}) {
        top: -7rem;
    }

    @media screen and (${breakPoint9}) {
        height: 90%;
        top: -5rem;
    }

    @media screen and (${breakPoint11}) {
        display: none;
    }
`;

const Hint = styled.p`
    color: ${(props) => `var(--color-${props.color}-0)`};
    font-size: 1.4rem;
    font-weight: 500;
    z-index: 1;
`;

const CourseName = styled.p`
    align-self: flex-end;
    color: ${(props) => `var(--color-${props.color}-0)`};
    width: 70%;
    font-size: ${(props) => (props.type === "big" ? "3rem" : "2.5rem")};
    font-weight: 1000;
    z-index: 1;
    text-shadow: ${(props) => `0 .5rem 1rem var(--color-${props.color}-400)`};
    overflow: hidden;

    @media screen and (${breakPoint5}) {
        width: 80%;
        font-size: 3rem;
    }

    @media screen and (${breakPoint6}) {
        width: 60%;
        font-size: ${(props) => (props.type === "big" ? "3.5rem" : "2.3rem")};
    }

    @media screen and (${breakPoint11}) {
        width: 100%;
    }
`;

const QuizDate = styled.span`
    color: ${(props) => `var(--color-${props.color}-0)`};
    font-size: 1.4rem;
    text-decoration: underline dotted;
    align-self: center;
`;

const CardTexts = styled(Row)`
    gap: 2rem;
    width: 100%;
`;

const CardButtons = styled(Row)`
    width: 70%;
    align-items: center;
`;

function Card({ type, image, color }) {
    return (
        <StyledCard type={type} color={color}>
            {type === "big" ? (
                <>
                    <CardImage src={image} />
                    <Row type="vertical">
                        <Hint color={color}>! به عنوان روح وارد کوئیز شو</Hint>
                        <CourseName type={type} color={color}>
                            ساختمان داده و الگوریتم ها
                        </CourseName>
                        <Row>
                            <Button type="big">ورود به کوئیز</Button>
                            <QuizDate color={color}>تا ساعت 12:30</QuizDate>
                        </Row>
                    </Row>
                </>
            ) : (
                <>
                    <CardButtons type="vertical">
                        <Capacity />
                        <Button type="big">ورود به درس</Button>
                    </CardButtons>
                    <CardTexts type="vertical">
                        <Hint color={color}>! پروژه رو یادت نره</Hint>
                        <CourseName color={color}>
                            ساختمان داده و الگوریتم ها
                        </CourseName>
                        <p>
                            <QuizDate color={color}>
                                امتحان 26 اردیبهشت
                            </QuizDate>
                        </p>
                    </CardTexts>
                </>
            )}
        </StyledCard>
    );
}

const StyledCapacity = styled(Row)`
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
`;

const CapacityNumber = styled.p`
    background-color: var(--color-grey-0);
    text-align: center;
    border-radius: 12px;
    font-size: 3rem;
    font-weight: 1000;
    padding: 3rem;
`;

function Capacity() {
    return (
        <StyledCapacity type="vertical">
            <CapacityNumber>32</CapacityNumber>
            <p
                style={{
                    color: "var(--color-purple-0)",
                    fontSize: "1.3rem",
                }}
            >
                ثبت نام کرده
            </p>
        </StyledCapacity>
    );
}

export default Card;
