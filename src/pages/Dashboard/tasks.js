import { BottomNavbar } from "../../components/Navbar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Dashboard.css";
import TaskList from "../../components/Tasks";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://127.0.0.1:1000/api/v1/tasks/getUserTasks",
          {
            withCredentials: true,
          }
        );
        console.log(res.data.data.doc);
        setTasks(res.data.data.doc);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="dashboardContainer">
        <TaskMenu />
        <TaskList tasks={tasks} />
        <CalendarUI />
      </div>
      <BottomNavbar />
    </div>
  );
}

function TaskMenu() {
  return (
    <ul className="taskMenu">
      <li>All</li>
      <li>Project A</li>
      <li>Project B</li>
      <li>Project C</li>
    </ul>
  );
}

function CalendarUI() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendarContainer">
      <Calendar onChange={setDate} value={date} />
      <p>Selected date: {date.toDateString()}</p>
    </div>
  );
}
