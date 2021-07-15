import React from "react";
import { useSiteData } from "../contexts/DataContext";
import Loader from "./Loader";
import "./EarthquakeGrid.css";
const EarthquakesGrid = () => {
  const { loading, data } = useSiteData();
  return (
    <>
      {loading && <Loader />}
      {data && (
        <table className="grid">
          <tr>
            <th>Title</th>
          </tr>
        </table>
      )}
    </>
  );
};
export default EarthquakesGrid;
