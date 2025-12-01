import React from "react";


import TaskCard from "./TaskCard";
import DropArea from "./DropArea";

const TaskColumn = ({ title, icon,tasks,status ,handleDelete,setActiveCard,onDrop}) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" /> {title}
      </h2>
        <DropArea onDrop={()=>onDrop(status,0)}/>
        {
            tasks.map((e,index)=>{
                return e.status===status &&
                <React.Fragment key={index}>
                <TaskCard setActiveCard={setActiveCard}  index={index} handleDelete={handleDelete} title={e.task} tags={e.tagName} />
                <DropArea onDrop={()=>onDrop(status,index+1)}/>
                </React.Fragment>
            })
        }
      
    </section>
  );
};

export default TaskColumn;