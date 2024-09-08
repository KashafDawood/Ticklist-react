import { useNavigate } from "react-router-dom";
import { Btn, InputField } from "../components/utility";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

library.add(fas);

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function resetForm() {
    setEmail("");
    setPassword("");
  }

  // Helper function to validate the email format
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  // Form validation function
  function validateForm() {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password should be at least 8 characters";
    }

    return newErrors;
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    const newError = {};

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Show errors in the UI
    } else {
      // If no validation errors, proceed with form submission
      resetForm();
      setErrors({});
      axios
        .post("http://127.0.0.1:1000/api/v1/users/login", {
          email,
          password,
        })
        .then((response) => {
          if (response.status === 201) {
            newError.responseSuccess = "You logged In successfully";
            setErrors(newError);
            navigate("/dashboard");
          }
        })
        .catch((err) => {
          if (err) {
            newError.responseError =
              "Something went wrong! Please try agian later";
          }
          setErrors(newError);
        });
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="SignupContainer">
        <h1>Login</h1>

        <InputField
          type={"email"}
          value={email}
          placeholder={"Email"}
          onChange={(e) => {
            setEmail(e.target.value);
            delete errors.email;
          }}
        />

        <InputField
          type={"password"}
          value={password}
          placeholder={"Password"}
          onChange={(e) => {
            setPassword(e.target.value);
            delete errors.password;
          }}
        />

        <Btn>Login</Btn>
        {errors && Object.keys(errors).length > 0 && (
          <ErrorMessage errors={errors} />
        )}
      </div>
    </form>
  );
}

function ErrorMessage({ errors }) {
  return (
    <div>
      {errors &&
        Object.keys(errors).map((key) => (
          <p
            className={
              errors.responseSuccess
                ? "successMessageContainer"
                : "errorMessageContainer"
            }
            key={key}
          >
            <FontAwesomeIcon
              className={
                errors.responseSuccess ? "icon icon-good" : "icon icon-danger"
              }
              icon={
                errors.responseSuccess
                  ? ["fas", "circle-check"]
                  : ["fas", "triangle-exclamation"]
              }
            />
            {errors[key]}
          </p>
        ))}
    </div>
  );
}
