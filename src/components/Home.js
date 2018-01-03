import React, { Component } from "react";
import Bricks from "bricks.js";

export default class Home extends Component {
  state = {
    storyIds: [],
    storyItems: [],
    storyPageSize: 30
  };

  async componentDidMount() {
    const newStoriesUrl =
      "https://hacker-news.firebaseio.com/v0/newstories.json";
    const itemBaseUrl = "https://hacker-news.firebaseio.com/v0/item/";
    const response = await fetch(newStoriesUrl);
    const storyIds = await response.json();
    // const requests = storyIds.slice(0, this.state.storyPageSize).map(id => {
    //   return fetch(itemBaseUrl.concat(`${id}${".json"}`));
    // });

    // getting all new stories from the server
    const requests = storyIds.map(id => {
      return fetch(itemBaseUrl.concat(`${id}${".json"}`));
    });

    const results = await Promise.all(requests);
    const resultsJSON = results.map(result => result.json());
    const storyItems = await Promise.all(resultsJSON);

    // filtering out text requests, to leave only links
    const filteredStories = await storyItems.filter(
      storyItems => storyItems.url
    );
    console.log(filteredStories);

    this.setState({
      storyItems: filteredStories,
      storyIds: storyIds
    });

    console.log(this.state);
  }

  render() {
    const { storyItems } = this.state;

    if (storyItems.length !== this.state.storyPageSize) {
      return <div>Loading...</div>;
    }

    const instance = Bricks({
      container: "brick-area",
      packed: "data-packed",
      sizes: [
        { columns: 2, gutter: 10 },
        { mq: "768px", columns: 3, gutter: "10px" },
        { mq: "1280px", columns: 5, gutter: "10px" }
      ]
    });

    instance
      .on("pack", () => console.log("ALL grid items packed."))
      .on("update", () => console.log("NEW grid items packed."))
      .on("resize", size =>
        console.log(
          "The grid has been re-packed to accommodate new breakpoint."
        )
      );

    const newStories = storyItems.map((details, index) => {
      return (
        <div key={index} className="content-card">
          <div className="card-content">
            <a href={details.url} target="blank">
              <h3>{details.title}</h3>
            </a>
            <p>{details.by}</p>
            <p />
          </div>
        </div>
      );
    });

    return (
      <div className="section">
        <div className="content-area">{newStories}</div>
        {/* <div className="brick-area" /> */}
      </div>
    );
  }
}
