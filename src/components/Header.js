import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <section className="Hero">
          <div className="hero-body">
            <h1 className="title">HACKER NEWS FEED</h1>
          </div>
        </section>
        <div>
          <NavLink to="/">News</NavLink>
          {/* <NavLink to="/">Comments</NavLink>
        <NavLink to="/">Show</NavLink>
        <NavLink to="/">Ask</NavLink>
        <NavLink to="/">Jobs</NavLink> */}
        </div>
        <hr />
      </div>
    );
  }
}
