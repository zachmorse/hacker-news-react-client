import {
  FETCH_TOP_STORIES,
  FETCH_NEWEST_STORIES,
  FETCH_BEST_STORIES
} from "../actions/types";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOP_STORIES:
      console.log("FETCH_TOP_STORIES REDUCER HIT");
      return {
        ...state,
        items: action.payload
      };
    case FETCH_NEWEST_STORIES:
      console.log("FETCH_NEWEST_STORIES REDUCER HIT");
      return {
        ...state,
        items: action.payload
      };

    case FETCH_BEST_STORIES:
      console.log("FETCH_BEST_STORIES REDUCER HIT");
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
