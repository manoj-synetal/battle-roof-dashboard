import axios from "axios";
import { LOG_IN, LOG_IN_FAIL, LOG_IN_SUCCESS } from ".";
import { login_url } from "../../utils/endpoints";

// login
export const authLogin = (callBack) => (dispatch) => {
  dispatch({ type: LOG_IN });
  try {
    const response = axios.post(login_url)

    dispatch({ type: LOG_IN_SUCCESS });
    callBack();
  } catch (error) {
    dispatch({ type: LOG_IN_FAIL });
  }
};
