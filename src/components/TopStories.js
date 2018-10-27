import React, { Component } from "react";

export default class TopStories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch("https://node-hnapi.herokuapp.com/news?page=1")
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }

  render() {
    const stories = this.state.posts.map((post, index) => {
      return (
        <div key={index}>
          <h3>{post.title}</h3>
        </div>
      );
    });

    return (
      <div>
        <h1>STORIES: </h1>
        {stories}
      </div>
    );
  }
}
