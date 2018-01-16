import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="appHeader">
        <h1 className="title is-size-1 navbar-item is-paddingless is-marginless">
          HACKER NEWS
        </h1>
        <nav className="navbar">
          <NavLink to="/" className="navbar-item" style={{ paddingLeft: 0 }}>
            Top Stories
          </NavLink>
          <NavLink to="/new" className="navbar-item">
            New
          </NavLink>
          <NavLink to="/show" className="navbar-item">
            Show
          </NavLink>
          <NavLink to="/ask" className="navbar-item">
            Ask
          </NavLink>
          <NavLink to="/jobs" className="navbar-item">
            Jobs
          </NavLink>
        </nav>
        <hr />
      </div>
    );
  }
}
