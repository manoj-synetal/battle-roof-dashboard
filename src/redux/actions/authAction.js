import axios from "axios";
import {
  LOG_IN,
  LOG_IN_FAIL,
  LOG_IN_SUCCESS,
  UPDATE_PROFILE,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
} from ".";
import { login_url, update_profile } from "../../utils/endpoints";
import { toast } from "react-hot-toast";

// login
export const authLogin = (payload, callBack) => async (dispatch) => {
  dispatch({ type: LOG_IN });
  try {
    const response = await axios.post(login_url, payload);
    const { token, message, user } = response.data;
    dispatch({ type: LOG_IN_SUCCESS });

    toast.success(message);
    localStorage.setItem("AccessToken", token);
    localStorage.setItem("Admin", JSON.stringify(user));

    callBack();
  } catch (error) {
    const { message } = error?.response?.data;
    dispatch({ type: LOG_IN_FAIL });
    toast.error(message);
  }
};

// updateProfile
export const updateProfile = (payload, callBack) => async (dispatch) => {
  dispatch({ type: UPDATE_PROFILE });
  try {
    const response = await axios.post(update_profile, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
      },
    });
    const { message } = response.data;
    dispatch({ type: UPDATE_PROFILE_SUCCESS });
    toast.success(message);

    callBack();
  } catch (error) {
    const { msg } = error?.response?.data?.error?.errors?.[0];
    dispatch({ type: UPDATE_PROFILE_FAIL });
    toast.error(msg);
  }
};
