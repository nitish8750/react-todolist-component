import { useState } from "react";

const AddTaskForm = ({ onAddTask }) => {
  const [inputVal, setInputVal] = useState("");

  const inputChangeHandler = (e) => {
    setInputVal(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    onAddTask(inputVal);
    setInputVal("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input type="text" value={inputVal} onChange={inputChangeHandler} />
      <button type="submit">Add Task </button>
    </form>
  );
};

const TodoList = () => {
  const [tasks, setTasks] = useState([{ text: "This is task1" }]);

  const addTaskHandler = (task) => {
    if (!task) return "";
    setTasks([...tasks, { text: task }]);
    console.log(task);
  };

  const removeTaskHanlder = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todo-list">
      <AddTaskForm onAddTask={addTaskHandler} />
      {tasks.map((task, index) => (
        <div className="todo">
          {task.text}
          <button onClick={() => removeTaskHanlder(index)}>Remove task</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
