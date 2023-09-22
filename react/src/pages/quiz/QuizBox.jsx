import { styled } from "styled-components";

const QuizBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    background-color: ${(props) => props.color};
    height: 97dvh;
    border-radius: 2.5rem;
    padding: 3rem;
`;

export default QuizBox;
