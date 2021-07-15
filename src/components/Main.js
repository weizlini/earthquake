import React from "react";
import { useSiteData } from "../contexts/DataContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EarthquakesGrid from "./EarthquakesGrid";
import EarthquakeDetail from "./EarthquakeDetail";
import Profile from "./Profile";
import Loader from "./Loader";
const Main = () => {
  const { loading } = useSiteData();
  return (
    <main>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </main>
  );
};

export default Main;
