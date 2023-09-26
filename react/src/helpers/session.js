export function setSession(key, value) {
    sessionStorage.setItem(key, value);
}

export function getSession(key, value) {
    sessionStorage.getItem(key, value);
}
