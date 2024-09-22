import axios from "axios";

export async function userSignup(data) {
  try {
    const response = await axios.post(
      "http://127.0.0.1:1000/api/v1/users/signup",
      data
    );
    return response;
  } catch (err) {
    throw err;
  }
}
