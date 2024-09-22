import { useForm } from "react-hook-form";
import { Btn, InputField } from "../../components/Utility";
import Alerts from "../../components/Alerts";
import { useNavigate } from "react-router-dom";
import { userSignup } from "./../../API/UserAPI/userSignup";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm();
  const navigate = useNavigate();

  // const passwordValidationPattern =
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

  const onSubmit = async (data) => {
    try {
      const response = await userSignup(data);
      if (response.status === 201) {
        navigate("/login");
      }
      reset();
    } catch (err) {
      if (!err.response) {
        // Network or other error (e.g., no response from server)
        setError("root", {
          type: "manual",
          message:
            "Network error: Unable to reach the server. Please try again later.",
        });
      } else if (err.response.data.error) {
        // API response error
        if (err.response.data.error.code === 11000) {
          setError("email", {
            type: "manual",
            message: "User already exists. Please login.",
          });
        } else {
          setError("root", {
            type: "manual",
            message: "Something went wrong! Please try again later.",
          });
        }
      }
    }
  };

  const fields = [
    {
      name: "name",
      type: "text",
      placeholder: "Name",
      validation: { required: "Name is required" },
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      validation: {
        required: "Email is required",
        pattern: { value: /\S+@\S+\.\S+/, message: "Invalid Email Address" },
      },
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      validation: {
        required: "Password is required",
        minLength: {
          value: 8,
          message: "Password must be 8 characters long",
        },
        // Uncomment and use the pattern if needed
        // pattern: {
        //   value: passwordValidationPattern,
        //   message: `Password must be at least 8 characters,
        //     include an uppercase letter,
        //     a lowercase letter, a number,
        //     and a special character`,
        // },
      },
    },
    {
      name: "passwordConfirm",
      type: "password",
      placeholder: "Confirm Password",
      validation: {
        required: "Confirm password is required",
        validate: (value, context) =>
          value === context.password || "Passwords do not match",
      },
    },
  ];

  return (
    <div className="SignupContainer">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <InputField
            key={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            register={register}
            validation={field.validation}
          />
        ))}
        <Btn disable={isSubmitting}>
          {isSubmitting ? "Loading..." : "Signup"}
        </Btn>
        {errors && Object.keys(errors).length > 0 && <Alerts errors={errors} />}
      </form>
    </div>
  );
}
