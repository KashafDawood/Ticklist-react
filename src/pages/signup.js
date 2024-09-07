import InputField from "../components/inputField";
import Btn from "../components/button";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Helper function to validate the email format
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  // Form validation function
  function validateForm() {
    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
    }

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

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Show errors in the UI
    } else {
      // If no validation errors, proceed with form submission
      setErrors({});
      console.log("Form submit", name, email, password, confirmPassword);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="SignupContainer">
        <h1>Signup</h1>
        <InputField
          type={"text"}
          value={name}
          placeholder={"Name"}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        <InputField
          type={"email"}
          value={email}
          placeholder={"Email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <InputField
          type={"password"}
          value={password}
          placeholder={"Password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        <InputField
          type={"password"}
          value={confirmPassword}
          placeholder={"Confirm Password"}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword}</p>
        )}

        <Btn>Signup</Btn>
      </div>
    </form>
  );
}
