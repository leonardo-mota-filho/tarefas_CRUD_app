import * as  users from "../controllers/user.controller.js";
import express from "express";

export default (app) => {
    let router = express.Router();

    router.post("/register",users.create);
    router.post("/login",users.login);

    app.use('/api',router);
}