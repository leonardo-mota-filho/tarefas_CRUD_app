import express from "express";
import cors from "cors";
import db from "./app/models/index.js";
import taskRoutes from "./app/routes/task.routes.js";
import userRoutes from "./app/routes/user.routes.js";

const app = express();

const corsOptions = {
    origin: "http://localhost:5173"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Route simples
app.get("/", (req,res) => {
    res.json({message: "Seja bem vindo(a) ao app de Tasks."});
});

//Routes
taskRoutes(app);
userRoutes(app);

//Sicronizar db
db.mongoose.connect(db.url)
    .then(() => {
        console.log("Conectado ao database!");
    })
    .catch(err => {
        console.log("Não é possível conectar ao database!", err);
        process.exit();
    });

    const PORT = process.env.PORT || 8080;
    app.listen(PORT,() => {
        console.log(`Servidor funcionando na port ${PORT}`);
    });