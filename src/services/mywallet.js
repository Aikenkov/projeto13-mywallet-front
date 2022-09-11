import axios from "axios";

const baseURL = "http://localhost:5000";

function createHeaders() {
    const auth = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${auth}`,
        },
    };
    return config;
}

function signUp(body) {
    const promise = axios.post(`${baseURL}/signUp`, body);
    return promise;
}

function signIn(body) {
    const promise = axios.post(`${baseURL}/signIn`, body);
    return promise;
}

function getHistory() {
    const config = createHeaders();
    const promise = axios.get(`${baseURL}/history`, config);
    return promise;
}

function postEntrie(body) {
    const config = createHeaders();
    const promise = axios.post(`${baseURL}/entrie`, body, config);
    return promise;
}

export { signUp, signIn, getHistory, postEntrie };
