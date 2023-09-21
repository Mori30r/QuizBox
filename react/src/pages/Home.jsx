import Card from "../ui/Card";
import Button from "../ui/Button";
import Header from "./../ui/Header";
import Heading from "./../ui/Heading";
import SearchBox from "../ui/SearchBar";
import MainSection from "../ui/MainSection";
import CardsContainer from "./../ui/CardsContainer";
import NotificationIcon from "../ui/NotificationIcon";

import Boy from "../assets/images/boy.png";

function Home() {
    return (
        <MainSection type="vertical">
            <Header>
                <NotificationIcon />
                <SearchBox />
            </Header>
            <Card type="big" color="purple">
                <Card.Image image={Boy} />
                <Card.Hint>! به عنوان روح وارد کوئیز شو</Card.Hint>
                <Card.Title>ساختمان داده و الگوریتم ها</Card.Title>
                <Card.Button>ورود به کوئیز</Card.Button>
                <Card.Date>تا ساعت 12:30</Card.Date>
            </Card>
            <Header>
                <Button type="primary">مشاهده همه</Button>
                <Heading type="white">درس های من</Heading>
            </Header>
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
        </MainSection>
    );
}

export default Home;
