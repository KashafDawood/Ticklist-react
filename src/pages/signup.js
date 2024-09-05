import InputField from "../components/inputField";
import Btn from "../components/button";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submit");
    console.log(name, email, password, confirmPassword);
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
        <InputField
          type={"email"}
          value={email}
          placeholder={"Email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type={"password"}
          value={password}
          placeholder={"Password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          type={"password"}
          value={confirmPassword}
          placeholder={"Confirm Password"}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Btn>Signup</Btn>
      </div>
    </form>
  );
}
