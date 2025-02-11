import axios from "axios";

const TaskItem = ({ task, onTaskUpdated, onTaskDeleted }) => {
  const toggleComplete = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/tasks/${task.id}`,
        {
          ...task,
          completed: !task.completed,
        }
      );
      onTaskUpdated(response.data);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async () => {
    try {
      await axios.delete(`http://localhost:8080/tasks/${task.id}`);
      onTaskDeleted(task.id);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <input type="checkbox" checked={task.completed} onChange={toggleComplete} />
      <span>{task.description}</span>
      <button onClick={deleteTask} className="delete-btn">Delete</button>
    </li>
  );
};

export default TaskItem;