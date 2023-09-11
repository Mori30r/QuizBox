import { styled } from "styled-components";
import { StatsBoxHeader } from "./Stats/Stats";

import Row from "../ui/Row";
import Button from "./../ui/Button";
import Card from "../ui/Card";
import SearchBox from "../ui/SearchBar";
import NotificationIcon from "./../ui/NotificationIcon";

import Boy from "../assets/images/boy.png";

const StyledMain = styled(Row)`
    justify-content: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 98dvh;
    background-color: var(--color-purple-100);
    border-radius: 25px;
    margin: 1rem;
    padding: 4rem 6rem;
    box-shadow: 0 0 1rem var(--color-grey-400);
`;

const MainHeader = styled(Row)`
    margin-bottom: 8rem;
`;

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
`;

function Main() {
    return (
        <StyledMain type="vertical">
            <MainHeader>
                <NotificationIcon />
                <SearchBox />
            </MainHeader>
            <Card type="big" image={Boy} color="purple" />
            <StatsBoxHeader>
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
            </StatsBoxHeader>
            <CardsContainer>
                <Card color="green" type="small" />
                <Card color="red" type="small" />
            </CardsContainer>
        </StyledMain>
    );
}

export default Main;
