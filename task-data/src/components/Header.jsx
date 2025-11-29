import React from "react";
import Tag from "./Tag";
import { useState } from "react";
import { useEffect } from "react";

const Header = ({ setTasks }) => {
  const statusOptions = ["todo", "doing", "done"];
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tagName: [],
  });
  const selectTag = (tag) => {
    if (taskData.tagName.some((item) => item === tag)) {
      const filteredTags = taskData.tagName.filter((item) => item !== tag);
      setTaskData((prev) => {
        return {
          ...prev,
          tagName: filteredTags,
        };
      });
    } else {
      setTaskData((prev) => {
        return {
          ...prev,
          tagName: [...prev.tagName, tag],
        };
      });
    }
  };
  const checkTag = (tag) => {
    return taskData.tagName.some((t) => t === tag);
  };

  const handleOnCHange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((p) => {
      return [...p, taskData];
    });
    setTaskData({
      task: "",
      status: 'todo',
      tagName: [],
    });
  };
  return (
    <div className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          className="task_input"
          placeholder="Enter your task"
          value={taskData.task}
          onChange={handleOnCHange}
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              checkTag={checkTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              checkTag={checkTag("CSS")}
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              checkTag={checkTag("JavaScript")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              checkTag={checkTag("React")}
            />
          </div>

          <div>
            <select
              name="status"
              value={taskData.status}
              className="task_status"
              onChange={handleOnCHange}
            >
              {statusOptions.map((s) => (
                <option key={s} value={s}>
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </option>
              ))}
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Header;
