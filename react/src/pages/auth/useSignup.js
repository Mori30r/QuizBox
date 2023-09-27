import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { signup } from "../../services/apiAuth";
import { LOGIN_PAGE } from "./../../constants/pagesAddress";

export function useSignup() {
    const navigate = useNavigate();

    const { isLoading, mutate, isError } = useMutation({
        mutationFn: (userInput) => signup(userInput),
        onSuccess: () => {
            navigate(LOGIN_PAGE);
        },
    });

    return { mutate, isLoading, isError };
}
