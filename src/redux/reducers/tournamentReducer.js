import {
  ADD_TOURNAMENT,
  ADD_TOURNAMENT_FAIL,
  ADD_TOURNAMENT_SUCCESS,
  TOURNAMENT,
  TOURNAMENT_FAIL,
  TOURNAMENT_SUCCESS,
} from "../actions";

const initialState = {
  loading: false,
  tournaments: {},
};

const tournamentReducer = (state = initialState, action) => {
  switch (action.type) {
    // get lists
    case TOURNAMENT:
      return { ...state, loading: true };
    case TOURNAMENT_SUCCESS:
      return { ...state, tournaments: action.payload, loading: false };
    case TOURNAMENT_FAIL:
      return { ...state, loading: false };

    // add tournament
    case ADD_TOURNAMENT:
      return { ...state, loading: true };
    case ADD_TOURNAMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ADD_TOURNAMENT_FAIL:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default tournamentReducer;
