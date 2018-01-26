import React, { Component } from "react";
import "../styles/App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import TopStories from "./TopStories";
import Mainlayout from "./Mainlayout";
import CommentModal from "./CommentModal";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <BrowserRouter>
            <Mainlayout>
              <Switch>
                <Route exact path="/" component={TopStories} />
                <Route path="/new" component={CommentModal} />
              </Switch>
            </Mainlayout>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
