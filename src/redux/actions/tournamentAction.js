import axios from "axios";
import {
  ADD_TOURNAMENT,
  ADD_TOURNAMENT_FAIL,
  ADD_TOURNAMENT_SUCCESS,
  DELETE_TOURNAMENT,
  DELETE_TOURNAMENT_FAIL,
  DELETE_TOURNAMENT_SUCCESS,
  TOURNAMENT,
  TOURNAMENT_FAIL,
  TOURNAMENT_SUCCESS,
  UPDATE_TOUR_STATUS,
  UPDATE_TOUR_STATUS_FAIL,
  UPDATE_TOUR_STATUS_SUCCESS,
} from ".";
import {
  add_Tournament,
  delete_Tournament,
  getTournament_list,
  tour_status,
} from "../../utils/endpoints";
import { toast } from "react-hot-toast";

// tournament list
export const getTournaments = () => async (dispatch) => {
  dispatch({ type: TOURNAMENT });
  try {
    const response = await axios.get(getTournament_list, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
      },
    });
    const { data } = response.data;
    dispatch({ type: TOURNAMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TOURNAMENT_FAIL });
  }
};

// add tournament
export const addTournament = (payload, callBack) => async (dispatch) => {
  dispatch({ type: ADD_TOURNAMENT });
  try {
    const response = await axios.post(add_Tournament, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
      },
    });
    const { message } = response.data;
    dispatch({ type: ADD_TOURNAMENT_SUCCESS });
    toast.success(message);

    callBack();
  } catch (error) {
    dispatch({ type: ADD_TOURNAMENT_FAIL });
    if (error.response.status === 500) {
      toast.error(error.message);
    } else {
      const { msg } = error?.response?.data?.error?.errors?.[0];
      toast.error(msg);
    }
  }
};

// delete tournament
export const deleteTournament = (tour_id, callBack) => async (dispatch) => {
  dispatch({ type: DELETE_TOURNAMENT });
  try {
    const response = await axios.get(`${delete_Tournament}/${tour_id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
      },
    });
    const { message } = response.data;
    dispatch({ type: DELETE_TOURNAMENT_SUCCESS });
    dispatch(getTournaments());
    toast.success(message);

    callBack();
  } catch (error) {
    dispatch({ type: DELETE_TOURNAMENT_FAIL });
    if (error.response.status === 500) {
      toast.error(error.message);
    } else {
      const { msg } = error?.response?.data?.error?.errors?.[0];
      toast.error(msg);
    }
  }
};

// update tournament status
export const updateTourStatus = (tour_id, payload) => async (dispatch) => {
  dispatch({ type: UPDATE_TOUR_STATUS });
  try {
    const response = await axios.post(`${tour_status}/${tour_id}`, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
      },
    });
    // const { message } = response.data;
    dispatch(getTournaments());
    dispatch({ type: UPDATE_TOUR_STATUS_SUCCESS });
    // toast.success(message);
  } catch (error) {
    dispatch({ type: UPDATE_TOUR_STATUS_FAIL });

    if (error.response.status === 500) {
      toast.error(error.message);
    } else {
      const { message } = error?.response?.data;
      toast.error(message);
    }
  }
};
