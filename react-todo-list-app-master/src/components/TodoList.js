import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import "./Todo.css";

function TodoList() {

  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("🏋 Gym");

  // LOCAL STORAGE SAVE
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // AUTO SAVE
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // ADD TASK
  const addTodo = () => {

    if (task.trim() === "" || time.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      time: time,
      category: category
    };

    setTodos([...todos, newTask]);

    setTask("");
    setTime("");
  };

  // DELETE TASK
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">

      <h1>⚡ Smart Daily Planner</h1>

      <p className="subtitle">
        Plan your daily productive activities
      </p>

      {/* INPUT AREA */}
      <div className="input-section">

        <input
          type="text"
          placeholder="Enter activity..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        {/* ACTIVE CATEGORY */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>🏋 Gym</option>
          <option>⚽ Sports</option>
          <option>📚 Study</option>
          <option>💼 Work</option>
          <option>🛌 Routine</option>
        </select>

        <button onClick={addTodo}>
          Add Task
        </button>

      </div>

      {/* TASKS */}
      <div className="todo-list">

        {todos.length === 0 ? (
          <p className="empty">
            No activities planned yet 🚀
          </p>
        ) : (

          todos.map((todo) => (

            <TodoItem
              key={todo.id}
              task={todo}
              onDelete={() => deleteTodo(todo.id)}
            />

          ))
        )}

      </div>

      <footer>
        Powered by TechFactOfficial • Developed by EngrAwais
      </footer>

    </div>
  );
}

export default TodoList;