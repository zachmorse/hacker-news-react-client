import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNewestStories } from "../actions/fetchActions";

class NewestStories extends Component {
  componentDidMount() {
    this.props.fetchNewestStories();
    // window.addEventListener("scroll", this.getScrollPos);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.moreStories) {
      // Do some stuff with loading more stories, probably
      // dispatch a redux call to load more
    }
  }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.getScrollPos);
  // }

  // getScrollPos = () => {
  //   console.log("SCROLL POSITION:", window.scrollY);
  // };

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
  { fetchNewestStories }
)(NewestStories);
