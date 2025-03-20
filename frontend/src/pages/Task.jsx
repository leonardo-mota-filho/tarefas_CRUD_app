import {useState,useEffect} from "react";
import {useParams,useNavigate} from "react-router-dom";
import TaskService from "../services/task.service";

function Task(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [currentTask, setCurrentTask] = useState({
        id: null,
        title: "",
        description: "",
        published: false
    });
    const [message,setMessage] = useState("");

    const getTask = (id) => {
        TaskService.get(id)
            .then((response) => {
                setCurrentTask(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        if (id) getTask(id);
    }, [id]);

    const handleInputChange = (event) => {
        const{name,value} = event.target;
        setCurrentTask({...currentTask,[name]:value});
    };

    const updatePublished = (status) => {
        const data = {
            ...currentTask,
            published: status
        };
        TaskService.update(currentTask.id, data)
        .then((response) => {
          setCurrentTask({ ...currentTask, published: status });
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    const updateTask = () => {
        TaskService.update(currentTask.id,currentTask)
            .then((response) => {
                console.log(response.data);
                setMessage("A Task foi atualizada com sucesso!");
            })
            .catch((e) => {
                console.log(id);
                console.log(e);
            });
    };

    const deleteTask = () => {
        TaskService.remove(currentTask.id)
            .then((response) => {
                console.log("REMOVEU");
                console.log(response.data);
                navigate("/tasks");
            })
            .catch((e)=>{
                console.log("removeu nn");
                console.log(e);
            });
    };

    return (
        <div>
            {currentTask ? (
                <div className="max-w-sm mx-auto p-4 bg-white rounded shadow">
                <h4 className="font-bold text-xl mb-2">Editar Task</h4>
                <div className="mb-2">
                    <label className="block font-medium" htmlFor="title">
                    Título
                    </label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded w-full px-2 py-1"
                        id="title"
                        name="title"
                        value={currentTask.title}
                        onChange={handleInputChange}
                    />
              </div>
              <div className="mb-2">
                <label className="block font-medium" htmlFor="description">
                  Descrição
                </label>
                <input
                    type="text"
                    className="border border-gray-300 rounded w-full px-2 py-1"
                    id="description"
                    name="description"
                    value={currentTask.description}
                    onChange={handleInputChange}
                />
              </div>

              <div className="mb-2">
                <strong>Status:</strong> {currentTask.published ? "Publicada" : "Pendente"}
              </div>
 
              <div className="space-x-2 mt-2">
                {currentTask.published ? (
                    <button
                        className="bg-purple-500 text-white px-3 py-1 rounded"
                        onClick={() => updatePublished(false)}
                    >
                      Cancelar Publicação
                    </button>
                ) : (
                    <button
                        className="bg-purple-500 text-white px-3 py-1 rounded"
                        onClick={() => updatePublished(true)}
                    >
                      Publicar
                    </button>
                )}
 
                <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={deleteTask}
                >
                  Deletar
                </button>
 
                <button
                    className="bg-purple-500 text-white px-3 py-1 rounded"
                    onClick={updateTask}
                >
                  Atualizar
                </button>
              </div>
 
              {message && <p className="text-green-600 mt-2">{message}</p>}
            </div>
        ) : (
            <div>
              <p>Carregando Task...</p>
            </div>
        )}
        </div>
    );
}

export default Task;