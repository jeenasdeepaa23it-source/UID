import React, { useState } from "react";
import "./App.css";   // ✅ Import CSS file

function App() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { text: task, priority, completed: false }]);
    setTask("");
    setPriority("Medium");
  };

  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="app-container">
      <h1>✅ To-Do List</h1>
      <br></br>
      <br></br>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="input-box"
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="priority-select"
      >
        <option value="High">High</option>
        <option value="Medium"> Medium</option>
        <option value="Low"> Low</option>
      </select>

      <button onClick={addTask} className="add-btn">Add</button>

      <ul className="task-list">
        {todos.map((todo, index) => (
          <li key={index} className="task-item">
            <span
              onClick={() => toggleComplete(index)}
              className={`task-text ${todo.completed ? "task-completed" : ""} ${todo.priority.toLowerCase()}`}
            >
              [{todo.priority}] {todo.text}
            </span>
            <button onClick={() => deleteTask(index)} className="delete-btn">
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
