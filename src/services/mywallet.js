import axios from "axios";
import dayjs from "dayjs";

const baseURL = "localhost:5000/";
const day = dayjs().format("DD/MM");

function createHeaders() {
    const auth = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${auth}`,
        },
    };
    return config;
}

export { day };
