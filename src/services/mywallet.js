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

async function signIn(body) {
    try {
        const promise = await axios.post(`${baseURL}/signIn`, body);
        return promise;
    } catch (error) {
        console.error(error);
    }
}

async function getHistory() {
    try {
        const config = createHeaders();
        const promise = await axios.get(`${baseURL}/history`, config);
        return promise;
    } catch (error) {
        console.error(error);
    }
}

function postEntrie(body) {
    const config = createHeaders();
    const promise = axios.post(`${baseURL}/entrie`, body, config);
    return promise;
}

async function endSession() {
    try {
        const config = createHeaders();
        const promise = await axios.delete(`${baseURL}/logout`, config);
        return promise;
    } catch (error) {
        console.error(error);
    }
}

export { signUp, signIn, getHistory, postEntrie, endSession };
