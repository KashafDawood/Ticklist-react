import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Btn, InputField } from "../../components/Utility";
import Alerts from "../../components/Alerts";
import axios from "axios";
import cookies from "js-cookies";

export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // const passwordValidationPattern =
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

  const onsubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:1000/api/v1/users/login",
        data,
        { withCredentials: true }
      );
      if (response.status === 200) {
        cookies.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.data.user));
        window.location.href = "/dashboard";
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
      } else if (err.status === 401) {
        setError("root", {
          type: "manual",
          message: err.response.data.message,
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
          message: "Password must be 8 charactors long",
        },
        // pattern: {
        //   value: passwordValidationPattern,
        //   message: `Password must be at least 8 characters,
        //     include an uppercase letter,
        //     a lowercase letter, a number,
        //     and a special character`,
        // },
      },
    },
  ];

  return (
    <div className="SignupContainer">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onsubmit)}>
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
          {isSubmitting ? "Loading..." : "Login"}
        </Btn>
        <div className="formLinks">
          <Link to={"/signup"}>Create a new account</Link>
          <Link to={"/forgetPassword"}>Forget Password</Link>
        </div>
        {errors && Object.keys(errors).length > 0 && <Alerts errors={errors} />}
      </form>
    </div>
  );
}
