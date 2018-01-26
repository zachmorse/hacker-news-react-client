import React, { Component } from "react";
import Comment from "./Comment";

export default class CommentsList extends Component {
  componentDidMount() {
    let comments = this.props.comments;
    const CommentsMainList = ({ comments }) =>
      comments.map(c => <Comment key={c.id} {...c} />);

    // const Comment = ({ level, user, content, time_ago, comments }) => (
    //   <div className={`comment level-${level}`}>
    //     <h2>
    //       <span className="has-text-weight-semibold">{user}</span> // {time_ago}
    //     </h2>
    //     <p dangerouslySetInnerHTML={{ __html: content }} class="is-size-7" />

    //     {comments && (
    //       <div className="comments">
    //         <CommentsMainList comments={comments} />
    //       </div>
    //     )}
    //   </div>
    // );
  }

  render() {
    return (
      <div>
        <h1>COMMENTS SHOULD BE ALL UP IN HERE</h1>
        <CommentsMainList comments={this.props.comments} />
      </div>
    );
  }
}
