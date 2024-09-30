import axios from "axios";

export default async function createToDo(data) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}tasks/`,
      data,
      {
        withCredentials: true,
      }
    );

    return response;
  } catch (err) {
    throw err;
  }
}
