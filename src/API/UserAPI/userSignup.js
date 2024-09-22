import axios from "axios";

export async function userSignup(data) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}users/signup`,
      data
    );
    return response;
  } catch (err) {
    throw err;
  }
}
