import {
  ADD_GAME,
  ADD_GAME_FAIL,
  ADD_GAME_SUCCESS,
  GAME_LIST,
  GAME_LIST_FAIL,
  GAME_LIST_SUCCESS,
  GAME_TYPE_LIST,
  GAME_TYPE_LIST_FAIL,
  GAME_TYPE_LIST_SUCCESS,
} from "../actions";

const initialState = {
  loading: false,
  games: {},
  gameTypes: {},
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    // game lists
    case GAME_LIST:
      return { ...state, loading: true };
    case GAME_LIST_SUCCESS:
      return { ...state, games: action.payload, loading: false };
    case GAME_LIST_FAIL:
      return { ...state, loading: false };

    // game types lists
    case GAME_TYPE_LIST:
      return { ...state, loading: true };
    case GAME_TYPE_LIST_SUCCESS:
      return { ...state, gameTypes: action.payload, loading: false };
    case GAME_TYPE_LIST_FAIL:
      return { ...state, loading: false };

    // add game
    case ADD_GAME:
      return { ...state, loading: true };
    case ADD_GAME_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ADD_GAME_FAIL:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default gameReducer;
