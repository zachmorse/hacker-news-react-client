import {
  FETCH_TOP_STORIES,
  FETCH_NEWEST_STORIES,
  FETCH_BEST_STORIES
} from "./types";

export const fetchTopStories = () => dispatch => {
  console.log("FETCH TOP STORIES ACTION HIT");
  fetch("http://localhost:6060/topstories")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_TOP_STORIES,
        payload: data
      })
    );
};

export const fetchNewestStories = () => dispatch => {
  console.log("FETCH NEWEST STORIES ACTION HIT");
  fetch("http://localhost:6060/newest")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_NEWEST_STORIES,
        payload: data
      })
    );
};

export const fetchBestStories = () => dispatch => {
  console.log("FETCH BEST STORIES ACTION HIT");
  fetch("http://localhost:6060/best")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_BEST_STORIES,
        payload: data
      })
    );
};
