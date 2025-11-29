import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
function App() {
  return (
    <div className="app">
      <Header />
      <main className="app_main">
        <TaskColumn title="To do" icon={todoIcon} status="todo" />
        <TaskColumn title="Doing" icon={doingIcon} status="doing" />
        <TaskColumn title="Done" icon={doneIcon} status="done" />
      </main>
    </div>
  );
}

export default App;
