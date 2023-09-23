import { createSlice } from "@reduxjs/toolkit";
import { differenceInSeconds } from "date-fns";

const initialState = {
    status: "ready", // ready, active, finished
    remainingTime: 0,
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
        insertNewAnswer(action) {
            // insert Answer into server
        },
        finishQuiz(state) {
            state.status = "finish";
        },
    },
});

export const { startQuiz, tick, insertNewAnswer, finishQuiz } =
    QuizSlice.actions;

export default QuizSlice.reducer;
