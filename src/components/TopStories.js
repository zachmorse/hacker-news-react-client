import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class TopStories extends Component { 
  componentDidMount() {
    this.props.fetchPosts();    
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.moreStories) {
      // Do some stuff with loading more stories
    }
  }

  render() {
    const stories = this.props.posts.map((post, index) => {
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

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(TopStories)
