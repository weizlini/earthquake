import React, { useContext, useState, useEffect } from "react";
import getSiteData from "../api/getSiteData";
const DataContext = React.createContext();
export default DataContext;
export const useSiteData = () => {
  return useContext(DataContext);
};
export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    getSiteData().then((siteData) => {
      setData(siteData);
      setLoading(false);
    });
  });
  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};
