// import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PillBtn } from "../Utility";
import "./style.css";

library.add(fas);

// Example usage of TaskList component
// const tasks = [
//   {
//     _id: "1",
//     title: "Finish Project Proposal",
//     description:
//       "Complete the initial draft of the project proposal for the team meeting.",
//     category: "Work",
//     priority: "High",
//     status: "Complete",
//     deadline: "2024-10-12",
//     project: { name: "Website Redesign" },
//     assignBy: { name: "John Doe" },
//     user: { name: "Kashaf Dawood" },
//     createdAt: "2024-09-12",
//   },
//   {
//     _id: "2",
//     title: "Study for Exam",
//     description:
//       "Review chapters 3 to 5 for the upcoming software engineering exam.",
//     category: "Study",
//     priority: "",
//     status: "Todo",
//     deadline: "2024-09-30",
//     project: { name: "Exam Preparation" },
//     assignBy: { name: "Professor Smith" },
//     user: { name: "Kashaf Dawood" },
//     createdAt: "2024-09-10",
//   },
//   {
//     _id: "3",
//     title: "Team Meeting Agenda",
//     description:
//       "Prepare the agenda for next week's team meeting and share with the team.",
//     category: "Work",
//     priority: "Low",
//     status: "Todo",
//     deadline: "2024-09-22",
//     project: { name: "Internal Operations" },
//     assignBy: { name: "Sarah Connor" },
//     user: { name: "Kashaf Dawood" },
//     createdAt: "2024-09-05",
//   },
//   {
//     _id: "4",
//     title: "Personal Development Plan",
//     description:
//       "Outline a personal development plan with goals for the next 6 months.",
//     category: "Personal",
//     priority: "Medium",
//     status: "Incomplete",
//     deadline: null, // No strict deadline
//     project: { name: "Self Growth" },
//     assignBy: { name: "Self" },
//     user: { name: "Kashaf Dawood" },
//     createdAt: "2024-09-01",
//   },
//   {
//     _id: "5",
//     title: "Grocery Shopping",
//     description: "Buy groceries for the week: fruits, vegetables, and snacks.",
//     category: "Personal",
//     priority: "Low",
//     status: "Todo",
//     deadline: "2024-09-18",
//     project: { name: "Household" },
//     assignBy: { name: "Self" },
//     user: { name: "Kashaf Dawood" },
//     createdAt: "2024-09-11",
//   },
//   {
//     _id: "6",
//     title: "Fix Bugs in App",
//     description: "Fix bugs reported in the app's login and sign-up flow.",
//     category: "Work",
//     priority: "High",
//     status: "InProgress",
//     deadline: "2024-09-20",
//     project: { name: "Mobile App" },
//     assignBy: { name: "Team Lead" },
//     user: { name: "Kashaf Dawood" },
//     createdAt: "2024-09-13",
//   },
//   {
//     _id: "7",
//     title: "Write Blog Post",
//     description: "Draft a blog post on the latest trends in web development.",
//     category: "Personal",
//     priority: "Medium",
//     status: "Todo",
//     deadline: "2024-09-25",
//     project: { name: "Personal Blog" },
//     assignBy: { name: "Self" },
//     user: { name: "Kashaf Dawood" },
//     createdAt: "2024-09-09",
//   },
//   {
//     _id: "8",
//     title: "Client Presentation",
//     description:
//       "Prepare the presentation for the upcoming client meeting on project updates.",
//     category: "Work",
//     priority: "High",
//     status: "Todo",
//     deadline: "2024-09-19",
//     project: { name: "Client Project" },
//     assignBy: { name: "Jane Doe" },
//     user: { name: "Kashaf Dawood" },
//     createdAt: "2024-09-10",
//   },
// ];

export default function TaskList({ tasks, isNoTask, handleExpanded }) {
  return (
    <div className="task-list-container">
      <div className="task-type">
        <PillBtn>All</PillBtn>
        <PillBtn>Todo</PillBtn>
        <PillBtn>InProgress</PillBtn>
        <PillBtn>Complete</PillBtn>
      </div>
      {isNoTask ? (
        <AddTaskBtn onClick={handleExpanded} />
      ) : (
        <div className="task-list">
          {tasks.map((task, index) => (
            <TaskItem key={index} task={task} onClick={handleExpanded} />
          ))}
        </div>
      )}
    </div>
  );
}

function TaskItem({ task }) {
  return (
    <div className={`taskItem_container`}>
      <div
        className={`date_placeholder task-priority-${task.priority.toLowerCase()}`}
      >
        <div className="task_createdAt">{formatDate(task.createdAt)}</div>
        <div className="task_deadLine">
          {task.deadline ? (
            formatDate(task.deadline)
          ) : (
            <FontAwesomeIcon icon={["fas", "infinity"]} />
          )}
        </div>
      </div>
      <div className="taskItem_content">
        <div className="task-header">
          <h3 className="task-title">{task.title}</h3>
          <div className="task-details">
            <div className="task-category">{task.category}</div>
            <div className="task-priority">{task.priority}</div>
          </div>
          <p className="task-description">
            {shortDescription(task.description, 10)}
          </p>
          {task.project && (
            <div className="project-details">
              <p className="task-project">
                <strong>Project:</strong> {task.project?.name}
              </p>
              <p className="task-assign-by">
                <strong>Assigned by:</strong> {task.assignBy?.name}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="task_btn">
        <div className="update-btn">
          <FontAwesomeIcon className="update-icon" icon={["fas", "ellipsis"]} />
        </div>
        <div className={`task-status task-status-${task.status.toLowerCase()}`}>
          {task.status}
        </div>
      </div>
    </div>
  );
}

function AddTaskBtn({ onClick }) {
  return (
    <>
      <div className="empty-task-message">
        <p>Add your first task to get started! </p>
        <span className="addTaskBtn" onClick={onClick}>
          +Add Task
        </span>
      </div>
    </>
  );
}

function formatDate(date) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });

  const [day, month] = formattedDate.split(" ");

  return (
    <span>
      {day} <br />
      <b>{month}</b>
    </span>
  );
}

function shortDescription(description, wordLimit) {
  const words = description?.split(" ");
  if (words?.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return description;
}
