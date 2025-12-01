import React from "react";

import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ title, tags,handleDelete,index,setActiveCard,onDrop }) => {
  return (
    <article className="task_card"  draggable onDragStart={()=>setActiveCard(index)} onDragEnd={()=>setActiveCard(null)} >
      <p className="task_text">{title}</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} checkTag={true} />
          ))}
        </div>
        <div className="task_delete" >
          <img src={deleteIcon} onClick={()=>handleDelete(index)} className="delete_icon" alt="" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
