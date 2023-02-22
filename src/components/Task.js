import React from 'react'

const Task = ({task, removeTask, completeTask}) => {
  return (
    <div className='task' style={{backgroundColor: task.completed ? "green" : "white"}}>
        <p>{task.taskName}</p>
        <button onClick={() => completeTask(task.id)}>Complete</button>
        <button onClick={() => removeTask(task.id)}>x</button>
    </div>
  )
}

export default Task