import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  }

  const addNewTask = () => {
    setTodoList([...todoList, newTask]);
  }

  return (
    <div className="main">
      <div className="form">
        <input onChange={handleChange} />
        <button onClick={addNewTask}>ADD</button>
      </div>
      <div className='todo-list'>
        {todoList.map((task) => {
          return <p>{task}</p>
        })}
      </div>
    </div>
  );
}

export default App;
