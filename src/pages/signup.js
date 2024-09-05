import InputField from "../components/inputField";
import Btn from "../components/button";

export default function Signup() {
  return (
    <div className="SignupContainer">
      <h1>Signup</h1>
      <InputField type={"text"} placeholder={"Name"} />
      <InputField type={"email"} placeholder={"Email"} />
      <InputField type={"password"} placeholder={"Password"} />
      <InputField type={"password"} placeholder={"Confirm Password"} />
      <Btn>Signup</Btn>
    </div>
  );
}
