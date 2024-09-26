import React, { useState, useEffect } from "react";
import getUserTask from "../../API/TaskAPI/getUsertask";
import "react-calendar/dist/Calendar.css";
import TaskList from "../../components/TaskList";
import "./style.css";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUserTask();
        setTasks(res.data.data.doc);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="tasks-content">
        <h1 className="content-title">To-Do List</h1>
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
}
