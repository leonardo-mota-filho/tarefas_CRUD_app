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

const getUser = (data) => {
    return http.post("/profile",data);
}

export default {
    createUser,
    authenticateUser,
    getUser
};