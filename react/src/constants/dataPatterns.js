import * as yup from "yup";

const requiredMessage = "این فیلد حتما باید پر بشه";
const minMessage = (min) => `تعداد کاراکتر حداقل باید ${min} تا باشد `;
const emailMessage = "لطفا یک ایمیل معتبر وارد کن";
const matchMessage = "رمز وارد شده با رمز عبور یکسان نیست";

const first_name = yup.string().required(requiredMessage).min(3, minMessage(3));
const last_name = yup.string().required(requiredMessage).min(3, minMessage(3));
const email = yup.string().email(emailMessage).required(requiredMessage);
const password = yup.string().required(requiredMessage).min(5, minMessage(5));
const password2 = yup
    .string()
    .required(requiredMessage)
    .min(5, minMessage(5))
    .oneOf([yup.ref("password"), null], matchMessage);

export const signUpSchema = yup.object({
    first_name,
    last_name,
    email,
    password,
    password2,
});

export const loginSchema = yup.object({
    email,
    password,
});
