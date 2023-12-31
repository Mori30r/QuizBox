import { createSlice } from "@reduxjs/toolkit";
import { differenceInSeconds } from "date-fns";

const initialState = {
    status: "ready", // ready, active, finished
    remainingTime: 0,
    index: 0,
};

const QuizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        startQuiz(state, action) {
            state.status = "active";
            state.remainingTime = differenceInSeconds(
                new Date(action.payload.end),
                new Date(action.payload.start)
            );
        },
        tick(state) {
            state.remainingTime -= 1;
        },
        insertNewAnswer(state, action) {
            // insert Answer into server
            console.log(`${state.index} => ${action.payload.chosenAnswer}`);
        },
        nextQuestion(state) {
            if (state.status === "finish") return;
            state.index += 1;
        },
        finishQuiz(state) {
            state.status = "finish";
        },
    },
});

export const { startQuiz, tick, insertNewAnswer, nextQuestion, finishQuiz } =
    QuizSlice.actions;

export default QuizSlice.reducer;
