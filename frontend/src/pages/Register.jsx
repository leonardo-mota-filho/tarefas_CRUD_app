import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import UserService from "../services/user.service";

function Register(){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const navigate = useNavigate();

    const handleRegistration = () => {
        const data = {username,password};
        UserService.createUser(data)
            .then((response) => {
                console.log(response.data);
                setSubmitted(true);
            })
            .catch((e) => {
                console.log(e);
            })
    };

    return (
        <div className="max-w-sm mx-auto p-4 bg-white rounded shadow">
             {submitted ? (
                <div>
                    <h4 className="font-bold text-green-600 mb-4">
                        Usuário registrado com sucesso!
                    </h4>
                    <a href="/login" className="bg-purple-500 text-white px-3 py-1 rounded">
                    Prosseguir para página de Login</a>


                </div>
            ) : (
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
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label className="block mb-1 font-medium">Senha</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded w-full px-2 py-1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="bg-purple-500 text-white px-3 py-1 rounded mt-2"
                    onClick={handleRegistration}
                >
                    Registrar-se
                </button>
                </div>
            )}
        </div>
    );
};

export default Register;