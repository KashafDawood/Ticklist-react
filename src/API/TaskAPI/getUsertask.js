import axios from "axios";

export default async function getUserTask(query) {
  try {
    let url = `tasks/getUserTasks?status=${query}`;
    if (query === "All") {
      url = "tasks/getUserTasks";
    }
    const response = await axios.get(`${process.env.REACT_APP_API_URL}${url}`, {
      withCredentials: true,
    });

    return response;
  } catch (err) {
    throw err;
  }
}
