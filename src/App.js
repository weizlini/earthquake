import React, { useContext, useState, useEffect } from "react";
import { DataProvider } from "./contexts/DataContext";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EarthquakesGrid from "./components/EarthquakesGrid";
import EarthquakeDetail from "./components/EarthquakeDetail";
import Profile from "./components/Profile";
const App = () => {
  return (
    <Router>
      <DataProvider>
        <Nav />
        <main>
          <Switch>
            <Route exact path="/">
              <EarthquakesGrid />
            </Route>
            <Route path="/earthquake/:id">
              <EarthquakeDetail />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </main>
      </DataProvider>
    </Router>
  );
};
export default App;
