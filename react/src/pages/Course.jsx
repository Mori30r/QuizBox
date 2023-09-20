import { styled } from "styled-components";
import { HiEllipsisHorizontal } from "react-icons/hi2";

import Row from "../ui/Row";
import Tag from "../ui/Tag";
import Card from "../ui/Card";
import Header from "../ui/Header";
import Heading from "./../ui/Heading";
import SubHeading from "./../ui/SubHeading";
import MainSection from "./../ui/MainSection";
import HeaderWithBack from "./../ui/HeaderWithBack";

import GirlWriting from "../assets/images/girl-writing.png";
import { studentList } from "./../data/CourseStudents";
import ProfileImage from "./../ui/ProfileImage";
import Profile from "./../assets/images/profile.png";

function Course() {
    return (
        <MainSection type="vertical">
            <HeaderWithBack>
                <Heading type="white">ساختمان داده و الگوریتم</Heading>
                <SubHeading type="white">استاد جواد جوادی</SubHeading>
            </HeaderWithBack>
            <Card type="big" color="purple">
                <Card.Image image={GirlWriting} />
                <Card.Title>کوئیز شروع شده</Card.Title>
                <Card.Button>ورود به کوئیز</Card.Button>
                <Card.Date>تا ساعت 12:30</Card.Date>
            </Card>
            <Header one>
                <Heading type="white">پروژه و تمرین ها</Heading>
            </Header>
            <Table />
            <Header one>
                <Heading type="white">دانشجویان</Heading>
            </Header>
            <Students />
        </MainSection>
    );
}

const StyledTable = styled.div`
    margin-bottom: 2rem;
    background-color: color-mix(
        in srgb,
        var(--color-purple-0),
        transparent 50%
    );
`;

const TableRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 3fr 3fr 5fr;
    justify-items: self-end;

    & p:last-child {
        padding-right: 2rem;
    }
`;

const TableHeader = styled(TableRow)`
    background-color: var(--color-purple-0);

    & p {
        font-size: 1.5rem;
        font-weight: 600;
        padding: 2rem 0.5rem;
        color: var(--color-grey-500);
    }
`;

const TableBody = styled(TableRow)`
    & p:nth-child(5) {
        font-size: 1.5rem;
        font-weight: 500;
        color: var(--color-grey-400);
    }

    & p {
        padding: 2rem 0;
    }
`;

const MenuIcon = styled(HiEllipsisHorizontal)`
    justify-self: center;
    align-self: center;
`;

function Table() {
    return (
        <StyledTable>
            <TableHeader>
                <p></p>
                <p>نمره</p>
                <p>مهلت</p>
                <p>وضعیت</p>
                <p>پروژه</p>
            </TableHeader>
            <TableBody>
                <MenuIcon size={20} />
                <Tag type="green">نمره</Tag>
                <Tag type="red">مهلت</Tag>
                <Tag type="orange">وضعیت</Tag>
                <p>پروژه</p>
            </TableBody>
            <TableBody>
                <MenuIcon size={20} />
                <Tag type="green">نمره</Tag>
                <Tag type="orange">مهلت</Tag>
                <Tag type="grey">وضعیت</Tag>
                <p>پروژه</p>
            </TableBody>
            <TableBody>
                <MenuIcon size={20} />
                <Tag type="orange">نمره</Tag>
                <Tag type="red">مهلت</Tag>
                <Tag type="grey">وضعیت</Tag>
                <p>پروژه</p>
            </TableBody>
        </StyledTable>
    );
}

const StudentProfileContainer = styled(Row)`
    align-items: center;
`;

function Students() {
    return (
        <Row>
            {studentList.map((student) => (
                <StudentProfileContainer type="vertical" key={student.name}>
                    <ProfileImage src={Profile} />
                    <SubHeading type="white">{student.name}</SubHeading>
                </StudentProfileContainer>
            ))}
        </Row>
    );
}

export default Course;
