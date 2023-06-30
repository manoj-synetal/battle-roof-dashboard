import axios from "axios";
import { LOG_IN, LOG_IN_FAIL, LOG_IN_SUCCESS } from ".";
import { login_url } from "../../utils/endpoints";
import { toast } from "react-hot-toast";

// login
export const authLogin = (payload, callBack) => async (dispatch) => {
  dispatch({ type: LOG_IN });
  try {
    const response = await axios.post(login_url, payload);
    const { token, message, user } = response.data;
    dispatch({ type: LOG_IN_SUCCESS, payload: user });

    toast.success(message);
    localStorage.setItem("AccessToken", token);
    localStorage.setItem("Admin", JSON.stringify(user));

    callBack();
  } catch (error) {
    const { message } = error.response.data;
    dispatch({ type: LOG_IN_FAIL });
    toast.error(message);
  }
};
