import db from "../models/index.js"

const User = db.users;

//Criar usuário
export const create = (req,res) =>  {
    if((!req.body.username) || (!req.body.password)){
        res.status(400).send({
            message:"Campos não podem ser vazios!"
        });
        return;
    }

    //Criar um usuário
    const user = new User({
        username: req.body.username,
        password: req.body.password,
    })

    //Guardar um usuário no db
    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algo falhou ao registrar o usuário."
            });
        });
}

export const login = (req,res) => {
    const un = req.body.username;
    const pw = req.body.password;

    User.find({username: un, password: pw})
        .then(data => {
            console.log(data);
            if (data.length == 0){
                res.send({result: false});
            }
            else {
                res.send({result: true});
            }
            
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algo falhou ao tentar encontrar o usuário."
            });
        })
}