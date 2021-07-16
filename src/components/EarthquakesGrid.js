import React, { useEffect, useState } from "react";
import { useSiteData } from "../contexts/DataContext";
import "./EarthquakeGrid.css";
import formatDate from "../utils/formatDate";
import { Link } from "react-router-dom";
const EarthquakesGrid = () => {
  const { data } = useSiteData();
  const [earthquakes, setEarthquakes] = useState([]);
  const [sortColumn, setSortColumn] = useState("time");
  const [sortDesc, setSortDesc] = useState(false);
  useEffect(() => {
    if (data) {
      setEarthquakes(data.data.features);
    }
  }, [data]);
  useEffect(() => {
    if (earthquakes.length) {
      const sortedEarthquakes = [...earthquakes];
      sortedEarthquakes.sort((a, b) => {
        if (typeof a.properties[sortColumn] === "string")
          return sortDesc
            ? b.properties[sortColumn] > a.properties[sortColumn]
              ? 1
              : b.properties[sortColumn] === a.properties[sortColumn]
              ? 0
              : -1
            : b.properties[sortColumn] > a.properties[sortColumn]
            ? -1
            : b.properties[sortColumn] === a.properties[sortColumn]
            ? 0
            : 1;
        return sortDesc
          ? b.properties[sortColumn] - a.properties[sortColumn]
          : a.properties[sortColumn] - b.properties[sortColumn];
      });
      setEarthquakes(sortedEarthquakes);
    }
  }, [sortColumn, sortDesc]);
  const changeSort = (column) => {
    if (column === sortColumn) {
      setSortDesc((prev) => !prev);
    } else {
      setSortColumn(column);
      setSortDesc(false);
    }
  };
  return (
    <>
      {data && <h2>{data.data.metadata.title}</h2>}
      {earthquakes.length && (
        <table className="grid">
          <tbody>
            <tr>
              <th>
                <span
                  onClick={() => {
                    changeSort("place");
                  }}
                >
                  Title
                </span>
              </th>
              <th>
                <span
                  onClick={() => {
                    changeSort("mag");
                  }}
                >
                  Magnitude
                </span>
              </th>
              <th>
                <span
                  onClick={() => {
                    changeSort("time");
                  }}
                >
                  Time
                </span>
              </th>
            </tr>
            {earthquakes.map((eq, row) => (
              <tr key={`row_${row}`}>
                <td>
                  <Link to={`/earthquake/${eq.id}`}>{eq.properties.place}</Link>
                </td>
                <td style={{ textAlign: "center" }}>{eq.properties.mag}</td>
                <td>{formatDate(eq.properties.time)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
export default EarthquakesGrid;
