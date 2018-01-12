import React, { Component } from "react";
import axios from "axios";

import loadingGraphic from "../assets/spacesail.svg";
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
        this.setState({
          storyList: response.data,
          dataLoaded: true
        });
        return response.data;
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  async componentDidMount() {
    const newStoriesUrl = "https://node-hnapi.herokuapp.com/news";
    const response = await fetch(newStoriesUrl);
    const stories = await response.json();
    await this.getOgImageData(stories);
  }

  render() {
    if (!this.state.dataLoaded) {
      return (
        <div className="loading-image-format">
          <img className="image image-rotation" src={loadingGraphic} alt="" />
        </div>
      );
    }
    return <Display data={this.state.storyList} />;
  }
}
