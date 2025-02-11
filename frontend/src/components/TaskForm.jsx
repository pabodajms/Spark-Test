import { useState } from "react";
import axios from "axios";

const TaskForm = ({ onTaskAdded }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description) return;

    try {
      const response = await axios.post("http://localhost:8080/tasks", {
        description,
        completed: false,
      });
      onTaskAdded(response.data);
      setDescription("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Add a new task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;