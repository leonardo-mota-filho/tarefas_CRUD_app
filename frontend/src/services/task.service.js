import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json"
    }
});

const getAll = (user) => {
    return http.get(`/tasks?user=${user}`);
};

const findAllCompleted = (user) => {
    return http.get(`/tasks/completed?user=${user}`);
};

const get = (id) => {
    return http.get(`/tasks/${id}`);
};

const create = (data) => {
    return http.post("/tasks",data);
};

const update = (id, data) => {
    return http.put(`/tasks/${id}`,data);
};

const remove = (id) => {
    return http.delete(`/tasks/${id}`);
};

const removeAll = (user) => {
    return http.delete(`/tasks?user=${user}`);
}

const findByTitle = (title,user) => {
    return http.get(`/tasks?title=${title}?user=${user}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle,
    findAllCompleted,
};