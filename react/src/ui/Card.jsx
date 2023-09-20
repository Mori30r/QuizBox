import { css, styled, ThemeProvider } from "styled-components";
import Row from "./Row";
import {
    breakPoint1,
    breakPoint5,
    breakPoint6,
    breakPoint9,
    breakPoint12,
} from "./../constants/breakpoints";
import Button from "./Button";

const StyledCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 5rem 1fr 1fr;
    position: relative;
    align-self: center;
    margin-bottom: 2rem;
    box-shadow: ${(props) => `0 0 1rem var(--color-${props.theme.color}-200)`};
    background: ${(props) =>
        `linear-gradient(
            45deg,
            var(--color-${props.theme.color}-400) 0%,
            var(--color-${props.theme.color}-200) 100%
            )`};
    ${(props) =>
        props.theme.type === "small" &&
        css`
            height: 25rem;
            width: 80%;
            justify-content: space-between;
            padding: 2rem;
            @media screen and (${breakPoint6}) {
                height: 24rem;
            }

            @media screen and (${breakPoint12}) {
                width: 100%;
                height: 20rem;
            }
        `}
    ${(props) =>
        props.theme.type === "big" &&
        css`
            height: 25rem;
            padding: 2rem 4rem;
            width: 80%;
            @media screen and (${breakPoint5}) {
                width: 80%;
            }

            @media screen and (${breakPoint12}) {
                width: 100%;
                padding: 1rem 2rem;
            }
        `}
`;

function Card({ type, color, children }) {
    return (
        <ThemeProvider theme={{ type, color }}>
            <StyledCard>{children}</StyledCard>
        </ThemeProvider>
    );
}

const StyledImage = styled.img`
    position: absolute;
    height: 100%;
    top: -10rem;
    left: -2rem;

    @media screen and (${breakPoint1}) {
        top: -9rem;
        left: -3rem;
    }

    @media screen and (${breakPoint5}) {
        top: -8rem;
    }

    @media screen and (${breakPoint9}) {
        height: 90%;
        top: -5rem;
    }

    @media screen and (${breakPoint12}) {
        display: none;
    }
`;

function Image({ image }) {
    return <StyledImage src={image} />;
}

const StyledHint = styled.p`
    color: ${(props) => `var(--color-${props.theme.color}-0)`};
    font-size: 1.4rem;
    font-weight: 500;
    z-index: 1;
    grid-column: 2/3;
    grid-row: 1/2;
`;

function Hint({ children }) {
    return <StyledHint>{children}</StyledHint>;
}

const StyledTitle = styled.p`
    align-self: flex-end;
    justify-self: flex-end;
    grid-column: 2/3;
    grid-row: 2/3;
    color: ${(props) => `var(--color-${props.theme.color}-0)`};
    font-size: ${(props) => (props.theme.type === "big" ? "3rem" : "2.5rem")};
    font-weight: 1000;
    z-index: 1;
    text-shadow: ${(props) =>
        `0 .5rem 1rem var(--color-${props.theme.color}-400)`};

    @media screen and (${breakPoint5}) {
        font-size: 3rem;
    }

    @media screen and (${breakPoint6}) {
        font-size: ${(props) =>
            props.theme.type === "big" ? "3.5rem" : "2.3rem"};
    }

    @media screen and (${breakPoint12}) {
        grid-column: 1 / 3;
    }
`;

function Title({ children }) {
    return <StyledTitle>{children}</StyledTitle>;
}

const StyledDate = styled.span`
    color: ${(props) => `var(--color-${props.theme.color}-0)`};
    font-size: 1.4rem;
    text-decoration: underline dotted;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    align-self: flex-end;
    justify-self: flex-end;
`;

function Date({ children }) {
    return <StyledDate>{children}</StyledDate>;
}

const StyledCapacity = styled(Row)`
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    justify-self: flex-start;
`;

const CapacityNumber = styled.p`
    background-color: var(--color-grey-0);
    text-align: center;
    border-radius: 12px;
    font-size: 3rem;
    font-weight: 1000;
    padding: 3rem;

    @media screen and (${breakPoint12}) {
        padding: 2rem;
    }
`;

function Capacity({ children }) {
    return (
        <StyledCapacity type="vertical">
            <CapacityNumber>{children}</CapacityNumber>
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

const ButtonContainer = styled.div`
    grid-column: 1/3;
    grid-row: 3 / 4;
    align-self: flex-end;
    justify-self: flex-start;
`;

function CardButton({ children }) {
    return (
        <ButtonContainer>
            <Button type="big">{children}</Button>
        </ButtonContainer>
    );
}

Card.Button = CardButton;
Card.Capacity = Capacity;
Card.Title = Title;
Card.Image = Image;
Card.Hint = Hint;
Card.Date = Date;

export default Card;
