import { styled } from "styled-components";
import QuizBox from "./QuizBox";
import Heading from "./../../ui/Heading";
import CalenderBox from "../../Layout/Stats/Calender/CalenderBox";
import PageIndicator from "./PageIndicator";
import Button from "./../../ui/Button";
import SubHeading from "./../../ui/SubHeading";

const StyledQuiz = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    padding: 1rem 2rem;
    background-color: var(--color-purple-0);
    color: var(--color-purple-0);
`;

const Question = styled.p`
    line-height: 3.5rem;
    font-size: 1.7rem;
    font-weight: 700;
    direction: rtl;
    text-align: justify;
    color: var(--color-purple-500);
    padding: 2rem 4rem;
    background-color: var(--color-purple-0);
    border-radius: 25px;
    margin-top: 2rem;
`;

const Timer = styled.p`
    align-self: center;
    font-size: 2rem;
    background-color: var(--color-purple-500);
    padding: 0.5rem 2rem;
    border-radius: 6px;
`;

const AnswerBottom = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;

    & button {
        justify-self: flex-start;
    }
`;

function Quiz() {
    return (
        <StyledQuiz>
            <QuizBox color="var(--color-purple-500)">
                <Heading type="white">
                    یکی از گزینه های زیر رو انتخاب کن
                </Heading>
                <div>
                    <CalenderBox quiz={{ active: false, name: "گزینه اول" }} />
                    <CalenderBox quiz={{ active: false, name: "گزینه دوم" }} />
                    <CalenderBox quiz={{ active: false, name: "گزینه سوم" }} />
                    <CalenderBox
                        quiz={{ active: false, name: "گزینه چهارم" }}
                    />
                </div>
                <AnswerBottom>
                    <Button type="outline">سوال بعدی</Button>
                    <PageIndicator />
                    <SubHeading>سوال 3 از 10</SubHeading>
                </AnswerBottom>
            </QuizBox>
            <QuizBox color="var(--color-purple-200)">
                <Heading
                    type="white"
                    style={{
                        borderBottom: "3px solid var(--color-purple-500)",
                    }}
                >
                    درس ساختمان داده ها و الگوریتم
                </Heading>
                <div>
                    <h1 color="var(--color-purple-0)">سوال سوم</h1>
                    <Question>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                        برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                        هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت
                        و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
                        متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                        برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
                        پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
                        داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط
                        سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
                        دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
                        طراحی اساسا مورد استفاده قرار گیرد.
                    </Question>
                </div>
                <Timer>01 : 12 : 23</Timer>
            </QuizBox>
        </StyledQuiz>
    );
}

export default Quiz;
