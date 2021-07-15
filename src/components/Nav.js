import React, { useEffect } from "react";
import { useSiteData } from "../contexts/DataContext";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const { loading, data } = useSiteData();
  return (
    <nav className="navbar">
      <Link to="/">
        <img src="https://www.realtor.com/realtor-com.png" className="logo" />
      </Link>
      <h1 style={{ justifySelf: "center" }}>Earthquake Zen Garden</h1>
      {data && (
        <div className="profile-link">
          <Link to="/profile">Welcome {data.profile.firstName}</Link>
        </div>
      )}
    </nav>
  );
};
export default Nav;
