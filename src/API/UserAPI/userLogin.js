import axios from "axios";

export default async function userLogin(data) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}users/login`,
      data,
      { withCredentials: true }
    );
    return response;
  } catch (err) {
    throw err;
  }
}
