import { configureStore } from "@reduxjs/toolkit";
import QuizSlice from "../pages/quiz/QuizSlice";

const quizStore = configureStore({
    reducer: {
        quiz: QuizSlice,
    },
});

export default quizStore;
