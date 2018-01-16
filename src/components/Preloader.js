import React, { Component } from "react";
import loadingGraphic from "../assets/spacesail.svg";

export default class PreLoader extends Component {
  render() {
    return (
      <div className="loading-image-format">
        <img className="image image-rotation" src={loadingGraphic} alt="" />
      </div>
    );
  }
}
