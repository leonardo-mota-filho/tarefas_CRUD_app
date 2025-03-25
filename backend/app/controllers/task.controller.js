import db from "../models/index.js"

const Task = db.tasks;

//Criar e Guardar uma nova Task
export const create = (req,res) => {
    //Apenas se a request for válida
    if(!req.body.title){
        res.status(400).send({
            message:"Conteúdo não pode ser vazio!"
        });
        return;
    }

    //Criar uma Task
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed ? req.body.completed : false
    })

    //Guardar uma Task no db
    task
        .save(task)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algo falhou ao criar a Task."
            });
        });
};

//Buscar todas as Tasks
export const findAll = (req,res) => {
    //Permitir filtrar tarefas por um parâmetro da query
    const title = req.query.title;
    const condition = title ? {title: new RegExp(title,'i')} : null;

    Task.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algo falhou ao encontrar as Tasks."
            });
        });
};

//Achar uma Task via ID
export const findOne = (req,res) => {
    const id = req.params.id;

    //Achar Task por chave primária
    Task.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({message: `Task não encontrada com o id ${id}`});
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({message: `Erro ao recuperar Task com id = ${id}`})
        });
};

//Atualizar Task via ID
export const update = (req,res) => {
    const id = req.params.id;

    //Atualizar a Task com o ID especificado
    Task.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: `Não é possível atualizar Task com o id ${id}. 
                    Talvez a Task não tenha sido encontrada!`
                });
            } else res.send({message: "Task atualizada com sucesso."});
        })
        .catch(err => {
            res.status(500).send({
                message: `Erro ao atualizar Task com id = ${id}`
            });
        });
};

//Apagar uma Task pelo ID
export const deleteOne = (req,res) => {
    const id = req.params.id;

    //Apagar Task com ID especificado
    Task.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: `Não é possível remover Task com o id ${id}. 
                    Talvez a Task não tenha sido encontrada!`
                });
            } else {
                res.send({
                    message: "Task removida com sucesso."
                });    
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Erro ao remover Task com id = ${id}`
            });
        });
};

//Apaga todas as Tasks
export const deleteAll = (req,res) => {
    Task.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Tasks foram removidas com sucesso!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algo falhou ao remover todas as Task."
            });
        });
};

//Encontrar todas as Tasks completadas
export const findAllCompleted = (req,res) => {
    Task.find({completed: true})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algo falhou ao tentar encontrar todas as Task."
            });
        });
};