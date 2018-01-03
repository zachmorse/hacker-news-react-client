import React, { Component } from "react";
import { render } from "react-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storyIds: [],
      storyItems: [],
      storyPageSize: 10
    };
  }

  statelogger = e => {
    console.log(this.state);
  };

  async componentDidMount() {
    const newStoriesUrl =
      "https://hacker-news.firebaseio.com/v0/newstories.json";
    const itemBaseUrl = "https://hacker-news.firebaseio.com/v0/item/";
    const response = await fetch(newStoriesUrl);
    const storyIds = await response.json();
    const requests = storyIds.slice(0, this.state.storyPageSize).map(id => {
      return fetch(itemBaseUrl.concat(`${id}${".json"}`));
    });

    const results = await Promise.all(requests);
    const resultsJSON = results.map(result => result.json());
    const storyItems = await Promise.all(resultsJSON);
    this.setState({
      storyItems: storyItems,
      storyIds: storyIds
    });
  }

  render() {
    const { storyItems } = this.state;

    if (storyItems.length !== this.state.storyPageSize) {
      return <div>Loading...</div>;
    }

    const newStories = storyItems.map((details, index) => {
      return (
        <div key={index}>
          <div className="container">
            <a href={details.url}>
              <h3>{details.title}</h3>
            </a>
            <p />
          </div>
        </div>
      );
    });

    return (
      <div>
        <div>{newStories}</div>
      </div>
    );
  }
}

render(<Home />, document.getElementById("root"));
