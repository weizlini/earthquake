import React from "react";
import { useParams } from "react-router";
const EarthquakeDetail = () => {
  const { id } = useParams();
  return <div>earthquake id={id}</div>;
};
export default EarthquakeDetail;
