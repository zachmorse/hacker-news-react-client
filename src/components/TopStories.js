import React, { Component } from "react";
import axios from "axios";

import Preloader from "./Preloader";
import Display from "./Display";

export default class TopStories extends Component {
  state = {
    storyList: [],
    storyPageSize: 30,
    pageNumber: 1,
    dataLoaded: false
  };

  getOgImageData = data => {
    axios
      // .post("https://ogs-server.herokuapp.com/get-og-images/", data)
      .post("http://localhost:6060/get-og-images/", data)
      .then(response => {
        console.log(response);
        this.setState({
          storyList: response.data,
          dataLoaded: true
        });
        console.log(this.state);
        return response.data;
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  async componentDidMount() {
    const topStoriesUrl = "https://node-hnapi.herokuapp.com/news";
    const response = await fetch(topStoriesUrl);
    const stories = await response.json();
    await this.getOgImageData(stories);
    document.title = "Top Stories // Hacker News";
  }

  render() {
    if (!this.state.dataLoaded) {
      return (
        <div>
          <Preloader />
        </div>
      );
    }
    return (
      <div>
        <Display data={this.state.storyList} />
      </div>
    );
  }
}
