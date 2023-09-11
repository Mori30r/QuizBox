import { styled } from "styled-components";
import Row from "./Row";
import Button from "./Button";

const StyledCard = styled.div`
    position: relative;
    width: ${(props) => (props.type === "big" ? "65rem" : "50rem")};
    height: 25rem;
    padding: 2rem 4rem;
    align-self: center;
    background: ${(props) =>
        `linear-gradient(
            45deg,
            var(--color-${props.color}-400) 0%,
            var(--color-${props.color}-200) 100%
        )`};
    box-shadow: ${(props) => `0 0 1rem var(--color-${props.color}-400)`};
`;

const CardImage = styled.img`
    position: absolute;
    height: 23rem;
    top: -7rem;
    left: -2rem;
`;

const CardDetails = styled(Row)`
    & p:nth-child(1) {
        color: ${(props) => `var(--color-${props.color}-0)`};
        font-size: 1.4rem;
        font-weight: 500;
    }

    & p:nth-child(2) {
        align-self: flex-end;
        color: ${(props) => `var(--color-${props.color}-0)`};
        width: 50%;
        font-size: 3rem;
        font-weight: 1000;
    }

    & div p:nth-child(2) {
        color: ${(props) => `var(--color-${props.color}-0)`};
        font-size: 1.4rem;
        text-decoration: underline dotted;
        align-self: center;
    }
`;

const BottomCard = styled(Row)`
    justify-self: end;
`;

function Card({ type, image, color }) {
    return (
        <StyledCard type={type} color={color}>
            {type === "big" ? (
                <>
                    <CardImage src={image} />
                    <CardDetails type="vertical" color={color}>
                        <p>! به عنوان روح وارد کوئیز شو</p>
                        <p>ساختمان داده و الگوریتم ها</p>
                        <BottomCard>
                            <Button type="big">ورود به کوئیز</Button>
                            <p>تا ساعت 12:30</p>
                        </BottomCard>
                    </CardDetails>
                </>
            ) : (
                <>
                    <Capacity />
                    <CardDetails type="vertical" color={color}>
                        <p>! پروژه رو یادت نره</p>
                        <p>ساختمان داده و الگوریتم ها</p>
                        <BottomCard>
                            <Button type="big">ورود به درس</Button>
                            <p>
                                <span>امتحان: </span>
                                <span>26 اردیبهشت </span>
                                <span>ساعت 12:30</span>
                            </p>
                        </BottomCard>
                    </CardDetails>
                </>
            )}
        </StyledCard>
    );
}

const StyledCapacity = styled(Row)`
    position: absolute;
    align-items: center;
    justify-content: space-between;
    top: 0;
    left: 0;
    height: 70%;
    width: 50%;
    padding: 2rem;
`;

const CapacityNumber = styled.p`
    background-color: var(--color-grey-0);
    text-align: center;
    width: 10rem;
    height: 10rem;
    border-radius: 12px;
    font-size: 3rem;
    font-weight: 1000;
    padding: 3rem;
`;

function Capacity() {
    return (
        <StyledCapacity type="vertical">
            <CapacityNumber>32</CapacityNumber>
            <p style={{ color: "var(--color-purple-0)" }}>ثبت نام کرده</p>
        </StyledCapacity>
    );
}

export default Card;
