import { styled } from "styled-components";

import Row from "../ui/Row";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Heading from "./../ui/Heading";
import SearchBox from "../ui/SearchBar";
import NotificationIcon from "../ui/NotificationIcon";

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

    @media screen and (${breakPoint8}) {
        grid-template-columns: 1fr;
        row-gap: 2rem;
    }
`;

function Home() {
    return (
        <StyledMain type="vertical">
            <MainHeader>
                <NotificationIcon />
                <SearchBox />
            </MainHeader>
            <Card type="big" color="purple">
                <Card.Image image={Boy} />
                <Card.Hint>! به عنوان روح وارد کوئیز شو</Card.Hint>
                <Card.Title>ساختمان داده و الگوریتم ها</Card.Title>
                <Card.Button>ورود به کوئیز</Card.Button>
                <Card.Date>تا ساعت 12:30</Card.Date>
            </Card>
            <MainHeader>
                <Button type="primary">مشاهده همه</Button>
                <Heading type="white">درس های من</Heading>
            </MainHeader>
            <CardsContainer>
                <Card color="green" type="small">
                    <Card.Hint>! پروژه رو یادت نره</Card.Hint>
                    <Card.Title>نظریه گراف</Card.Title>
                    <Card.Capacity>15</Card.Capacity>
                    <Card.Date>امتحان 26 اردیبهشت</Card.Date>
                    <Card.Button type="big">ورود به درس</Card.Button>
                </Card>
                <Card color="red" type="small">
                    <Card.Title>طراحی الگوریتم</Card.Title>
                    <Card.Capacity>28</Card.Capacity>
                    <Card.Date>امتحان 26 اردیبهشت</Card.Date>
                    <Card.Button>ورود به درس</Card.Button>
                </Card>
            </CardsContainer>
        </StyledMain>
    );
}

export default Home;
