import { useForm } from "react-hook-form";
import { Btn, FormField } from "../../components/Utility";
import Alerts from "../../components/Alerts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import createToDo from "./../../API/TaskAPI/createToDo";
import updateTask from "../../API/TaskAPI/updateTask";
import { useEffect } from "react";
import "./style.css";

export default function TaskForm({
  isOpen,
  onClose,
  onAddTask,
  task,
  setSelectedTask,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm({
    defaultValues: {
      title: task?.title || "",
      description: task?.description || "",
      deadline: task?.deadline || "",
      category: task?.category || "General",
      priority: task?.priority || "Medium",
      status: task?.status || "Todo",
    },
  });

  // Update form values whenever the task prop changes
  useEffect(() => {
    reset({
      title: task?.title || "",
      description: task?.description || "",
      deadline: task?.deadline || "",
      category: task?.category || "General",
      priority: task?.priority || "Medium",
      status: task?.status || "Todo",
    });
  }, [task, reset]);

  const onSubmit = async (data) => {
    try {
      await createToDo(data);
      reset();
      onClose();
      onAddTask();
    } catch (err) {
      if (!err.response) {
        setError("root", {
          type: "manual",
          message:
            "Network error: Unable to reach the server. Please try again later.",
        });
      } else {
        setError("root", {
          type: "manual",
          message: "Something went wrong! Please try again later.",
        });
      }
    }
  };

  const onUpdate = async (data) => {
    try {
      await updateTask(data, task._id);
      reset();
      onClose();
      onAddTask();
    } catch (err) {
      if (!err.response) {
        setError("root", {
          type: "manual",
          message:
            "Network error: Unable to reach the server. Please try again later.",
        });
      } else {
        setError("root", {
          type: "manual",
          message: "Something went wrong! Please try again later.",
        });
      }
    }
  };

  const fields = [
    {
      name: "title",
      type: "text",
      placeholder: "Title",
      validation: {
        required: "A task must have a title",
        maxLength: {
          value: 40,
          message: "A title of a task is less or equal to 40 characters",
        },
      },
    },
    {
      as: "textarea",
      name: "description",
      placeholder: "Description",
      validation: {},
    },
    {
      name: "deadline",
      type: "datetime-local",
      placeholder: "Deadline",
      validation: {
        validate: (value) =>
          !value ||
          new Date(value) >= new Date() ||
          "Deadline must be in the future or null",
      },
    },
    {
      name: "category",
      as: "select",
      options: ["General", "Personal", "Work", "Study"],
      validation: {},
    },
    {
      name: "priority",
      as: "select",
      options: ["Low", "Medium", "High"],
      validation: {},
    },
    {
      name: "status",
      as: "select",
      options: ["Todo", "InProgress", "Complete"],
      validation: {},
    },
  ];

  function handleCloseBtn() {
    setSelectedTask({});
    onClose();
  }

  return (
    <div className={`TaskFormContainer ${isOpen ? "expanded" : ""}`}>
      <div className="taskform-header">
        <h1>{task?.title ? "Update Task" : "Create a New Task"}</h1>
        <div className="icon-wrapper">
          <FontAwesomeIcon
            onClick={handleCloseBtn}
            className="close-icon"
            icon={["fas", "close"]}
          />
        </div>
      </div>
      <form>
        {fields.map((field) => (
          <FormField
            key={field.name}
            as={field.as || "input"}
            type={field.type}
            placeholder={field.placeholder}
            register={register}
            name={field.name}
            validation={field.validation}
            options={field.options}
          />
        ))}
        {!task.title ? (
          <Btn onClick={handleSubmit(onSubmit)} disable={isSubmitting}>
            {isSubmitting ? "Loading..." : "Add Task"}
          </Btn>
        ) : (
          <Btn onClick={handleSubmit(onUpdate)} disable={isSubmitting}>
            {isSubmitting ? "Loading..." : "Update Task"}
          </Btn>
        )}
        {errors && Object.keys(errors).length > 0 && <Alerts errors={errors} />}
      </form>
    </div>
  );
}
