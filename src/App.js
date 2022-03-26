import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";

// sudo
// note to self: netjes lezen en sudo schrijven per stap. Maak documenten schoon en doe basis opzet eerst! Maak hele opdracht af
// 1.1 doe is samen met opdrach 5
// 2. Browserrouter in index.js, Switch en Route in app.js, useParam in Subreddit, navLinks in header
// 3. useEffect, async funstion, get axios, log, paths in jsx zetten, map door posts


function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/subreddit/:subredditId">
                <Subreddit />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
