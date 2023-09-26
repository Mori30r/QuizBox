import { HOME_PAGE } from "../../constants/pagesAddress";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
    const navigate = useNavigate();

    const { isLoading, mutate, isError } = useMutation({
        mutationFn: (userInput) => login(userInput),
        onSuccess: () => {
            navigate(HOME_PAGE);
        },
    });

    return { mutate, isLoading, isError };
}
