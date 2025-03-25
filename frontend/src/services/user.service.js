import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json"
    }
});

const createUser = (data) => {
    return http.post("/register",data);
}

const authenticateUser = (data) => {
    return http.post("/login",data);
}

export default {
    createUser,
    authenticateUser
};