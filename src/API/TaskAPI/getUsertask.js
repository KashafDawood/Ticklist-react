import axios from "axios";

export default async function getUserTask() {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}tasks/getUserTasks`,
      {
        withCredentials: true,
      }
    );

    return response;
  } catch (err) {
    throw err;
  }
}
