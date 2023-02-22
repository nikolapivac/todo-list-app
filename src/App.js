import { useState } from 'react';
import Task from './components/Task';
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
      taskName: newTask,
      completed: false
    }
    setTodoList([...todoList, task]);
    setNewTask("");
  }

  const removeTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  const completeTask = (id) => {
    setTodoList(todoList.map((task) => {
      if (task.id === id) {
        return {...task, completed: true };
      } else return task;
    }))
  }

  return (
    <div className="main">
      <div className='header'>
        <h1 className='main_title'>To-Do List</h1>
        <div className="form">
          <input className='input' onChange={handleChange} value={newTask} />
          <button className="add" onClick={addNewTask}>ADD</button>
        </div>
      </div>
      <div className='todo-list'>
        {todoList.map((task) => {
          return <Task task={task} removeTask={removeTask} completeTask={completeTask}/>
        })}
      </div>
    </div>
  );
}

export default App;
