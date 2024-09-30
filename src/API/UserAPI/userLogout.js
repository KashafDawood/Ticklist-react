import axios from "axios";

export default async function userLogout() {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}users/logout`,
      { withCredentials: true }
    );
    return response;
  } catch (err) {
    throw err;
  }
}
