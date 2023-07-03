import axios from "axios";
import {
  ADD_TOURNAMENT,
  ADD_TOURNAMENT_FAIL,
  ADD_TOURNAMENT_SUCCESS,
  DELETE_GAME,
  GAME_LIST,
  GAME_LIST_FAIL,
  GAME_LIST_SUCCESS,
  DELETE_GAME_SUCCESS,
  DELETE_GAME_FAIL,
  UPDATE_GAME_STATUS,
  UPDATE_GAME_STATUS_SUCCESS,
  UPDATE_GAME_STATUS_FAIL,
  GAME_TYPE_LIST,
  GAME_TYPE_LIST_SUCCESS,
  GAME_TYPE_LIST_FAIL,
  ADD_GAME,
  ADD_GAME_SUCCESS,
  ADD_GAME_FAIL,
  UPDATE_GAME,
  UPDATE_GAME_SUCCESS,
  UPDATE_GAME_FAIL,
} from ".";
import {
  add_Tournament,
  add_game,
  delete_Tournament,
  delete_game,
  game__type_list,
  game_list,
  game_status,
  update_game,
} from "../../utils/endpoints";
import { toast } from "react-hot-toast";

// game list
export const getGames = () => async (dispatch) => {
  dispatch({ type: GAME_LIST });
  try {
    const response = await axios.get(game_list, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
      },
    });
    const { data } = response.data;
    dispatch({ type: GAME_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GAME_LIST_FAIL });
  }
};

// add game
export const addGame = (payload, callBack) => async (dispatch) => {
  dispatch({ type: ADD_GAME });
  try {
    const response = await axios.post(add_game, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
      },
    });
    const { message } = response.data;
    dispatch({ type: ADD_GAME_SUCCESS });
    dispatch(getGames());
    toast.success(message);

    callBack();
  } catch (error) {
    dispatch({ type: ADD_GAME_FAIL });
    if (error.response.status === 500) {
      toast.error(error.message);
    } else {
      const { msg } = error?.response?.data?.error?.errors?.[0];
      toast.error(msg);
    }
  }
};

// update game
export const updateGame = (game_id, payload, callBack) => async (dispatch) => {
  dispatch({ type: UPDATE_GAME });
  try {
    const response = await axios.post(`${update_game}/${game_id}`, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
      },
    });
    const { message } = response.data;
    dispatch({ type: UPDATE_GAME_SUCCESS });
    dispatch(getGames());
    toast.success(message);

    callBack();
  } catch (error) {
    dispatch({ type: UPDATE_GAME_FAIL });
    if (error?.response?.status === 500) {
      toast.error(error.message);
    } else {
      const { msg } = error?.response?.data?.error?.errors?.[0];
      toast.error(msg);
    }
  }
};

// delet game
export const deleteGame = (game_id, callBack) => async (dispatch) => {
  dispatch({ type: DELETE_GAME });
  try {
    const response = await axios.get(`${delete_game}/${game_id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
      },
    });
    const { message } = response.data;
    dispatch({ type: DELETE_GAME_SUCCESS });
    dispatch(getGames());
    toast.success(message);

    callBack();
  } catch (error) {
    dispatch({ type: DELETE_GAME_FAIL });

    if (error.response.status === 500) {
      toast.error(error.message);
    } else {
      const { message } = error?.response?.data;
      toast.error(message);
    }
    callBack();
  }
};

// update game status
export const updateGameStatus = (game_id, payload) => async (dispatch) => {
  dispatch({ type: UPDATE_GAME_STATUS });
  try {
    const response = await axios.post(`${game_status}/${game_id}`, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
      },
    });
    // const { message } = response.data;
    dispatch(getGames());
    dispatch({ type: UPDATE_GAME_STATUS_SUCCESS });
    // toast.success(message);
  } catch (error) {
    dispatch({ type: UPDATE_GAME_STATUS_FAIL });

    if (error.response.status === 500) {
      toast.error(error.message);
    } else {
      const { message } = error?.response?.data;
      toast.error(message);
    }
  }
};

// -------------------------------- Game Types --------------------------------//

// game types list
export const getGameTypes = () => async (dispatch) => {
  dispatch({ type: GAME_TYPE_LIST });
  try {
    const response = await axios.get(game__type_list, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
      },
    });
    const { data } = response.data;
    dispatch({ type: GAME_TYPE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GAME_TYPE_LIST_FAIL });
  }
};
