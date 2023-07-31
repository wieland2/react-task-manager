import Tasks from "./Tasks";
import Form from "./Form";
import Dashboard from "./Dashboard";
import { useState } from "react";

export default function App() {

  const [tasks, setTasks] = useState([])

  function handleAddTasks(task) {
    setTasks((tasks) => [...tasks, task])
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter(task=> task.id !== id))
  }



  function handleToggleTask(id) {
    setTasks((tasks) => tasks.map((task) =>
      task.id === id ? {...task, completed: !task.completed} : task
    ))
  }






  return  (
    <div className="app">
        <Dashboard tasks={tasks} />
      <div className="tasks-container">
        <Tasks tasks={tasks} onDeleteTask={handleDeleteTask} onToggleTask={handleToggleTask} />
        <Form onAddTasks={handleAddTasks} />
      </div>
    </div>
  )
}
