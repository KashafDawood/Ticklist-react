import axios from "axios";

export default async function userLogin(data) {
  try {
    const response = await axios.post(
      "http://127.0.0.1:1000/api/v1/users/login",
      data,
      { withCredentials: true }
    );
    return response;
  } catch (err) {
    throw err;
  }
}
