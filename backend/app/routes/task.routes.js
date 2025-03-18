import * as  tasks from "../controllers/task.controller.js";
import express from "express";

export default (app) => {
    let router = express.Router();

    //Criar nova Task
    router.post("/", tasks.create);

    //Buscar todas as Tasks
    router.get("/", tasks.findAll);

    //Buscar uma Task por ID
    router.get("/:id", tasks.findOne);

    //Atualizar Task por ID
    router.put("/:id", tasks.update);

    //Apagar Task por ID
    router.delete("/:id", tasks.deleteOne);

    //Apagar todas as Tasks
    router.delete("/", tasks.deleteAll);

    //Buscar todas as Tasks publicadas
    router.get("/published", tasks.findAllPublished);

    app.use('/api/tasks',router);
}