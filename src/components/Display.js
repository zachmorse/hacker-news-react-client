import React, { Component } from "react";

export default class Display extends Component {
  render() {
    const newStories = this.props.data.map((details, index) => {
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
            <p className="is-size-7 is-hidden-mobile">({details.domain})</p>
            <p className="is-size-7">
              {details.points} points by {details.user}, {details.time_ago}
            </p>
            <p className="is-size-7 has-text-weight-semibold has-text-grey">
              <a href={"http://node-hnapi.herokuapp.com/item/" + details.id}>
                {details.comments_count} comments
              </a>
            </p>
          </div>
        </div>
      );
    });

    return <div className="columns is-centered will-wrap">{newStories}</div>;
  }
}
