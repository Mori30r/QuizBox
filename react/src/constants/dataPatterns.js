import * as yup from "yup";

const username = yup.string().required().min(3);
const email = yup.string().email().required();
const password = yup.string().required().min(5);

export const signUpSchema = yup.object({
    username,
    email,
    password,
});

export const loginSchema = yup.object({
    username,
    password,
});
