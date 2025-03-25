import {useState,useEffect} from "react";
import {useParams,useNavigate} from "react-router-dom";
import UserService from "../services/user.service";

function Profile({loggedInUser}){
    
    const navigate = useNavigate();
    const [user,setUser] = useState({
        username:"",
        password:""
    });
    useEffect(() => {
           getUser();
       }, []);

    const getUser = () => {
        if (loggedInUser == null){navigate("/login")}
        UserService.getUser({username: loggedInUser})
            .then ((response) => {
                setUser({username: response.data["username"], password: response.data["password"]});
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
                <div className="max-w-sm mx-auto p-4 bg-white rounded shadow">
                <h4 className="font-bold text-xl mb-2">Perfil</h4>
                <div className="mb-2">
                    <label className="block font-medium" htmlFor="title">
                    Username: {user.username}
                    </label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded w-full px-2 py-1"
                        id="title"
                        name="title"
                        //value={currentTask.title}
                        //onChange={handleInputChange}
                    />
              </div>
              <div className="mb-2">
                <label className="block font-medium" htmlFor="description">
                  Senha: {user.password}
                </label>
                <input
                    type="text"
                    className="border border-gray-300 rounded w-full px-2 py-1"
                    id="description"
                    name="description"
                    //value={currentTask.description}
                    //onChange={handleInputChange}
                />
              </div>
            
                <button
                    className="bg-purple-500 text-white px-3 py-1 rounded"
                    //onClick={console.log(user)}
                >
                  Atualizar
                </button>
              </div>
        </div>)
};

export default Profile;