import { baseApiAddress } from "./../constants/baseApi";
import { setSession } from "./../helpers/session";

export async function login(userInputs) {
    try {
        const data = await fetch(`${baseApiAddress}/auth/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInputs),
        });
        const newData = await data.json();
        setSession("accessToken", newData.tokens.access);
    } catch (err) {
        throw new Error(err.message);
    }
}

export async function signup(userInputs) {
    try {
        const data = await fetch(`${baseApiAddress}/auth/signup/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInputs),
        });
        const newData = await data.json();
        console.log(newData);
        // setSession("accessToken", newData.tokens.access);
    } catch (err) {
        throw new Error(err.message);
    }
}
