import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="appHeader">
        <NavLink to="/best">
          <h1 className="title is-size-1 navbar-item is-paddingless is-marginless">
            HACKER
            <span style={{ color: "#ed6f2e" }}> NEWS </span>
          </h1>
        </NavLink>
        <nav className="navbar">
          <div className="navbar-brand">
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
          </div>
        </nav>
        <hr />
      </div>
    );
  }
}
