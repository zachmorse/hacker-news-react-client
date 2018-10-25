import React, { Component } from "react";
// import CommentModal from "./CommentModal";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false,
      modalTarget: ""
    };
  }

  launchModal = e => {
    this.setState({
      modalActive: true,
      modalTarget: e.target.id
    });
  };

  closeModal = e => {
    this.setState({
      modalActive: false,
      modalTarget: "http://node-hnapi.herokuapp.com/item/16205776"
    });
  };

  render() {
    const stories = this.props.data.map((details, index) => {
      return (
        <div
          key={index}
          id={index}
          className="column is-3-desktop is-4-tablet column-width-adjust"
        >
          <div className="fadeUp has-text-centered has-text-left-mobile">
            <figure className="flex is-hidden-mobile">
              <a href={details.url} target="blank">
                <img
                  src={details.ogImage}
                  className="image-adjustment"
                  alt={details.title}
                />
              </a>
            </figure>
            <a href={details.url} target="blank">
              <p className="title is-size-5">{details.title} </p>
            </a>
            <p
              className="is-size-7 is-hidden-mobile"
              onClick={this.launchModal}
            >
              ({details.domain})
            </p>
            <p className="is-size-7">
              {details.points} points by {details.user}, {details.time_ago}
            </p>
            <p
              className="is-size-7 has-text-weight-semibold has-text-grey"
              id={"http://node-hnapi.herokuapp.com/item/" + details.id}
              // onClick={this.launchModal}
            >
              <a href={"http://node-hnapi.herokuapp.com/item/" + details.id}>
                {details.comments_count} comments
              </a>
              {/* {details.comments_count} comments */}
            </p>
          </div>
          <div
            className={!this.state.modalActive ? "modal" : "modal is-active"}
            id="modal"
          >
            <div className="modal-background" onClick={this.closeModal} />
            <div className="modal-content">
              {/* <CommentModal url={this.state.modalTarget} /> */}
              <h1>modal stuff</h1>
            </div>
            <button
              className="modal-close is-large"
              onClick={this.closeModal}
            />
          </div>
        </div>
      );
    });

    return <div className="columns is-centered will-wrap">{stories}</div>;
  }
}

export default Display;
