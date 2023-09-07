import QuizBox from "./QuizBox";
import { list } from "../../data/StatsQuizBoxLinks";

function QuizBoxList() {
    const quizList = list.slice().sort((a, b) => b.active - a.active);
    return quizList.map((quiz, id) => <QuizBox quiz={quiz} key={id} />);
}

export default QuizBoxList;
