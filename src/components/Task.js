import React from 'react'

const Task = ({task, removeTask}) => {
  return (
    <div className='task'>
        <p>{task.taskName}</p>
        <button onClick={() => removeTask(task.id)}>x</button>
    </div>
  )
}

export default Task