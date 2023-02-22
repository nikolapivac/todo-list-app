import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  }

  const addNewTask = () => {
    const task = {
      // if this is the 1st task, id will be 1
      // if it's not, id will be previous id increased by 1
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    }
    setTodoList([...todoList, task]);
  }

  const removeTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  return (
    <div className="main">
      <div className="form">
        <input onChange={handleChange} />
        <button onClick={addNewTask}>ADD</button>
      </div>
      <div className='todo-list'>
        {todoList.map((task) => {
          return (
            <div className='task'>
              <p>{task.taskName}</p>
              <button onClick={() => removeTask(task.id)}>x</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
