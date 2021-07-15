import React, { useContext, useState, useEffect } from "react";
import { DataProvider } from "./contexts/DataContext";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EarthquakesGrid from "./components/EarthquakesGrid";
import EarthquakeDetail from "./components/EarthquakeDetail";
import Profile from "./components/Profile";
import Main from "./components/Main";
const App = () => {
  return (
    <Router>
      <DataProvider>
        <Nav />
        <Main />
      </DataProvider>
    </Router>
  );
};
export default App;
