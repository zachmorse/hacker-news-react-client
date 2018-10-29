import { FETCH_TOP_STORIES } from "../actions/types";

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
    default:
      return state;
  }
}
