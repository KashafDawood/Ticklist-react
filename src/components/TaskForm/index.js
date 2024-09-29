import { useForm } from "react-hook-form";
import { Btn, InputField } from "../../components/Utility";
import Alerts from "../../components/Alerts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function TaskForm({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm();
  const navigate = useNavigate();

  // const onSubmit = async (data) => {
  //   try {
  //     const response = await createTask(data);
  //     if (response.status === 201) {
  //       // Navigate to some task list page or show a success message
  //       navigate("/tasks");
  //     }
  //     reset();
  //   } catch (err) {
  //     if (!err.response) {
  //       // Network or other error (e.g., no response from server)
  //       setError("root", {
  //         type: "manual",
  //         message:
  //           "Network error: Unable to reach the server. Please try again later.",
  //       });
  //     } else {
  //       // Handle API response errors
  //       setError("root", {
  //         type: "manual",
  //         message: "Something went wrong! Please try again later.",
  //       });
  //     }
  //   }
  // };

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
      name: "category",
      as: "select",
      options: ["General", "Personal", "Work", "Study"],
      validation: {
        required: "Category is required",
      },
    },
    {
      name: "priority",
      as: "select",
      options: ["Low", "Medium", "High"],
      validation: {
        required: "Priority is required",
      },
    },
    {
      name: "status",
      as: "select",
      options: ["Todo", "InProgress", "Complete"],
      validation: {
        required: "Status is required",
      },
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
  ];

  return (
    <div className={`TaskFormContainer ${isOpen ? "expanded" : ""}`}>
      <div className="taskform-header">
        <h1>Create a New Task</h1>
        <div className="icon-wrapper">
          <FontAwesomeIcon
            onClick={onClose}
            className="close-icon"
            icon={["fas", "close"]}
          />
        </div>
      </div>
      <form onSubmit={handleSubmit()}>
        {fields.map((field) => (
          <InputField
            key={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            register={register}
            validation={field.validation}
            options={field.options} // For select fields
          />
        ))}
        <Btn disable={isSubmitting}>
          {isSubmitting ? "Loading..." : "Add Task"}
        </Btn>
        {errors && Object.keys(errors).length > 0 && <Alerts errors={errors} />}
      </form>
    </div>
  );
}
