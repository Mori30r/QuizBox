import { styled } from "styled-components";

import Row from "../ui/Row";
import Card from "../ui/Card";
import Table from "../ui/Table";
import Header from "../ui/Header";
import Heading from "./../ui/Heading";
import SubHeading from "./../ui/SubHeading";
import MainSection from "./../ui/MainSection";
import HeaderWithBack from "./../ui/HeaderWithBack";

import GirlWriting from "../assets/images/girl-writing.png";
import { studentList } from "./../data/CourseStudents";
import { list } from "../data/CourseProjects";
import ProfileImage from "./../ui/ProfileImage";
import Profile from "./../assets/images/profile.png";
import Button from "../ui/Button";

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
            <Table
                headerList={["", "نمره", "مهلت", "وضعیت", "پروژه"]}
                data={list}
            />
            <Header>
                <Button type="primary">مشاهده همه</Button>
                <Heading type="white">دانشجویان</Heading>
            </Header>
            <Students />
        </MainSection>
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
