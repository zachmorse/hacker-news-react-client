import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTopStories } from "../actions/postActions";

class TopStories extends Component {
  componentDidMount() {
    this.props.fetchTopStories();
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
          <a href={post.url}>
            <h3>{post.title}</h3>
          </a>
          <p>
            {post.points} {post.time_ago} by {post.user}
          </p>
        </div>
      );
    });

    return <div>{stories}</div>;
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(
  mapStateToProps,
  { fetchTopStories }
)(TopStories);
