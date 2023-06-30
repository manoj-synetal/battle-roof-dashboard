import { LOG_IN, LOG_IN_FAIL, LOG_IN_SUCCESS } from ".";

// login
export const authLogin = (callBack) => (dispatch) => {
  dispatch({ type: LOG_IN });
  try {
    dispatch({ type: LOG_IN_SUCCESS });
    callBack();
  } catch (error) {
    dispatch({ type: LOG_IN_FAIL });
  }
};
