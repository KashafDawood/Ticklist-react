import axios from "axios";

export default async function updateTask(data, id) {
  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_API_URL}tasks/${id}`,
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
