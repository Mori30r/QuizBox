import { styled } from "styled-components";

import Row from "../ui/Row";
import Button from "./../ui/Button";
import Card from "../ui/Card";
import SearchBox from "../ui/SearchBar";
import NotificationIcon from "./../ui/NotificationIcon";

import Boy from "../assets/images/boy.png";
import { breakPoint11, breakPoint8 } from "../constants/breakpoints";

const StyledMain = styled(Row)`
    overflow-y: auto;
    background-color: var(--color-purple-100);
    border-radius: 6px;
    padding: 4rem 6rem;
    box-shadow: 0 0 1rem var(--color-grey-400);
    margin: 0 2rem;
    flex: 1;

    @media screen and (${breakPoint11}) {
        margin: 0;
        padding: 3rem 1.5rem;
    }
`;

const MainHeader = styled(Row)`
    margin: 2rem 0;
`;

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    justify-items: center;

    // to make cards one col
    @media screen and (${breakPoint8}) {
        grid-template-columns: 1fr;
        row-gap: 2rem;
    }
`;

function Main() {
    return (
        <StyledMain type="vertical">
            <MainHeader>
                <NotificationIcon />
                <SearchBox />
            </MainHeader>
            <Card type="big" image={Boy} color="purple" />
            <MainHeader>
                <Button type="primary">مشاهده همه</Button>
                <div>
                    <p
                        style={{
                            color: "var(--color-grey-0)",
                            fontSize: "3.5rem",
                        }}
                    >
                        درس های من
                    </p>
                </div>
            </MainHeader>
            <CardsContainer>
                <Card color="green" type="small" />
                <Card color="red" type="small" />
            </CardsContainer>
        </StyledMain>
    );
}

export default Main;
