import './App.css'
import React, {useState} from "react";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";
import Task from "./pages/Task";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  const [loggedInUser,setLoggedInUser] = useState(null);

  const handleLogout = () => {
    //localStorage.removeItem('token') (para quando os tokens estiverem funcionais)
    setLoggedInUser(null);
  };

  return (
    <BrowserRouter>
      <div>
        {/*NAVBAR*/}
          <nav className="bg-purple-600 p-4 text-white">
           
              {(loggedInUser != null) ? (
                 <> <div className="flex space-x-4 flex-row">
                  <Link to="/tasks" className="hover:text-gray-300">
                  Tasks
                  </Link>
                  <Link to="/add" className="hover:text-gray-300">
                  Adicionar
                  </Link>
                  <Link onClick={handleLogout} className="hover:text-gray-300 absolute right-10">
                    Logout
                    </Link>
                    <Link to="/profile" className="hover:text-gray-300 absolute right-32">
                    Perfil
                    </Link>
                 </div>
                 </>
              ) : (
                <div></div>
              )}
             
            
          </nav>

        {/*ROUTES*/}
        <div className="container mx-auto mt-8 px-4">
          <Routes>
            <Route path='/' element={<Login setLoggedInUser = {setLoggedInUser}/>}/>
            <Route path='/login' element={<Login setLoggedInUser = {setLoggedInUser}/>}/>
            <Route path='/register' element={<Register loggedInUser = {loggedInUser}/>}/>
            <Route path='/profile' element={<Profile loggedInUser = {loggedInUser}/>}/>
            <Route path='/tasks' element={<TaskList loggedInUser = {loggedInUser}/>}/>
            <Route path='/add' element={<AddTask loggedInUser = {loggedInUser}/>}/>
            <Route path='/tasks/:id' element={<Task loggedInUser = {loggedInUser}/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
