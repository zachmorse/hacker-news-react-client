import React, { Component } from "react";

// import Display from "./Display";

export default class Home extends Component {
  state = {
    storyIds: [],
    storyList: [],
    storyPageSize: 30,
    pageNumber: 1
  };

  async componentDidMount() {
    const newStoriesUrl = "http://node-hnapi.herokuapp.com/news";
    const response = await fetch(newStoriesUrl);
    const storyList = await response.json();
    this.setState({
      storyList: storyList
    });
    console.log(this.state);
  }

  // async componentDidMount() {
  //   const newStoriesUrl =
  //     "https://hacker-news.firebaseio.com/v0/newstories.json";
  //   const itemBaseUrl = "https://hacker-news.firebaseio.com/v0/item/";
  //   const response = await fetch(newStoriesUrl);
  //   const storyIds = await response.json();
  //   // const requests = storyIds.slice(0, this.state.storyPageSize).map(id => {
  //   //   return fetch(itemBaseUrl.concat(`${id}${".json"}`));
  //   // });

  //   // getting all new stories from the server
  //   const requests = storyIds.map(id => {
  //     return fetch(itemBaseUrl.concat(`${id}${".json"}`));
  //   });

  //   const results = await Promise.all(requests);
  //   const resultsJSON = results.map(result => result.json());
  //   const storyItems = await Promise.all(resultsJSON);

  //   // filtering out text requests, to leave only links
  //   const filteredStories = await storyItems.filter(
  //     storyItems => storyItems.url
  //   );
  //   console.log(filteredStories);

  //   this.setState({
  //     storyItems: filteredStories,
  //     storyIds: storyIds
  //   });

  //   console.log(this.state);
  // }

  render() {
    const { storyList } = this.state;

    if (storyList.length < this.state.storyPageSize) {
      return <div>Loading...</div>;
    }

    const newStories = storyList.map((details, index) => {
      return (
        <div
          key={index}
          id={index}
          className="column is-4 has-text-centered column-width-adjust"
        >
          <a href={details.url} target="blank">
            <p className="title is-size-5">{details.title} </p>
          </a>
          <span className="is-size-7">({details.domain})</span>
        </div>
      );
    });

    return <div className="columns will-wrap">{newStories}</div>;
  }
}
