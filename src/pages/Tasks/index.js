import React, { useState, useEffect } from "react";
import getUserTask from "../../API/TaskAPI/getUsertask";
import "react-calendar/dist/Calendar.css";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import "./style.css";

export default function Tasks() {
  const [isNoTask, setIsNoTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});

  function handleExpanded() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  const fetchData = async () => {
    try {
      const res = await getUserTask();
      setTasks(res.data.data.doc);
    } catch (err) {
      if (err.status === 404) {
        setIsNoTask(true);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleAddTask() {
    fetchData();
  }

  return (
    <div>
      <div className="tasks-content">
        <h1 className="content-title">To-Do List</h1>
        <button className="add-task-btn" onClick={handleExpanded}>
          +Add Task
        </button>
      </div>
      <TaskList
        tasks={tasks}
        isNoTask={isNoTask}
        handleExpanded={handleExpanded}
        setSelectedTask={setSelectedTask}
      />
      <TaskForm
        isOpen={isOpen}
        onClose={handleClose}
        onAddTask={handleAddTask}
        task={selectedTask}
        setSelectedTask={setSelectedTask}
      />
    </div>
  );
}
