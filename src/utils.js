import store from "./redux/store"

export function verifiedAccount() {
    const account = store.getState().source?.account || {}
    console.log(account.username === process.env.REACT_APP_USERNAME, account.password === process.env.REACT_APP_PASSWORD);
    console.log(account.username, process.env.REACT_APP_USERNAME);
    console.log(account.password, process.env.REACT_APP_PASSWORD);
    return account.username === process.env.REACT_APP_USERNAME && account.password === process.env.REACT_APP_PASSWORD
}

export function setLocalStorage(name, value) {
    return localStorage.setItem(name, JSON.stringify(value))
}
export function getLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name))
}