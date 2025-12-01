import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
import { useEffect } from "react";

function App() {
  const [activeCard, setActiveCard] = useState(null);
  const [tasks, setTasks] = useState(() => {
    const data = JSON.parse(localStorage.getItem("task"));
    return data || [];
  });

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (e) => {
    const filteredData = tasks.filter((t, i) => i !== e);
    setTasks(filteredData);
  };
  const onDrop = (status, pos) => {
    if (activeCard === null || activeCard === undefined) return;
    const posToMove=tasks[activeCard]
    const updatedList=tasks.filter((elem,index)=>index !==activeCard)
    updatedList.splice(pos,0,{
      ...posToMove,status:status
    })
    setTasks(updatedList)
  };
  return (
    <>
      <div className="app">
        <Header setTasks={setTasks} />
        <main className="app_main">
          <TaskColumn
            tasks={tasks}
            title="To do"
            icon={todoIcon}
            status="todo"
            handleDelete={handleDelete}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
          <TaskColumn
            tasks={tasks}
            title="Doing"
            icon={doingIcon}
            status="doing"
            handleDelete={handleDelete}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
          <TaskColumn
            tasks={tasks}
            title="Done"
            icon={doneIcon}
            status="done"
            handleDelete={handleDelete}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
        </main>
        <h1>active card {activeCard}</h1>
      </div>
    </>
  );
}

export default App;
