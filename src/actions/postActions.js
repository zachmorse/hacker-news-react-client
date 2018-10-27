import axios from "axios";

import { FETCH_POSTS } from "./types";

// function getOgImageData(data) {
//   let startTime = new Date();
//   axios
//     .post("http://localhost:6060/get-og-images/", data)
//     .then(response => {
//       console.log();
//       console.log("NODE SERVER RESPONSE:", response);
//       this.setState({
//         storyList: response.data,
//         dataLoaded: true
//       });
//       console.log("UPDATED STATE:", this.state);
//       console.log(`ELAPSED TIME: ${new Date() - startTime} ms`);
//       return response.data;
//     })
//     .catch(error => {
//       console.log("error", error);
//     });
// }

export const fetchPosts = () => dispatch => {
  console.log("ACTION REDUCER HIT");
  fetch("https://node-hnapi.herokuapp.com/news?page=1")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_POSTS,
        payload: data
      })
    );

  // async() {
  // 	const topStoriesUrl = "https://node-hnapi.herokuapp.com/news?page=1";
  // 	const response = await fetch(topStoriesUrl);
  // 	const stories = await response.json();
  // 	await this.getOgImageData(stories);
  // 	document.title = "Top Stories // Hacker News";
  // }
};
