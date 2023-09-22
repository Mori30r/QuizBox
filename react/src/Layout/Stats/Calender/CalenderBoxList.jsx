import CalenderBox from "./CalenderBox";
import { list } from "../../../data/StatsQuizBoxLinks";

function QuizBoxList() {
    let quizList = list.slice().sort((a, b) => b.active - a.active);
    quizList = quizList.slice(0, 3);
    return (
        <div>
            {quizList.map((quiz, id) => (
                <CalenderBox quiz={quiz} key={id} />
            ))}
            ;
        </div>
    );
}

export default QuizBoxList;
