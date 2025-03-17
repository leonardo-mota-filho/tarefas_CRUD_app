import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";
import Task from "./pages/Task";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div>
        {/*NAVBAR*/}
          <nav className="bg-blue-600 p-4 text-white">
            <div className="flex space-x-4">
              <Link to="/tasks" className="hover:text-gray-300">
              Tasks
              </Link>
              <Link to="/add" className="hover:text-gray-300">
              Add
              </Link>
            </div>
          </nav>

        {/*ROUTES*/}
        <div className="container mx-auto mt-8 px-4">
          <Routes>
            <Route path='/' element={<TaskList/>}/>
            <Route path='/tasks' element={<TaskList/>}/>
            <Route path='/add' element={<AddTask/>}/>
            <Route path='/tasks/:id' element={<Task/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
