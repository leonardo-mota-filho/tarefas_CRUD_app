import * as  tasks from "../controllers/task.controller.js";
import express from "express";

export default (app) => {
    let router = express.Router();

    //Criar nova Task
    router.post("/tasks/", tasks.create);

    //Buscar todas as Tasks
    router.get("/tasks/", tasks.findAll);

    //Buscar todas as Tasks completadas
    router.get("/tasks/completed", tasks.findAllCompleted);

    //Buscar uma Task por ID
    router.get("/tasks/:id", tasks.findOne);

    //Atualizar Task por ID
    router.put("/tasks/:id", tasks.update);

    //Apagar Task por ID
    router.delete("/tasks/:id", tasks.deleteOne);

    //Apagar todas as Tasks
    router.delete("/tasks/", tasks.deleteAll);

    app.use('/api',router);
}