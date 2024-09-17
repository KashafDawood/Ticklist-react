import axios from "axios";

export default async function getUserData() {
  const userId = JSON.parse(localStorage.getItem("userId"));

  if (!userId) {
    return;
  }

  const response = await axios.get(
    `http://127.0.0.1:1000/api/v1/users/${userId}`
  );

  return response.data.data;
}
