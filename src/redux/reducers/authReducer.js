import {
  LOG_IN,
  LOG_IN_FAIL,
  LOG_IN_SUCCESS,
  UPDATE_PROFILE,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
} from "../actions";

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

    // update profile
    case UPDATE_PROFILE:
      return { ...state, loading: true };
    case UPDATE_PROFILE_SUCCESS:
      return { ...state, loading: false };
    case UPDATE_PROFILE_FAIL:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default authReducer;
