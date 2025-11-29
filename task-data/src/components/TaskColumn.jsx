import React from "react";


import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon,tasks,status }) => {
    // console.log(tasks)
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" /> {title}
      </h2>
      
      {
         tasks.map((e,index)=>{
            return e.status===status &&
            <TaskCard key={index} title={e.task} tags={e.tagName} />
         })
      }
      
    </section>
  );
};

export default TaskColumn;
