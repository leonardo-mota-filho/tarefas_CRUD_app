import React, {useState} from "react";
import TaskService from "../services/task.service";

function Register(){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    return (
        <div className="max-w-sm mx-auto p-4 bg-white rounded shadow">
            <div>
                <h4 className="font-bold text-xl mb-2">
                        Registre-se
                </h4>
                <div className="mb-2">
                    <label className="block mb-1 font-medium">Usuário</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded w-full px-2 py-1"
                        value={username}
                        //onChange={}
                    />
                </div>
                <div className="mb-2">
                    <label className="block mb-1 font-medium">Senha</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded w-full px-2 py-1"
                        value={password}
                        //onChange={}
                    />
                </div>
                <button
                    className="bg-purple-500 text-white px-3 py-1 rounded mt-2"
                    //onClick={}
                >
                    Registrar-se
                </button>
                </div>
        </div>
    );
};

export default Register;