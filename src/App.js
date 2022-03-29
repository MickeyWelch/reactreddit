import logo from './assets/logo.svg';
import './App.css';
import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";

// sudo
// note to self: netjes lezen en sudo schrijven per stap. Maak documenten schoon en doe basis opzet eerst! Maak hele opdracht af. per opdracht een commit
// 1.1 doe is samen met opdrach 5
// 2. Browserrouter in index.js, Switch en Route in app.js, useParam in Subreddit, navLinks in header
// 3. install axsios, Home.js useEffect, async funstion, get axios, log, paths in jsx zetten, map door posts (vergeet de key niet)
// 4. prop in uri zetten. indelen page. Header voor home en subreddit. useHistory button. footer maken

function App() {
  return (
    <div className="App">
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
