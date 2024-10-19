import React, { useState, useEffect } from "react";
import getUserTask from "../../API/TaskAPI/getUsertask";
import "react-calendar/dist/Calendar.css";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import "./style.css";

export default function Tasks() {
  const [isNoTask, setIsNoTask] = useState(false);
  const [isNoFilterTask, setIsNoFilterTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});
  const [activeButton, setActiveButton] = useState("All");
  const [isLoading, setIsLoading] = useState(false);

  function handleExpanded() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  const fetchData = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await getUserTask(activeButton);
      setTasks(res.data.data.doc);
    } catch (err) {
      setIsLoading(false);
      if (err.status === 404 && activeButton === "All") {
        setIsNoTask(true);
      } else if (err.status === 404) {
        setIsNoFilterTask(true);
      }
    } finally {
      setIsLoading(false);
    }
  }, [activeButton]);

  useEffect(() => {
    fetchData();
  }, [activeButton, fetchData, isNoFilterTask]);

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
        isNoFilterTask={isNoFilterTask}
        setTasks={setTasks}
        setIsNoFilterTask={setIsNoFilterTask}
        handleExpanded={handleExpanded}
        setSelectedTask={setSelectedTask}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        isLoading={isLoading}
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
