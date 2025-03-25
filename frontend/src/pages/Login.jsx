import React, {useState} from "react";
import {Link} from "react-router-dom";
import UserService from "../services/user.service";
import axios from 'axios'

function Login(){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [warning, setWarning] = useState(false);

    const handleLogin = () => {
        const data = {username,password}
        UserService.authenticateUser(data)
            .then((response) => {
                if(response.data["result"] == true){
                    console.log("Login Realizado!")
                } else{
                    console.log("Usuário e/ou senha incorretos.");
                    setWarning(true);
                }
            })
            .catch((e) => {
                console.log(e);
            })
    }

    return (
        <div className="max-w-sm mx-auto p-4 bg-white rounded shadow">
            <div>
                <h4 className="font-bold text-xl mb-2">
                        Login
                </h4>
                <div className="mb-2">
                    <label className="block mb-1 font-medium">Usuário</label>
                    <input
                        name="username"
                        type="text"
                        className="border border-gray-300 rounded w-full px-2 py-1"
                        value={username}
                        onChange={(e) => (setUsername(e.target.value),setWarning(false))}
                    />
                </div>
                <div className="mb-2">
                    <label className="block mb-1 font-medium">Senha</label>
                    <input
                        name="password"
                        type="text"
                        className="border border-gray-300 rounded w-full px-2 py-1"
                        value={password}
                        onChange={(e) => (setPassword(e.target.value),setWarning(false))}
                    />
                </div>
                {warning ? (
                    <div>
                        <h4 className="font-bold text-red-600 mb-4">
                        Usuário e/ou senha incorretos.
                    </h4>
                    </div>
                ) : (
                    <div></div>
                )}
                <button
                    className="bg-purple-500 text-white px-3 py-1 rounded mt-2"
                    onClick={handleLogin}
                >
                    Login
                </button>
                <div className="relative size-0 ...">
                    <div className="absolute -right-105 -bottom-43 size-50 ...">
                        <Link to="/register" className="hover:text-gray-300">
                            Não possuo conta.
                        </Link>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Login;