import React from 'react'
import Tag from './Tag'

const Header = () => {
    const statusOptions = ["todo", "doing", "done"];
  return (
    <div className="app_header">
      <form>
        <input
          type="text"
          name="task"
          className="task_input"
          placeholder="Enter your task"
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="React" />
          </div>

          <div>

            <select name="status" className="task_status">
                {
                    statusOptions.map(s=>(
                        <option key={s} value={s}>{
                            s.charAt(0).toUpperCase() + s.slice(1)
                        }</option>
                    ))
                }
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </div>

  )
}

export default Header
