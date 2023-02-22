import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

const Task = ({task, removeTask, completeTask}) => {
  return (
    <div className='task'>
        <h1 className='task-title' style={{textDecoration: task.completed ? "line-through" : "none"}}>{task.taskName}</h1>
        <div className='task-buttons'>
          <button className="task-button" onClick={() => completeTask(task.id)}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button className="task-button" onClick={() => removeTask(task.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
    </div>
  )
}

export default Task