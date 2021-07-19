import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Movies from "./components/Movies";

const Routes = () => {
  const [value, setValue] = useState("Fast&FuriousPresents:Hobbs&Shaw");
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header value={value} setValue={setValue} />
          <Movies value={value} />
        </Route>
        <Route exact path="/favorites">
          <Header value={value} setValue={setValue} />
        </Route>
        <Route path="/movie/:id">
          <Movie />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
