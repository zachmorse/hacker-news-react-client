import React, { Component } from "react";
import ReactBricks from "react-bricks-infinite";

export default class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bricks: this.props.stories,
      reRender: false,
      containerId: "bricks-container-app",
      hasMoreBricks: true,
      sizes: [
        { columns: 2, gutter: 2 },
        { mq: "768px", columns: 4, gutter: 2 },
        { mq: "1024px", columns: 5, gutter: 2 }
      ]
    };
  }

  render() {
    const newStories = this.props.stories.map((details, index) => {
      return (
        <div key={index} className="">
          <div className="">
            <a href={details.url} target="blank">
              <h3 className="">{details.title}</h3>
            </a>
            <p>{details.by}</p>
            <p />
          </div>
        </div>
      );
    });
    return <div className="bricks-container">{newStories}</div>;
  }
}
