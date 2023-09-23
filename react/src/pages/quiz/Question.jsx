import { styled } from "styled-components";

import Heading from "../../ui/Heading";
import Timer from "./Timer";

const StyledQuestion = styled.p`
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

function Question() {
    return (
        <>
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
                <StyledQuestion>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                    آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                    راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                    حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                    موجود طراحی اساسا مورد استفاده قرار گیرد.
                </StyledQuestion>
            </div>
            <Timer />
        </>
    );
}

export default Question;
