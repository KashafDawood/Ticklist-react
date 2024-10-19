// import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PillBtn } from "../Utility";
import "./style.css";

library.add(fas);

export default function TaskList({
  tasks,
  setTasks,
  isNoTask,
  isNoFilterTask,
  setIsNoFilterTask,
  handleExpanded,
  setSelectedTask,
  activeButton,
  setActiveButton,
}) {
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setIsNoFilterTask(false);
    if (activeButton !== buttonName) {
      setTasks([]);
    }
  };

  return (
    <div className="task-list-container">
      <div className="task-type">
        {["All", "Todo", "InProgress", "Complete"].map((buttonName) => (
          <PillBtn
            key={buttonName}
            className={activeButton === buttonName ? "active" : ""}
            onClick={() => handleButtonClick(buttonName)}
          >
            {buttonName}
          </PillBtn>
        ))}
      </div>
      {isNoFilterTask ? (
        <div className="empty-task-message">
          There is no task with {activeButton} status yet!
        </div>
      ) : isNoTask ? (
        <AddTaskBtn onClick={handleExpanded} />
      ) : (
        <div className="task-list">
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              handleExpanded={handleExpanded}
              setSelectedTask={setSelectedTask}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function TaskItem({ task, handleExpanded, setSelectedTask }) {
  function onClick(clickedTask) {
    setSelectedTask(clickedTask);
    handleExpanded();
  }

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
          <FontAwesomeIcon
            onClick={() => onClick(task)}
            className="update-icon"
            icon={["fas", "ellipsis"]}
          />
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
