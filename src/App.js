import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "./styles/App.css";

import Mainlayout from "./components/Mainlayout";
import TopStories from "./components/TopStories";
import NewestStories from "./components/NewestStories";
import BestStories from "./components/BestStories";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <Mainlayout>
              <Switch>
                <Route exact path="/" component={TopStories} />
                <Route path="/new" component={NewestStories} />
                <Route path="/best" component={BestStories} />
              </Switch>
            </Mainlayout>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
