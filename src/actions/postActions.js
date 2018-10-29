import { FETCH_TOP_STORIES } from "./types";

export const fetchTopStories = () => dispatch => {
  console.log("FETCH TOP STORIES ACTION HIT");
  fetch("https://node-hnapi.herokuapp.com/news?page=1")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_TOP_STORIES,
        payload: data
      })
    );
};
