import React, { Component } from "react";
import axios from "axios";
// import Display from "./Display";

export default class Home extends Component {
  state = {
    storyList: [],
    storyPageSize: 30,
    pageNumber: 1,
    dataLoaded: false
  };

  getOgImageData = data => {
    axios
      .post("http://localhost:6060/get-og-images", data)
      .then(response => {
        console.log(response.data);
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
    const newStoriesUrl = "http://node-hnapi.herokuapp.com/news";
    const response = await fetch(newStoriesUrl);
    const stories = await response.json();
    await this.getOgImageData(stories);
  }

  render() {
    const { storyList } = this.state;

    if (this.state.dataLoaded === false) {
      return <div>Loading...</div>;
    }

    const newStories = storyList.map((details, index) => {
      return (
        <div
          key={index}
          id={index}
          className="column is-4 has-text-centered column-width-adjust"
        >
          <div className="fadeUp">
            <figure className="image-container">
              <a href={details.url} target="blank">
                <img
                  src={details.ogImage}
                  className="image-adjustment"
                  alt={details.title}
                />
              </a>
            </figure>
            <hr />
            <a href={details.url} target="blank">
              <p className="title is-size-5">{details.title} </p>
            </a>
            <span className="is-size-7">({details.domain})</span>
          </div>
        </div>
      );
    });

    return <div className="columns will-wrap">{newStories}</div>;
  }
}
