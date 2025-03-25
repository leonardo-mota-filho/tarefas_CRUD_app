import React, {useState,useEffect} from "react";
import TaskService from "../services/task.service";
import {useNavigate} from "react-router-dom";

function AddTask({loggedInUser}){

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (loggedInUser == null){navigate("/login")};
      }, [loggedInUser]);

    const saveTask = () => {
        const data = {title,description};
        TaskService.create(data)
            .then((response) => {
                console.log(response.data);
                setSubmitted(true);
            })
            .catch((e) => {
                console.log(e);
            })
    }

    const newTask = () => {
        setTitle("");
        setDescription("");
        setSubmitted(false);
    }

    return (
        <div className="max-w-sm mx-auto p-4 bg-white rounded shadow">
            {submitted ? (
                <div>
                    <h4 className="font-bold text-green-600 mb-4">
                        Task adicionada com sucesso!
                    </h4>
                    <button className="bg-purple-500 text-white px-3 py-1 rounded" onClick={newTask}>
                        Adicionar outra
                    </button>
                </div>
            ) : (
                <div>
                    <h4 className="font-bold text-xl mb-2">
                        Adicionar Task
                    </h4>
                    <div className="mb-2">
                        <label className="block mb-1 font-medium">Título</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded w-full px-2 py-1"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-1 font-medium">Descrição</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded w-full px-2 py-1"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button
                        className="bg-purple-500 text-white px-3 py-1 rounded mt-2"
                        onClick={saveTask}
                    >
                        Salvar
                    </button>
                </div>
            )}
        </div>
    );
}

export default AddTask;