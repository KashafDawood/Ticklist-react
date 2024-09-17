import { BottomNavbar } from "../../components/Navbar";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Dashboard.css";

// Example usage of TaskList component
const tasks = [
  {
    _id: "1",
    title: "Finish Project Proposal",
    description:
      "Complete the initial draft of the project proposal for the team meeting.",
    category: "Work",
    priority: "High",
    status: "InProgress",
    deadline: "2024-10-12",
    project: { name: "Website Redesign" },
    assignBy: { name: "John Doe" },
    user: { name: "Kashaf Dawood" },
    createdAt: "2024-09-12",
  },
  {
    _id: "2",
    title: "Study for Exam",
    description:
      "Review chapters 3 to 5 for the upcoming software engineering exam.",
    category: "Study",
    priority: "Medium",
    status: "Todo",
    deadline: "2024-09-30",
    project: { name: "Exam Preparation" },
    assignBy: { name: "Professor Smith" },
    user: { name: "Kashaf Dawood" },
    createdAt: "2024-09-10",
  },
  {
    _id: "3",
    title: "Team Meeting Agenda",
    description:
      "Prepare the agenda for next week's team meeting and share with the team.",
    category: "Work",
    priority: "Low",
    status: "Todo",
    deadline: "2024-09-22",
    project: { name: "Internal Operations" },
    assignBy: { name: "Sarah Connor" },
    user: { name: "Kashaf Dawood" },
    createdAt: "2024-09-05",
  },
  {
    _id: "4",
    title: "Personal Development Plan",
    description:
      "Outline a personal development plan with goals for the next 6 months.",
    category: "Personal",
    priority: "Medium",
    status: "Incomplete",
    deadline: null, // No strict deadline
    project: { name: "Self Growth" },
    assignBy: { name: "Self" },
    user: { name: "Kashaf Dawood" },
    createdAt: "2024-09-01",
  },
  {
    _id: "5",
    title: "Grocery Shopping",
    description: "Buy groceries for the week: fruits, vegetables, and snacks.",
    category: "Personal",
    priority: "Low",
    status: "Todo",
    deadline: "2024-09-18",
    project: { name: "Household" },
    assignBy: { name: "Self" },
    user: { name: "Kashaf Dawood" },
    createdAt: "2024-09-11",
  },
  {
    _id: "6",
    title: "Fix Bugs in App",
    description: "Fix bugs reported in the app's login and sign-up flow.",
    category: "Work",
    priority: "High",
    status: "InProgress",
    deadline: "2024-09-20",
    project: { name: "Mobile App" },
    assignBy: { name: "Team Lead" },
    user: { name: "Kashaf Dawood" },
    createdAt: "2024-09-13",
  },
  {
    _id: "7",
    title: "Write Blog Post",
    description: "Draft a blog post on the latest trends in web development.",
    category: "Personal",
    priority: "Medium",
    status: "Todo",
    deadline: "2024-09-25",
    project: { name: "Personal Blog" },
    assignBy: { name: "Self" },
    user: { name: "Kashaf Dawood" },
    createdAt: "2024-09-09",
  },
  {
    _id: "8",
    title: "Client Presentation",
    description:
      "Prepare the presentation for the upcoming client meeting on project updates.",
    category: "Work",
    priority: "High",
    status: "Todo",
    deadline: "2024-09-19",
    project: { name: "Client Project" },
    assignBy: { name: "Jane Doe" },
    user: { name: "Kashaf Dawood" },
    createdAt: "2024-09-10",
  },
];

export default function Tasks() {
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

function TaskList() {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </div>
  );
}

function TaskItem({ task }) {
  return (
    <div className={`task-item task-priority-${task.priority.toLowerCase()}`}>
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
        <span
          className={`task-status task-status-${task.status.toLowerCase()}`}
        >
          {task.status}
        </span>
      </div>
      <p className="task-description">{task.description}</p>
      <p className="task-category">
        <strong>Category:</strong> {task.category}
      </p>
      <p className="task-deadline">
        <strong>Deadline:</strong>{" "}
        {task.deadline
          ? new Date(task.deadline).toLocaleDateString()
          : "No deadline"}
      </p>
      <p className="task-project">
        <strong>Project:</strong> {task.project?.name || "No project"}
      </p>
      <p className="task-assign-by">
        <strong>Assigned by:</strong> {task.assignBy?.name || "Unknown"}
      </p>
      <p className="task-user">
        <strong>Assigned to:</strong> {task.user?.name || "Unassigned"}
      </p>
      <p className="task-created-at">
        <strong>Created on:</strong>{" "}
        {new Date(task.createdAt).toLocaleDateString()}
      </p>
    </div>
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
