import React, { useEffect } from "react";
import { useSiteData } from "../contexts/DataContext";
const Nav = () => {
  const { loading, data } = useSiteData();
  return (
    <div className="navbar">{data && <div>{data.profile.firstName}</div>}</div>
  );
};
export default Nav;
