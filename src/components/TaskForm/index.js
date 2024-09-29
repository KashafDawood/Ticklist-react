import { useForm } from "react-hook-form";
import { Btn, FormField } from "../../components/Utility"; // Assuming FormField is used for buttons/select options
import Alerts from "../../components/Alerts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

export default function TaskForm({ isOpen, onClose, task = {} }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    // setValue, // Used for pre-filling values
  } = useForm({
    defaultValues: {
      title: task.title || "",
      description: task.description || "",
      deadline: task.deadline || "",
      category: task.category || "General",
      priority: task.priority || "Medium",
      status: task.status || "Todo",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  // Define the fields for the form
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
      as: "select", // Now as a button-like select option
      options: ["General", "Personal", "Work", "Study"],
      validation: {},
    },
    {
      name: "priority",
      as: "select", // Now as a button-like select option
      options: ["Low", "Medium", "High"],
      validation: {},
    },
    {
      name: "status",
      as: "select", // Now as a button-like select option
      options: ["Todo", "InProgress", "Complete"],
      validation: {},
    },
  ];

  return (
    <div className={`TaskFormContainer ${isOpen ? "expanded" : ""}`}>
      <div className="taskform-header">
        <h1>{task.title ? "Update Task" : "Create a New Task"}</h1>
        <div className="icon-wrapper">
          <FontAwesomeIcon
            onClick={onClose}
            className="close-icon"
            icon={["fas", "close"]}
          />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <FormField
            key={field.name}
            as={field.as || "input"}
            type={field.type}
            placeholder={field.placeholder}
            register={register}
            name={field.name}
            validation={field.validation}
            options={field.options} // For select fields, these will be buttons
          />
        ))}
        <Btn disable={isSubmitting}>
          {isSubmitting
            ? "Loading..."
            : task.title
            ? "Update Task"
            : "Add Task"}
        </Btn>
        {errors && Object.keys(errors).length > 0 && <Alerts errors={errors} />}
      </form>
    </div>
  );
}
