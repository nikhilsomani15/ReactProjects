import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
function App() {

  const [tasks, setTasks] = useState([])
  const handleDelete=(e)=>{
      const filteredData=tasks.filter((t,i)=>
        i!==e
      )
      setTasks(filteredData) 
  }
  return (
    <div className="app">
      <Header setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn tasks={tasks} title="To do" icon={todoIcon} status="todo" handleDelete={handleDelete} />
        <TaskColumn tasks={tasks} title="Doing" icon={doingIcon} status="doing" handleDelete={handleDelete} />
        <TaskColumn tasks={tasks} title="Done" icon={doneIcon} status="done" handleDelete={handleDelete} />
      </main>
    </div>
  );
}

export default App;
