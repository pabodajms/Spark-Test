import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  if (!tasks || tasks.length === 0) {
    return <p>No tasks available.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onTaskUpdated={toggleTask} onTaskDeleted={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
