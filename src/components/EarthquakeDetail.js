import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import "./EarthquakeDetail.css";
import { useSiteData } from "../contexts/DataContext";
import formatDate from "../utils/formatDate";
const EarthquakeDetail = () => {
  const { data } = useSiteData();
  const [detail, setDetail] = useState();
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    if (data && id) {
      const detailData = data.data.features.find((eq) => eq.id === id);
      if (!detailData) {
        history.replace("/");
      } else {
        setDetail(detailData.properties);
      }
    }
  }, [data, id]);
  return (
    <>
      {detail && (
        <div className={"detail-view"}>
          <h2>{detail.place}</h2>
          <table>
            <tbody>
              <tr>
                <th>Title</th>
                <td>{detail.place}</td>
              </tr>
              <tr>
                <th>Magnitude</th>
                <td>{detail.mag}</td>
              </tr>
              <tr>
                <th>Time</th>
                <td>{formatDate(detail.time)}</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>{detail.status}</td>
              </tr>
              <tr>
                <th>Tsunami</th>
                <td>{detail.tsunami}</td>
              </tr>
              <tr>
                <th>Type</th>
                <td>{detail.type}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default EarthquakeDetail;
