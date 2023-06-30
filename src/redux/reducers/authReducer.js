import { LOG_IN, LOG_IN_FAIL, LOG_IN_SUCCESS } from "../actions";

const initialState = {
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // login
    case LOG_IN:
      return { ...state, loading: true };
    case LOG_IN_SUCCESS:
      return { ...state, loading: false };
    case LOG_IN_FAIL:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default authReducer;
