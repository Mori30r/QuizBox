import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../ui/uiSlice";
import quizReducer from "../pages/quiz/QuizSlice";

const store = configureStore({
    reducer: {
        ui: uiReducer,
        quiz: quizReducer,
    },
});

export default store;
