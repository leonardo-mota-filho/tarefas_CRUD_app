import React, {useEffect ,useState} from "react";
import TaskService from "../services/task.service.js";
import {Link, useNavigate} from "react-router-dom";

function TaskList({loggedInUser}){
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const [currentTask,setCurrentTask] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");
    const [completedSearch, setCompletedSearch] = useState(false);

    useEffect(() => {
      if (loggedInUser == null){navigate("/login")};
        retrieveTasks();
    }, []);

    useEffect(()=>{
      refreshList();
    },[completedSearch])

    const onChangeSearchTitle = (e) => {
        setSearchTitle(e.target.value);
    };

    const retrieveTasks = () => {
      if (completedSearch) {
        findAllCompleted();
      }
      else{
        TaskService.getAll()
            .then((response) => {
                setTasks(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
      }
    };

    const findAllCompleted = () => {
      TaskService.findAllCompleted()
          .then((response) => {
              setTasks(response.data);
              console.log(response.data);
          })
          .catch((e) => {
            console.log("AAAA")
            console.log(e);
        });
  }

    const refreshList = () => {
        retrieveTasks();
        setCurrentTask(null);
        setCurrentIndex(-1);
    };

    const setActiveTask = (task,index) => {
        setCurrentTask(task);
        setCurrentIndex(index);
    };

    const removeAllTasks = () => {
        TaskService.removeAll()
        .then((response) => {
            console.log(response.data);
            refreshList();
        })
        .catch((e) => {
            console.log(e);
        });
    };

    const findByTitle = () => {
      setCompletedSearch(false);
      TaskService.findByTitle(searchTitle)
        .then((response) => {
          setTasks(response.data);
          setCurrentTask(null);
          setCurrentIndex(-1);
          console.log(response.data);
      })
      .catch((e) => {
          console.log(e);
      });
       
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* COLUNA ESQ: PESQUISA E LISTA DE TASKS */}
          <div className="flex-1">
            <div className="flex mb-4">
              <input
                  type="text"
                  className="border border-gray-300 rounded-l px-2 py-1 w-full"
                  placeholder="Buscar por Título"
                  value={searchTitle}
                  onChange={onChangeSearchTitle}
              />
              <button
                  className="bg-purple-500 text-white px-4 py-1 rounded-r"
                  onClick={findByTitle}
              >
                Buscar
              </button>
            </div>

            <div className="flex items-center mb-4">
              <input id="default-checkbox" type="checkbox" checked={completedSearch} onChange={() => (setCompletedSearch(!completedSearch), refreshList())} className="accent-purple-500"/>
              <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-black-900 dark:text-white-300">Mostrar apenas concluídas</label>
            </div>
   
            <h4 className="font-bold text-lg mb-2">Lista de Tasks</h4>
            <ul className="divide-y divide-gray-200 border border-gray-200 rounded">
              {tasks &&
                  tasks.map((task, index) => (
                      <li
                          className={
                              "px-4 py-2 cursor-pointer " +
                              (index === currentIndex ? "bg-purple-100" : "")
                          }
                          onClick={() => setActiveTask(task, index)}
                          key={index}
                      >
                        {task.title}
                      </li>
                  ))}
            </ul>
   
            <button
                className="bg-red-500 text-white px-3 py-1 rounded mt-4"
                onClick={removeAllTasks}
            >
              Remover Todas
            </button>
          </div>
   
          {/* COLUNA DIR: DETALHES */}
          <div className="flex-1">
            {currentTask ? (
                <div className="p-4 bg-white rounded shadow">
                  <h4 className="font-bold text-xl mb-2">Task</h4>
                  <div className="mb-2">
                    <strong>Título: </strong>
                    {currentTask.title}
                  </div>
                  <div className="mb-2">
                    <strong>Descrição: </strong>
                    {currentTask.description}
                  </div>
                  <div className="mb-2">
                    <strong>Status: </strong>
                    {currentTask.completed ? "Completada" : "Pendente"}
                  </div>
   
                  <Link
                      to={`/tasks/${currentTask.id}`}
                      className="inline-block bg-yellow-400 text-black px-3 py-1 rounded"
                  >
                    Edit
                  </Link>
                </div>
            ) : (
                <div>
                  <p>Clique em uma Task</p>
                </div>
            )}
          </div>
        </div>
    );
}



export default TaskList;

