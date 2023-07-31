import { useState } from "react";

export default function Form({onAddTasks}) {

  const [title, setTitle] = useState("")
  const [priority, setPriority] = useState("low")
  const [hidden, setHidden] = useState("form hidden")


  function handleSubmit(e) {
    e.preventDefault();

    if (!title) return;

    const newTask = { title, priority, completed: false, id: Date.now() }


    onAddTasks(newTask)

    setTitle("");
    setPriority("low");
    setHidden("form hidden")


  }

  function handleHidden() {
    setHidden("form")
  }

  function handleCancel() {
    setTitle("")
    setHidden("form hidden")
  }




  return (
    <>


    <form className={hidden} onSubmit={handleSubmit}>
      <h1>Create a new task</h1>
      <input type="text" value={title}
      onChange={(e) => setTitle(e.target.value)} />
      <h3>Priority</h3>
      <select value={priority}
       onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <div>
        <button onClick={handleCancel} >Cancel</button>
        <button>Add</button>
      </div>
    </form>


    <svg onClick={handleHidden} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      strokeWidth="1.5" stroke="currentColor" className="icon icon--add">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>


    </>

  )
}
