import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTopStories } from "../actions/fetchActions";

class TopStories extends Component {
  componentDidMount() {
    this.props.fetchTopStories();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.moreStories) {
      // Do some stuff with loading more stories, probably
      // dispatch a redux call to load more
    }
  }

  render() {
    const stories = this.props.posts.map((post, index) => {
      return (
        <div key={index}>
          <a href={post.url}>
            <h3>{post.title}</h3>
          </a>
        </div>
      );
    });

    return (
      <div>
        <div>{stories}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(
  mapStateToProps,
  { fetchTopStories }
)(TopStories);
